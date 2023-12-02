import { ComponentProps } from "react";
import clsx from "clsx";
import Image from "next/image";
import { DoodleIcon, SignatureIcon } from "../common/Icons";
import Button from "../common/Button";
import Link from "next/link";
import routes from "@/config/routes";

interface DiscountProps extends ComponentProps<"div"> {}

const Discount = ({ className, ...props }: DiscountProps) => {
    return (
        <div
            className={clsx(
                `container relative h-[calc(421px+8.5rem)] sm:h-[calc(440px+8rem)] md:h-[calc(525px+8rem)] 
                lg:h-[calc(650px+16rem)] flex items-center pt-10 pb-24 sm:py-16 lg:py-32 max-w-[1440px]`,
                className
            )}
            {...props}
        >
            <div
                className={`absolute top-10 sm:top-16 lg:top-32 sm:right-4 lg:right-16 w-[calc(100%-2rem)] 
                        sm:w-[65vw] xl:w-[654px] h-[421px] sm:h-[440px] md:h-[525px] lg:h-[650px] 
                        bg-[url("/assets/images/lighter-tab.png")] bg-cover bg-no-repeat bg-center rounded-2xl`}
            >
                <DoodleIcon
                    className={`absolute -bottom-48 sm:bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 
                        right-0 lg:right-12 xl:right-auto xl:left-32 w-1/2 xl:w-3/4`}
                />
            </div>
            <div
                className={`relative z-20 bg-forest-green text-light-ivory p-5 sm:px-5 md:px-12 lg:px-20 py-12 
                        lg:py-28 rounded-2xl md:rounded-[32px] w-[calc(100%-2rem)] mx-auto sm:mx-0 sm:w-[358px] 
                        md:w-[53vw] lg:w-[733px] grid gap-4 sm:gap-6`}
            >
                <span className="flex items-center gap-4 font-overpass-mono uppercase text-xs md:text-sm text-pale-lime">
                    <SignatureIcon />
                    Booking now 2023-2024
                </span>
                <h2 className="font-display-xl">20% off first booking</h2>
                <p className="font-heading-3">We have limited spots available and monthly payment plans!</p>
                <div className="flex items-center gap-4">
                    <Link href={routes.home}>
                        <Button>Start a project</Button>
                    </Link>
                    <Link href={routes.home}>
                        <Button color="tertiary" variant="outlined">
                            Learn more
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Discount;
