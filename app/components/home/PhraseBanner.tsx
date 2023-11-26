"use client";

import Button from "@/app/components/common/Button";
import brandSquare from "@/public/assets/images/brand-square-3.png";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useUserPreferencesContext } from "@/context/useUserPreferencesContext";
import Image from "next/image";
import Link from "next/link";

const PhraseBanner = () => {
    const sectionContext = useRef<HTMLDivElement | null>(null);
    const { userPrefersReducedMotion } = useUserPreferencesContext();

    useLayoutEffect(() => {
        if (userPrefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".wrapper-background",
                {
                    backgroundColor: "#FFD9E0"
                },
                {
                    backgroundColor: "#E5EAE7",
                    scrollTrigger: {
                        trigger: sectionContext.current,
                        start: "top bottom-=200",
                        end: "top center",
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
        <div ref={sectionContext}>
            <div className="wrapper-background relative py-10 md:py-20 w-full overflow-x-hidden">
                <div className="relative z-20 container grid gap-6 md:gap-20 justify-items-center">
                    <p className="text-15 md:text-3xl max-w-[950px] font-semibold uppercase">
                        In a digital world, your online presence is power. At Itakhi, we specialize in empowering
                        artists, freelancers, NGOs, and changemakers like you. We boost your impact and reach, ensuring
                        your message resonates where it counts.
                    </p>
                    <Link href="#pricing" className="w-max">
                        <Button aria-label="See pricing" tabIndex={-1}>
                            Let&apos;s do it
                        </Button>
                    </Link>
                </div>

                <Image
                    className="absolute z-10 bottom-6 md:bottom-1/4 -right-8 w-48 md:w-auto"
                    src={brandSquare}
                    alt="Brand square"
                    width={500}
                    height={300}
                />
            </div>
        </div>
    );
};

export default PhraseBanner;
