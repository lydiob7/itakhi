"use client";

import { ComponentProps, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import { useUserPreferencesContext } from "../../../context/useUserPreferencesContext";
import { shuffleArray } from "../../../utils";

interface AnimatedTitleProps extends ComponentProps<"h2"> {
    delay?: number;
    level?: "word" | "letter";
    title?: string;
}

const AnimatedTitle = ({ children, className, delay = 0, level = "word", title, ...props }: AnimatedTitleProps) => {
    const { userPrefersReducedMotion } = useUserPreferencesContext();
    const titleContext = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (userPrefersReducedMotion) return;

        const ctx = gsap.context(() => {
            if (level === "word") {
                const words = gsap.utils.toArray(".animated-title_word");
                const shuffledWords = shuffleArray(words);

                gsap.set(".animated-title", { perspective: 400, transformOrigin: "left" });

                shuffledWords.forEach((word: any, i) => {
                    gsap.from(word, {
                        opacity: 0,
                        z: -100,
                        duration: 0.2,
                        delay: delay + 0.3 + i * 0.04,
                        scrollTrigger: {
                            trigger: titleContext.current,
                            start: "top bottom-=100",
                            toggleActions: "restart none none reverse"
                        }
                    });
                });
            }
            if (level === "letter") {
                const letters = gsap.utils.toArray(".letter");
                const shuffledLetters = shuffleArray(letters);

                gsap.set(".animated-title .animated-title_word", { perspective: 400 });

                shuffledLetters.forEach((letter: any, i) => {
                    gsap.from(letter, {
                        opacity: 0,
                        z: -100,
                        duration: 0.3,
                        delay: delay + 0.3 + i * 0.01,
                        scrollTrigger: {
                            trigger: titleContext.current,
                            start: "top bottom-=100",
                            toggleActions: "restart none none reverse"
                        }
                    });
                });
            }
        }, titleContext);

        return () => {
            ctx.revert();
        };
    }, [delay, level, title, userPrefersReducedMotion]);

    if (!title)
        return (
            <h2 className={clsx("", className)} {...props}>
                {children}
            </h2>
        );

    return (
        <div ref={titleContext} className={clsx("font-anton", className)}>
            <h2 className="animated-title" {...props}>
                {title.split(" ").map((word, wi) => (
                    <span key={`${word}-${wi}`} className="animated-title_word inline-block mr-4">
                        {level === "word" && <>{word}</>}
                        {level === "letter" && (
                            <>
                                {word.split("").map((letter, i) => (
                                    <span
                                        key={`${letter}-${i}`}
                                        className={clsx(
                                            `inline-block letter letter-${i + 1}`,
                                            letter === " " ? "min-w-[1ch]" : ""
                                        )}
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </>
                        )}
                    </span>
                ))}
            </h2>
        </div>
    );
};

export default AnimatedTitle;
