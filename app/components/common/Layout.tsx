"use client";

import { ComponentProps, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import Button from "@/app/components/common/Button";
import { useUserPreferencesContext } from "@/context/useUserPreferencesContext";
import { useGeneralContext } from "@/context/useGeneralContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InitialDoodle from "../svgs/InitialDoodle";
import Logo from "./Logo";

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps extends ComponentProps<"div"> {}

const Layout = ({ children, className, ...props }: LayoutProps) => {
    const { isInitialAnimationLoading, setIsInitialAnimationLoading } = useGeneralContext();
    const { userPrefersReducedMotion } = useUserPreferencesContext();
    const sectionContext = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (userPrefersReducedMotion) return setIsInitialAnimationLoading(false);

        gsap.to(sectionContext.current, {
            opacity: 0,
            duration: 0.5,
            delay: 2.25,
            onComplete: () => {
                setIsInitialAnimationLoading(false);
            }
        });

        const ctx = gsap.context(() => {
            const doodleTimeline = gsap.timeline();
            const logoTimeline = gsap.timeline();
            const doodle = ".loading-doodle";
            const logo = ".loading-logo";

            doodleTimeline.from(doodle, {
                opacity: 0,
                duration: 0.2,
                delay: 0.3
            });
            doodleTimeline.to(doodle, {
                scale: 0.1,
                duration: 1.5
            });
            doodleTimeline.to(doodle, {
                opacity: 0,
                duration: 0.3
            });

            logoTimeline.from(logo, {
                opacity: 0,
                scale: 0.75,
                duration: 0.5,
                delay: 1.3
            });
        }, sectionContext);

        return () => {
            ctx.revert();
        };
    }, [userPrefersReducedMotion, setIsInitialAnimationLoading]);

    return (
        <>
            {isInitialAnimationLoading && (
                <div
                    className="fixed top-0 left-0 z-[53] w-screen h-screen bg-forest-green flex flex-col items-center justify-center gap-12"
                    ref={sectionContext}
                >
                    <InitialDoodle className="loading-doodle h-[70vh]" />
                    <Logo className="loading-logo w-[80vw] h-auto absolute top-1/2 -translate-y-1/2" color="#B4E55E" />
                </div>
            )}
            <a
                className="absolute z-20 top-8 left-2 -translate-x-[100vw] transition-all focus-visible:outline-none focus-visible:translate-x-0"
                href="#layout-content"
            >
                <Button aria-label="Skip to content" size="sm" tabIndex={-1}>
                    Skip to content
                </Button>
            </a>
            <div
                className={clsx("min-w-screen min-h-screen flex flex-col items-stretch justify-between", className)}
                {...props}
            >
                <Header />
                <div className="flex-1" id="layout-content">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
