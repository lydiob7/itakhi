import Button from "@/app/components/common/Button";
import routes from "@/config/routes";
import AnimatedTitle from "@/app/components/common/AnimatedTitle";
import { ComponentProps, FC } from "react";
import clsx from "clsx";
import Link from "next/link";

interface PricingProps extends ComponentProps<"div"> {}

const Pricing: FC<PricingProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("container py-10 md:py-20", className)} {...props}>
            <div className="max-w-md">
                <p className="uppercase text-xs md:text-sm">pricing</p>
                <AnimatedTitle
                    className="text-25 md:text-6xl uppercase mt-3 mb-8 max-w-[80vw] md:max-w-none"
                    title="Choose your plan that works for you"
                />
                <p className="my-8 text-xl font-light">
                    We also provide subscription plans for ongoing collaboration. Our goal is to offer flexibility that
                    suits your specific needs, whether you prefer a single project or a continuous partnership
                </p>
            </div>

            <div className="my-20 mx-6 md:mx-0 lg:mx-14 grid md:flex items-stretch justify-center md:justify-between gap-4">
                <div className="max-w-[355px] px-8 md:px-4 lg:px-8 py-6 bg-gray rounded-[2rem] flex flex-col items-center justify-between">
                    <div className="flex flex-col items-center">
                        <h3 className="uppercase text-base mb-4 w-full">starter</h3>
                        <p className="font-anton text-5xl uppercase mb-8">$2500/ one time</p>
                        <ul className="mb-12 font-semibold leading-7 w-full">
                            <li>Front-end and back end development</li>
                            <li>Website design ( max 4 pages)</li>
                            <li>Content integration</li>
                        </ul>
                    </div>
                    <Link href={`${routes.contact}?plan=starter`}>
                        <Button aria-label="Contact form for Starter plan" color="black" tabIndex={-1}>
                            Get started
                        </Button>
                    </Link>
                </div>

                <div className="max-w-[355px] px-8 md:px-4 lg:px-8 py-6 bg-lile rounded-[2rem] flex flex-col items-center justify-between">
                    <div className="flex flex-col items-center">
                        <h3 className="uppercase text-base mb-4 w-full">standard</h3>
                        <p className="font-anton text-5xl uppercase mb-8">$3000/ monthly</p>
                        <ul className="mb-12 font-semibold leading-7 w-full">
                            <li>One request at a time</li>
                            <li>Average 1 week delivery</li>
                            <li>Pause or cancel anytime</li>
                        </ul>
                    </div>
                    <Link href={`${routes.contact}?plan=standard`}>
                        <Button aria-label="Contact form for Standard plan" color="black" tabIndex={-1}>
                            Get started
                        </Button>
                    </Link>
                </div>

                <div className="max-w-[355px] px-8 md:px-4 lg:px-8 py-6 bg-wine text-lile rounded-[2rem] flex flex-col items-center justify-between">
                    <div className="flex flex-col items-center">
                        <h3 className="uppercase text-base mb-4 w-full">Premium</h3>
                        <p className="font-anton text-5xl uppercase mb-8">$6000/ monthly</p>
                        <ul className="mb-12 font-semibold leading-7 w-full">
                            <li>Two requests at a time</li>
                            <li>Average 1.5 week delivery</li>
                            <li>Pause or cancel anytime</li>
                        </ul>
                    </div>
                    <Link href={`${routes.contact}?plan=premium`}>
                        <Button aria-label="Contact form for Premium plan" color="black" tabIndex={-1}>
                            Get started
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
