"use client";

import Button from "@/app/components/common/Button";
import { ComponentProps, FC, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedTitle from "@/app/components/common/AnimatedTitle";
import { useUserPreferencesContext } from "@/context/useUserPreferencesContext";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import brandCircle from "@/public/assets/images/brand-circle2.png";

interface RecentWorkProps extends ComponentProps<"div"> {}

const RecentWork: FC<RecentWorkProps> = ({ className, ...props }) => {
    const sectionContext = useRef<HTMLDivElement | null>(null);
    const { userPrefersReducedMotion } = useUserPreferencesContext();

    useLayoutEffect(() => {
        if (userPrefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".brand",
                {
                    scale: 1,
                    opacity: 1
                },
                {
                    scale: 3,
                    opacity: 0.1,
                    scrollTrigger: {
                        trigger: sectionContext.current,
                        start: "top top",
                        end: "bottom top+=100",
                        scrub: 1
                    }
                }
            );
        }, sectionContext);

        return () => {
            ctx.revert();
        };
    }, [userPrefersReducedMotion]);

    return (
        <div className={clsx("py-10 md:py-20 overflow-hidden", className)} ref={sectionContext} {...props}>
            <div className="container">
                <div className="relative z-20 flex items-start justify-between">
                    <div>
                        <p className="uppercase text-xs md:text-sm">Click to see our recent work</p>
                        <AnimatedTitle className="text-25 md:text-6xl uppercase mt-3 md:mb-8" title="Recent work" />
                    </div>

                    <Link href="#pricing" className="hidden md:block mt-6">
                        <Button aria-label="See pricing" className="" tabIndex={-1}>
                            I want mine
                        </Button>
                    </Link>
                </div>

                <div className="grid place-items-center pt-10 md:py-10">
                    <div className="relative z-10">
                        <div className="brand w-[40vw] aspect-square max-w-[324px] md:max-w-none">
                            <Image className="object-cover" src={brandCircle} alt="Brand Circle" fill={true} />
                        </div>

                        <a
                            className="absolute right-6 md:right-0 top-12 translate-x-1/4 cursor-pointer block bg-lemon py-6 md:py-10 px-8 rounded-xl md:rounded-[2rem] uppercase font-anton text-2xl md:text-3xl"
                            href="https://chameleonic.io"
                            target="_blank"
                            title="Chameleonic"
                            rel="noreferrer"
                        >
                            Chameleonic
                        </a>
                        <a
                            className="absolute left-12 md:left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer block bg-lemon py-6 md:py-10 px-8 rounded-xl md:rounded-[2rem] uppercase font-anton text-2xl md:text-3xl"
                            href="https://creativadesign.co"
                            target="_blank"
                            title="Creativa"
                            rel="noreferrer"
                        >
                            Creativa
                        </a>
                        <a
                            className="absolute right-5 md:right-0 bottom-12 md:bottom-24 translate-x-8 cursor-pointer block bg-lemon py-6 md:py-10 px-8 rounded-xl md:rounded-[2rem] uppercase font-anton text-2xl md:text-3xl"
                            href="https://miguelbruno.es"
                            target="_blank"
                            title="Miguel Bruñó"
                            rel="noreferrer"
                        >
                            Miguel Bruñó
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentWork;
