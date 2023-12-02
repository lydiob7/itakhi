import { ComponentProps } from "react";
import clsx from "clsx";
import { InstagramIcon, LinkedinIcon } from "@/app/components/common/Icons";
import Link from "next/link";
import routes from "@/config/routes";
import navigationConfig from "@/config/navigationConfig";
import Button from "./Button";
import Image from "next/image";

interface FooterProps extends ComponentProps<"div"> {}

const Footer = ({ className, ...props }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <div
            className={clsx(
                "bg-forest-green text-lime-green py-10 sm:py-16 md:py-20 max-w-screen overflow-x-hidden",
                className
            )}
            {...props}
        >
            <div className="container">
                <div className="relative pb-12 border-b-1 border-lime-green">
                    <p className="font-display font-bold">
                        <span className="block pb-2 lg:pb-4 xl:pb-8">Let’s start</span>
                        <span className="block pb-2 lg:pb-4 xl:pb-8">something</span>
                        <span className="block">new together</span>
                    </p>
                    <Image
                        className="hidden md:block absolute -top-12 lg:-top-16 -right-24 lg:-right-12 h-[253px] lg:h-[343px] xl:h-[470px] object-contain"
                        src="/assets/images/footer-img.png"
                        alt="Postal box"
                        width={444}
                        height={471}
                    />
                </div>
                <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8 pt-12 pb-8 sm:pb-16">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 w-full">
                        {navigationConfig.map((link) => (
                            <Link
                                className="font-semibold font-overpass-mono uppercase whitespace-nowrap"
                                key={link.url}
                                href={link.url}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href={routes.dashbord}>
                            <Button className="whitespace-nowrap">Client portal</Button>
                        </Link>
                    </div>
                    <div className="flex gap-6 items-center justify-end w-full sm:w-auto">
                        <a aria-label="Instagram" href="https://instagram.com/" target="_blank" rel="noreferrer">
                            <InstagramIcon />
                        </a>
                        <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer">
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <p className="font-semibold font-overpass-mono uppercase">
                            &copy; {currentYear} Itakhi Atelier Digital
                        </p>
                        <Link className="font-semibold font-overpass-mono uppercase" href={routes.privacy}>
                            Privacy policy
                        </Link>
                    </div>
                    <p className="font-semibold font-overpass-mono uppercase">Made by us with love!</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
