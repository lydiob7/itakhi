"use client";

import { ComponentProps, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useUserPreferencesContext } from "@/context/useUserPreferencesContext";

interface TextDisplayProps extends ComponentProps<"div"> {
    color?: "forest-green" | "lime-green";
    content: string;
    speed?: "fast" | "slow";
}

const TextDisplay = ({ className, color = "lime-green", content, speed = "fast", ...props }: TextDisplayProps) => {
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
        "forest-green": "bg-forest-green",
        "lime-green": "bg-lime-green"
    };

    return (
        <div className={clsx("w-full overflow-hidden", colorOptions[color], className)} {...props}>
            <div
                className={clsx(
                    "flex items-center gap-4 py-6 w-max",
                    userPrefersReducedMotion ? "" : speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
                )}
            >
                <div className="flex items-baseline gap-2" ref={originalDivRef}>
                    <p className="text-xs uppercase whitespace-pre-line">{content}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_743_6150)">
                            <path
                                d="M11.4664 3.61433C11.1569 3.8862 10.9505 4.03638 10.7668 4.23316C9.07877 6.0353 7.52291 8.05493 6.04851 10.2027C5.50274 10.9976 4.95878 11.8003 4.45102 12.6444C3.87809 13.5973 3.3459 14.6019 2.79741 15.5858C2.60824 15.925 2.44442 16.3005 2.22901 16.6008C1.94571 16.9957 1.37912 17.0345 1.09945 16.7394C0.745558 16.3665 0.602553 15.4383 0.831542 14.8932C0.917526 14.69 1.02795 14.4789 1.16462 14.3533C1.86064 13.7164 2.38016 12.8076 2.93951 11.9725C4.22746 10.05 5.60501 8.26078 6.9174 6.37967C7.53649 5.49155 8.21259 4.69923 8.85159 3.85642C9.71415 2.71973 10.7324 1.82384 11.7877 1.05483C11.8981 0.974559 12.0493 0.97197 12.1787 0.9888C12.3787 1.01469 12.5752 1.09625 12.7743 1.14157C13.425 1.28786 13.6812 1.67625 13.6486 2.57344C13.6042 3.79816 13.3888 4.97887 13.0005 6.06637C12.3534 7.87886 11.6646 9.66158 10.9885 11.4547C10.4735 12.8205 9.94676 14.1773 9.43809 15.5496C9.33401 15.8318 9.28966 16.1594 9.22721 16.4235C9.41185 16.729 9.59196 16.6462 9.74039 16.5685C10.5034 16.1697 11.261 15.7503 12.0203 15.3334C12.4629 15.0913 12.9019 14.835 13.3454 14.598C13.8649 14.3197 14.3808 14.1346 14.8976 14.6459C14.9963 14.7443 15.161 14.6964 15.2913 14.7404C16.0037 14.9812 16.2118 15.3347 16.3041 16.4209C16.3159 16.5594 16.3467 16.6953 16.372 16.8559C17.2617 17.1744 18.1985 16.9271 19.1407 17.3854C19.09 17.6223 19.0801 17.867 18.9932 18.0224C18.871 18.2411 18.7081 18.4392 18.5334 18.5687C17.8944 19.0425 17.2083 19.3105 16.4906 19.3882C15.5982 19.484 14.8831 19.1098 14.5274 17.8178C14.4659 17.5938 14.3835 17.3815 14.3193 17.186C14.007 16.9737 13.7744 17.2456 13.5318 17.3776C12.7091 17.8269 11.8981 18.3266 11.0682 18.7473C10.3269 19.1228 9.55666 19.2328 8.76561 19.1202C7.9646 19.0063 7.43602 18.469 7.22151 17.3427C7.18622 17.1575 7.15363 16.9711 7.11381 16.7497C7.88314 14.8272 8.66062 12.9021 9.42361 10.9666C9.62273 10.4604 9.7766 9.91792 9.954 9.39359C10.4111 8.04328 10.879 6.70074 11.3225 5.34137C11.5415 4.67075 11.5207 4.65651 11.4655 3.61433H11.4664Z"
                                fill="#16280E"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_743_6150">
                                <rect
                                    width="18.4214"
                                    height="18.4214"
                                    fill="white"
                                    transform="translate(0.721344 0.980469)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                {Array.from(Array(numberOfTextBlocks).fill(content)).map((text, i) => (
                    <div key={`${text}-${i}`} className="flex items-baseline gap-2">
                        <p className="text-xs uppercase whitespace-pre-line">{text}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_743_6150)">
                                <path
                                    d="M11.4664 3.61433C11.1569 3.8862 10.9505 4.03638 10.7668 4.23316C9.07877 6.0353 7.52291 8.05493 6.04851 10.2027C5.50274 10.9976 4.95878 11.8003 4.45102 12.6444C3.87809 13.5973 3.3459 14.6019 2.79741 15.5858C2.60824 15.925 2.44442 16.3005 2.22901 16.6008C1.94571 16.9957 1.37912 17.0345 1.09945 16.7394C0.745558 16.3665 0.602553 15.4383 0.831542 14.8932C0.917526 14.69 1.02795 14.4789 1.16462 14.3533C1.86064 13.7164 2.38016 12.8076 2.93951 11.9725C4.22746 10.05 5.60501 8.26078 6.9174 6.37967C7.53649 5.49155 8.21259 4.69923 8.85159 3.85642C9.71415 2.71973 10.7324 1.82384 11.7877 1.05483C11.8981 0.974559 12.0493 0.97197 12.1787 0.9888C12.3787 1.01469 12.5752 1.09625 12.7743 1.14157C13.425 1.28786 13.6812 1.67625 13.6486 2.57344C13.6042 3.79816 13.3888 4.97887 13.0005 6.06637C12.3534 7.87886 11.6646 9.66158 10.9885 11.4547C10.4735 12.8205 9.94676 14.1773 9.43809 15.5496C9.33401 15.8318 9.28966 16.1594 9.22721 16.4235C9.41185 16.729 9.59196 16.6462 9.74039 16.5685C10.5034 16.1697 11.261 15.7503 12.0203 15.3334C12.4629 15.0913 12.9019 14.835 13.3454 14.598C13.8649 14.3197 14.3808 14.1346 14.8976 14.6459C14.9963 14.7443 15.161 14.6964 15.2913 14.7404C16.0037 14.9812 16.2118 15.3347 16.3041 16.4209C16.3159 16.5594 16.3467 16.6953 16.372 16.8559C17.2617 17.1744 18.1985 16.9271 19.1407 17.3854C19.09 17.6223 19.0801 17.867 18.9932 18.0224C18.871 18.2411 18.7081 18.4392 18.5334 18.5687C17.8944 19.0425 17.2083 19.3105 16.4906 19.3882C15.5982 19.484 14.8831 19.1098 14.5274 17.8178C14.4659 17.5938 14.3835 17.3815 14.3193 17.186C14.007 16.9737 13.7744 17.2456 13.5318 17.3776C12.7091 17.8269 11.8981 18.3266 11.0682 18.7473C10.3269 19.1228 9.55666 19.2328 8.76561 19.1202C7.9646 19.0063 7.43602 18.469 7.22151 17.3427C7.18622 17.1575 7.15363 16.9711 7.11381 16.7497C7.88314 14.8272 8.66062 12.9021 9.42361 10.9666C9.62273 10.4604 9.7766 9.91792 9.954 9.39359C10.4111 8.04328 10.879 6.70074 11.3225 5.34137C11.5415 4.67075 11.5207 4.65651 11.4655 3.61433H11.4664Z"
                                    fill="#16280E"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_743_6150">
                                    <rect
                                        width="18.4214"
                                        height="18.4214"
                                        fill="white"
                                        transform="translate(0.721344 0.980469)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextDisplay;
