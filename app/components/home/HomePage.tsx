"use client";

import { ComponentProps, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import TextDisplay from "@/app/components/home/TextDisplay";
import Philosophy from "@/app/components/home/Philosophy";
import Services from "@/app/components/home/Services";
import RecentWork from "@/app/components/home/RecentWork";
import PhraseBanner from "@/app/components/home/PhraseBanner";
import FAQs from "@/app/components/home/FAQs";
import TopSection from "@/app/components/home/TopSection";
import { useGeneralContext } from "@/context/useGeneralContext";
import { sections } from "@/context/GeneralContextProvider";
import Newsletter from "../common/Newsletter";
import FeaturedPosts from "../common/FeaturedPosts";

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
    }, []);

    return (
        <div ref={sectionContext} className={clsx("", className)} {...props}>
            <TopSection />
            <TextDisplay content={`Digital\nAtelier`} speed="slow" />
            <Philosophy id={sections.philosophy} />
            <PhraseBanner />
            <Services id={sections.services} />
            <TextDisplay color="lemon" content="we're also eager to do it fast, without all the fluff" speed="slow" />
            <RecentWork id={sections.recentWork} />
            <FeaturedPosts />
            <div className="relative">
                <Newsletter className="absolute z-50 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
            <FAQs id={sections.faqs} />
        </div>
    );
};

export default HomePage;
