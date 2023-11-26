import Button from "@/app/components/common/Button";
import clsx from "clsx";
import { ComponentProps, FC, ReactNode } from "react";
import AnimatedTitle from "@/app/components/common/AnimatedTitle";
import Image from "next/image";
import Link from "next/link";
import brandCircle from "@/public/assets/images/brand-circle2.png";

interface PhilosophyCardProps {
    className?: string;
    content?: ReactNode;
    step?: number;
}

const PhilosophyCard: FC<PhilosophyCardProps> = ({ className, content, step }) => (
    <div
        className={clsx(
            "w-48 md:w-96 p-2 md:p-6 bg-lemon rounded-xl md:rounded-[2rem] relative z-10 font-anton shrink-0",
            className
        )}
    >
        <p className="text-2xl md:text-3xl uppercase mb-2 md:mb-4">step {step}/5</p>
        <p className="text-base md:text-3xl uppercase">{content}</p>
    </div>
);

interface PhilosophyProps extends ComponentProps<"div"> {}

const Philosophy: FC<PhilosophyProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("md:bg-wine md:py-20 overflow-x-hidden", className)} {...props}>
            <div className="md:container flex flex-col md:flex-row md:gap-8">
                <div className="w-full bg-wine py-10 md:py-0 px-4 sm:px-[calc((100vw-640px)/2)] md:px-0 md:w-1/2">
                    <p className="uppercase text-lemon text-xs md:text-sm">Our philosophy</p>
                    <AnimatedTitle
                        className="text-lile text-25 md:text-6xl uppercase mt-3 mb-8"
                        title="We're breaking free from the conventional"
                    />
                    <p className="text-grey font-light text-base md:text-xl">
                        At Itakhi, we live by a simple yet revolutionary philosophy: to unleash the full potential of
                        design and development without the baggage of traditional approaches. We&apos;re breaking free
                        from the conventional.
                        <br />
                        At Itakhi, we cherish and uphold the unparalleled uniqueness of every client&apos;s vision. We
                        are unapologetically non-conformist, and our approach is rooted in the deep respect we hold for
                        individuality.
                    </p>
                    <Link href="#pricing">
                        <Button aria-label="See pricing" className="mt-8" tabIndex={-1}>
                            be unapollegetically
                        </Button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 pt-40 md:py-16 pl-6 md:pl-0 min-h-[400px] md:min-h-[70vh] relative flex items-start gap-2">
                    <div className="absolute top-10 md:top-0 left-1/2 -translate-x-[45%] md:translate-x-0 md:left-16 aspect-square w-full">
                        <Image className="object-cover" src={brandCircle} alt="Itakhi circle" fill={true} />
                    </div>

                    <PhilosophyCard className="" content="Share Your Requirements without formalities." step={1} />
                    <PhilosophyCard
                        className="mt-8"
                        content="We provide a tailored plan with transparent pricing."
                        step={2}
                    />
                    <PhilosophyCard
                        className="mt-16"
                        content="Agile execution: we swiftly work on your design and development tasks."
                        step={3}
                    />
                    <PhilosophyCard
                        className="mt-24"
                        content="Feedback and Refinement until you're satisfied."
                        step={4}
                    />
                    <PhilosophyCard
                        className="mt-32"
                        content="We deliver your final designs promptly and offer ongoing assistance"
                        step={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
