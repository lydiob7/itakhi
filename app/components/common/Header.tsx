"use client";

import { ComponentProps, useState } from "react";
import clsx from "clsx";
import Button from "@/app/components/common/Button";
import routes from "@/config/routes";
import navigationConfig from "@/config/navigationConfig";
import { useAuthContext } from "@/context/useAuthContext";
import Link from "next/link";
import { useGeneralContext } from "@/context/useGeneralContext";
import Logo from "./Logo";

interface HeaderProps extends ComponentProps<"div"> {}

const Header = ({ className, ...props }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { authUser, logout } = useAuthContext();
    const { currentSection } = useGeneralContext();

    const handleToggleMenu = () => setIsOpen((prevState) => !prevState);

    return (
        <div className="w-full relative z-[52]">
            <div
                className={clsx(
                    "sm:container bg-forest-green flex items-center justify-between sm:px-8 sm:py-4 sm:my-4 sm:rounded-full",
                    className
                )}
                {...props}
            >
                <div className="bg-light-ivory sm:bg-transparent container flex items-center justify-between py-[10px]">
                    <Link href={`${routes.home}#top`} className="text-2xl font-semibold">
                        <Logo className="hidden sm:block h-6" color="#DAF0A1" />
                        <Logo className="sm:hidden h-6" color="#16280E" />
                    </Link>
                    <div className="flex gap-4 items-center">
                        <div className="hidden lg:flex gap-8 items-center">
                            {navigationConfig.map((link) => (
                                <Link
                                    key={link.url}
                                    href={link.url}
                                    className="font-overpass-mono uppercase text-pale-lime text-14"
                                    onClick={handleToggleMenu}
                                    tabIndex={isOpen ? 0 : -1}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <Link href={routes.dashbord} className="hidden sm:block">
                            <Button aria-label="See pricing" tabIndex={-1}>
                                Client portal
                            </Button>
                        </Link>

                        <Button
                            variant="outlined"
                            aria-label="Mobile menu button"
                            className={clsx("gap-4 items-center", isOpen ? "hidden" : "hidden sm:flex lg:hidden")}
                            onClick={handleToggleMenu}
                        >
                            Menu
                            <div className="flex flex-col justify-between items-stretch gap-[4px] w-[23px]">
                                <span className="bg-pale-lime h-[2px] w-full rounded-full" />
                                <span className="bg-pale-lime h-[2px] w-full rounded-full" />
                                <span className="bg-pale-lime h-[2px] w-full rounded-full" />
                            </div>
                        </Button>
                        <Button
                            color="secondary"
                            variant="outlined"
                            aria-label="Mobile menu button"
                            className={clsx(
                                "gap-4 items-center pt-[10px] pb-[10px] rounded-lg bg-pale-lime",
                                isOpen ? "hidden" : "sm:hidden"
                            )}
                            onClick={handleToggleMenu}
                        >
                            <div className="flex flex-col justify-between items-stretch gap-[4px] w-[23px]">
                                <span className="bg-forest-green h-[2px] w-full rounded-full" />
                                <span className="bg-forest-green h-[2px] w-full rounded-full" />
                                <span className="bg-forest-green h-[2px] w-full rounded-full" />
                            </div>
                        </Button>

                        <Button
                            variant="outlined"
                            aria-label="Mobile menu button"
                            className={clsx(
                                "gap-2 items-center px-2 py-[4px]",
                                isOpen ? "hidden sm:flex lg:hidden" : "hidden"
                            )}
                            onClick={handleToggleMenu}
                        >
                            Close
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.75 6.1875L5.25 19.6875"
                                    className="stroke-pale-lime"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18.75 19.6875L5.25 6.1875"
                                    className="stroke-pale-lime"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                        <Button
                            color="secondary"
                            variant="outlined"
                            aria-label="Mobile menu button"
                            className={clsx(
                                "gap-4 items-center px-2 py-[5px] rounded-lg bg-pale-lime",
                                isOpen ? "sm:hidden" : "hidden"
                            )}
                            onClick={handleToggleMenu}
                        >
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.75 6.1875L5.25 19.6875"
                                    className="stroke-forest-green"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18.75 19.6875L5.25 6.1875"
                                    className="stroke-forest-green"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>

            <nav
                className={clsx(
                    "lg:hidden absolute top-full w-full sm:h-auto bg-forest-green sm:bg-light-ivory z-30 transition-all",
                    isOpen ? "max-h-[300vh] h-screen py-20" : "max-h-0 overflow-hidden"
                )}
                aria-label="Primary navigation"
                title="Primary navigation"
            >
                <div className="container flex flex-col gap-4">
                    {navigationConfig.map((link) => (
                        <Link
                            key={link.url}
                            href={link.url}
                            className={clsx("font-overpass-mono p-2 uppercase text-pale-lime sm:text-forest-green")}
                            onClick={handleToggleMenu}
                            tabIndex={isOpen ? 0 : -1}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link className="sm:hidden" href={routes.dashbord} onClick={handleToggleMenu}>
                        <Button aria-label="See pricing" tabIndex={-1}>
                            Client portal
                        </Button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
