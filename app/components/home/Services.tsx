import { ComponentProps, FC } from "react";
import AnimatedTitle from "@/app/components/common/AnimatedTitle";
import Button from "@/app/components/common/Button";
import clsx from "clsx";
import Link from "next/link";

interface ServicesProps extends ComponentProps<"div"> {}

const Services: FC<ServicesProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("container relative py-10 md:py-20", className)} {...props}>
            <p className="uppercase text-xs md:text-sm">Our services</p>
            <AnimatedTitle className="w-max text-25 md:text-6xl uppercase mt-3 md:mb-8" title="What we do" />

            <div className="grid md:grid-cols-2 gap-4 max-w-[850px] mx-auto py-8 md:py-10">
                <div className="bg-wine p-6 rounded-[2rem] text-lile">
                    <h3 className="font-anton uppercase text-15 lg:text-3xl mb-8 whitespace-nowrap">
                        App design and development
                    </h3>
                    <p className="text-base md:text-xl">
                        Creating intuitive and user-friendly web and mobile applications that captivate users.
                    </p>
                </div>
                <div className="bg-lile p-6 rounded-[2rem]">
                    <h3 className="font-anton uppercase text-15 lg:text-3xl mb-8 whitespace-nowrap">
                        Web design and development
                    </h3>
                    <p className="text-base md:text-xl">
                        Crafting visually stunning and highly functional websites tailored to clients&apos; needs and
                        brand identity.
                    </p>
                </div>
                <div className="bg-lemon p-6 rounded-[2rem]">
                    <h3 className="font-anton uppercase text-15 lg:text-3xl mb-8 whitespace-nowrap">Product design</h3>
                    <p className="text-base md:text-xl">
                        Developing innovative and user-centric product designs that meet market demands and enhance
                        usability.
                    </p>
                </div>
                <div className="bg-grey p-6 rounded-[2rem]">
                    <h3 className="font-anton uppercase text-15 lg:text-3xl mb-8 whitespace-nowrap">
                        Maintenance and Support
                    </h3>
                    <p className="text-base md:text-xl">
                        Offering ongoing maintenance and support to keep websites and applications running smoothly.
                    </p>
                </div>
            </div>

            <Link href="#pricing" className="block mx-auto w-max md:absolute md:top-24 md:right-0">
                <Button aria-label="See pricing" className="" tabIndex={-1}>
                    start a project
                </Button>
            </Link>
        </div>
    );
};

export default Services;
