"use client";

import Button from "@/app/components/common/Button";
import AnimatedTitle from "@/app/components/common/AnimatedTitle";
import { useGeneralContext } from "@/context/useGeneralContext";
import Link from "next/link";

function TopSection() {
    const { isInitialAnimationLoading } = useGeneralContext();

    return (
        <div className="relative">
            <div className="container relative z-20">
                <div className="w-full lg:w-1/2 py-10">
                    <div className="font-display-xxl">
                        We <span className="text-lime-green">design</span>, we{" "}
                        <span className="text-lime-green">code</span>, and proudly embrace our status as{" "}
                        <span className="text-lime-green">free spirits</span> against the ordinary
                    </div>
                    <div className="flex gap-2 md:gap-8">
                        <Link href="#pricing">
                            <Button aria-label="See pricing" tabIndex={-1} color="secondary">
                                Start a Project
                            </Button>
                        </Link>
                        <Link href="#services">
                            <Button aria-label="Services" color="secondary" variant="outlined" tabIndex={-1}>
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:absolute top-0 left-0 w-full md:h-full bg-gray" />
            <div className="relative md:absolute overflow-hidden top-full md:top-0 left-0 md:left-1/2 w-full md:w-1/2 h-[60vh] md:h-full bg-center bg-cover bg-no-repeat"></div>
        </div>
    );
}

export default TopSection;
