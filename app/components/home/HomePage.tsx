"use client";

import { ComponentProps, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import TopSection from "@/app/components/home/TopSection";
import { useGeneralContext } from "@/context/useGeneralContext";
import { sections } from "@/context/GeneralContextProvider";

interface HomePageProps extends ComponentProps<"div"> {}

const HomePage = ({ className, ...props }: HomePageProps) => {
    const sectionContext = useRef<HTMLDivElement | null>(null);
    const { setCurrentSection } = useGeneralContext();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            Object.values(sections).forEach((sectionTag) => {
                gsap.to(`#${sectionTag}`, {
                    scrollTrigger: {
                        trigger: `#${sectionTag}`,
                        start: "top center+=100",
                        end: "bottom center+=100",
                        toggleActions: "restart none none reverse",
                        onToggle: ({ isActive }) => (isActive ? setCurrentSection(sectionTag) : undefined)
                    }
                });
            });
        }, sectionContext);

        return () => {
            ctx.revert();
            setCurrentSection(null);
        };
    }, [setCurrentSection]);

    return (
        <div ref={sectionContext} className={clsx("", className)} {...props}>
            <TopSection />
        </div>
    );
};

export default HomePage;
