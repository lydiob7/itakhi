import Button from "@/app/components/common/Button";
import Link from "next/link";
import Image from "next/image";
import { ComponentProps, FC } from "react";
import clsx from "clsx";

interface TopSectionProps extends ComponentProps<"div"> {}

const TopSection: FC<TopSectionProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("container md:flex", className)} {...props}>
            <div className="w-full py-10">
                <div className="font-display">
                    We <span className="text-lime-green">design</span>, we <span className="text-lime-green">code</span>
                    , and proudly embrace our status as <span className="text-lime-green">free spirits</span> against
                    the ordinary
                </div>
                <div className="flex gap-2 md:gap-8 mt-8">
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
            <div className="w-full h-[60vh] md:h-full">
                <Image src="/assets/images/message.png" alt="Message" width={747} height={571} />
            </div>
        </div>
    );
};

export default TopSection;
