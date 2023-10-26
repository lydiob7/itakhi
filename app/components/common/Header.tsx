"use client";

import { ComponentProps, useState } from "react";
import clsx from "clsx";
import Button from "@/app/components/common/Button";
import routes from "@/config/routes";
import navigationConfig from "@/config/navigationConfig";
import { useAuthContext } from "@/context/useAuthContext";
import Link from "next/link";
import { useGeneralContext } from "@/context/useGeneralContext";

interface HeaderProps extends ComponentProps<"div"> {}

const Header = ({ className, ...props }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { authUser, logout } = useAuthContext();
    const { currentSection } = useGeneralContext();

    const handleToggleMenu = () => setIsOpen((prevState) => !prevState);

    return (
        <div className="w-full relative z-[52] bg-white">
            <div className={clsx("container flex items-center justify-between py-6", className)} {...props}>
                <Link href={`${routes.home}#top`} className="text-2xl font-semibold">
                    <h1>ITAKHI</h1>
                </Link>
                <div className="flex gap-4 items-center">
                    {authUser && (
                        <button className="underline" onClick={logout}>
                            Logout
                        </button>
                    )}
                    <Link href={routes.contact} className="hidden md:block">
                        <Button aria-label="See pricing" tabIndex={-1}>
                            Start a Project
                        </Button>
                    </Link>
                    <button
                        aria-label="Mobile menu button"
                        className="md:hidden flex flex-col justify-between items-stretch gap-[4px] w-[25px]"
                        onClick={handleToggleMenu}
                    >
                        <span className="bg-[#18181B] h-[3px] w-full rounded-full" />
                        <span className="bg-[#18181B] h-[3px] w-full rounded-full" />
                        <span className="bg-[#18181B] h-[3px] w-full rounded-full" />
                    </button>
                </div>
            </div>

            <nav
                className={clsx(
                    "md:hidden absolute top-full w-full bg-white z-30 transition-all",
                    isOpen ? "max-h-[300vh]" : "max-h-0 overflow-hidden"
                )}
                aria-label="Primary navigation"
                title="Primary navigation"
            >
                <div className="flex flex-col gap-4 p-8">
                    {navigationConfig.map((link) => {
                        const highlighted = link.url?.includes("#")
                            ? currentSection === link.url?.split("#")?.[1]
                            : location.pathname === link.url;

                        if (link.auth !== undefined && ((link.auth && !authUser) || (!link.auth && authUser)))
                            return null;

                        return (
                            <Link
                                key={link.url}
                                href={link.url}
                                className={clsx("text-center")}
                                onClick={handleToggleMenu}
                                tabIndex={isOpen ? 0 : -1}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default Header;
