"use client";

import { ComponentProps, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import TopSection from "@/app/components/home/TopSection";
import { useGeneralContext } from "@/context/useGeneralContext";
import { sections } from "@/context/GeneralContextProvider";
import TextDisplay from "./TextDisplay";
import PhraseBanner from "./PhraseBanner";
import Discount from "./Discount";
import Keywords from "./Keywords";
import ClientPortal from "./ClientPortal";
import Services from "./Services";
import RecentWork from "./RecentWork";
import Blog from "./Blog";
import FAQs from "./FAQs";
import Contact from "./Contact";
import Newsletter from "../common/Newsletter";

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
            <TopSection id={sections.top} />
            <TextDisplay content="we're also eager to do it fast, without all the fluff" />
            <PhraseBanner />
            <Discount />
            <Keywords />
            <Services id={sections.services} />
            <ClientPortal />
            <RecentWork id={sections.recentWork} />
            <Blog />
            <Newsletter />
            <FAQs id={sections.faqs} />
            <Contact id={sections.contact} />
        </div>
    );
};

export default HomePage;
