"use client";

import Button from "@/app/components/common/Button";
import { BlackSpiral, LileSpiral, WineSpiral, YellowSpiral } from "@/public/assets/images/spirals";
import AnimatedTitle from "@/app/components/common/AnimatedTitle";
import { useGeneralContext } from "@/context/useGeneralContext";
import Link from "next/link";

function TopSection() {
    const { isInitialAnimationLoading } = useGeneralContext();

    return (
        <div className="relative">
            <div className="container relative z-20">
                <div className="w-full md:w-1/2 py-10 md:py-28 md:pr-12">
                    <p className="text-xs md:text-sm uppercase mb-4">Design and web development </p>
                    <AnimatedTitle
                        className="text-[40px] md:text-[70px] uppercase leading-[1.2] md:leading-[1.05]"
                        delay={isInitialAnimationLoading ? 1.5 : 0}
                        title="Crafting your online presence"
                    />
                    <p className="text-sm md:text-2xl my-4 md:my-8">
                        We specialize in providing design and development solutions tailored to your exact preferences,
                        all while keeping things straightforward – no unnecessary meetings, no unnecessary
                        embellishments. At Itakhi, we only care about making our clients 100% happy.
                    </p>
                    <div className="flex gap-2 md:gap-8">
                        <Link href="#pricing">
                            <Button aria-label="See pricing" tabIndex={-1}>
                                Start a Project
                            </Button>
                        </Link>
                        <Link href="#services">
                            <Button aria-label="Services" color="black" variant="outlined" tabIndex={-1}>
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:absolute top-0 left-0 w-full md:h-full bg-gray" />
            <div
                style={{ backgroundImage: "url(assets/images/brand-square.jpg)" }}
                className="relative md:absolute overflow-hidden top-full md:top-0 left-0 md:left-1/2 w-full md:w-1/2 h-[60vh] md:h-full bg-center bg-cover bg-no-repeat"
            >
                <WineSpiral
                    className="absolute top-2 md:top-4 -right-8 md:right-0 motion-safe:animate-spin"
                    style={{ animationDuration: "60s" }}
                />
                <BlackSpiral
                    className="absolute top-24 md:top-48 left-2 md:left-28 motion-safe:animate-spin"
                    style={{ animationDuration: "50s" }}
                />
                <LileSpiral
                    className="absolute top-60 md:top-80 left-40 md:left-72 w-40 md:w-auto motion-safe:animate-spin"
                    style={{ animationDuration: "60s", animationDirection: "reverse" }}
                />
                <YellowSpiral
                    className="absolute top-[70%] md:top-[476px] left-64 md:left-[400px] w-24 md:w-auto motion-safe:animate-spin"
                    style={{ animationDuration: "80s" }}
                />
            </div>
        </div>
    );
}

export default TopSection;
