"use client";

import { ComponentProps, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useUserPreferencesContext } from "@/context/useUserPreferencesContext";

interface TextDisplayProps extends ComponentProps<"div"> {
    color?: "lile" | "lemon";
    content: string;
    speed?: "fast" | "slow";
}

const TextDisplay = ({ className, color = "lile", content, speed = "fast", ...props }: TextDisplayProps) => {
    const { userPrefersReducedMotion } = useUserPreferencesContext();

    const originalDivRef = useRef<HTMLDivElement>(null);

    const [numberOfTextBlocks, setNumberOfTextBlocks] = useState<number>(1);

    const calculateNumberOfTextBlocks = useCallback(() => {
        if (originalDivRef.current) {
            const divWidth = originalDivRef.current.clientWidth;
            const screenWidth = window.innerWidth;
            const numberOfBlocks = Math.ceil(screenWidth / divWidth) * 2;
            setNumberOfTextBlocks(numberOfBlocks - 1);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("load", calculateNumberOfTextBlocks);
        window.addEventListener("resize", calculateNumberOfTextBlocks);

        return () => {
            window.addEventListener("load", calculateNumberOfTextBlocks);
            window.addEventListener("resize", calculateNumberOfTextBlocks);
        };
    }, [calculateNumberOfTextBlocks]);

    const colorOptions = {
        lemon: "bg-lemon",
        lile: "bg-lile"
    };

    return (
        <div className={clsx("w-full overflow-hidden", colorOptions[color], className)} {...props}>
            <div
                className={clsx(
                    "flex items-center gap-4 py-8 w-max",
                    userPrefersReducedMotion ? "" : speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
                )}
            >
                <div className="flex items-center gap-2" ref={originalDivRef}>
                    <p className="text-xs uppercase whitespace-pre-line">{content}</p>
                    <span className="block h-2 w-2 bg-black rounded-full" />
                </div>
                {Array.from(Array(numberOfTextBlocks).fill(content)).map((text, i) => (
                    <div key={`${text}-${i}`} className="flex items-center gap-2">
                        <p className="text-xs uppercase whitespace-pre-line">{text}</p>
                        <span className="block h-2 w-2 bg-black rounded-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextDisplay;
