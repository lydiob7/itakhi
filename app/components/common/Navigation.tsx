"use client";

import { ComponentProps } from "react";
import clsx from "clsx";
import { ArrowUpIcon } from "@/assets/icons";
import navigationConfig from "@/config/navigationConfig";
import { useGeneralContext } from "@/context/useGeneralContext";
import { useAuthContext } from "@/context/useAuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import handleScrollIntoView from "@/utils/handleScrollIntoView";

interface NavigationProps extends ComponentProps<"nav"> {}

const location = typeof window === "undefined" ? { pathname: "" } : window.location;

const Navigation = ({ className, ...props }: NavigationProps) => {
    const { currentSection } = useGeneralContext();
    const { authUser } = useAuthContext();
    const pathname = usePathname();

    const isHomePage = pathname === "/";

    return (
        <nav
            className={clsx(
                `fixed z-50 top-[calc(100vh-8rem)] right-8 bg-black text-white font-anton uppercase 
                flex items-center justify-between px-2 py-2 rounded-lg w-min`,
                isHomePage
                    ? `md:right-1/2 md:translate-x-1/2 md:px-12 md:py-3 md:rounded-full md:w-auto 
                        md:max-w-[90vw]`
                    : "",
                className
            )}
            aria-label="Primary navigation"
            title="Primary navigation"
            {...props}
        >
            <Link
                aria-label="Scroll to top"
                href="#top"
                className={clsx("px-2 md:px-6 py-2 md:py-3 rounded-lg md:rounded-full bg-lightBlack transition-all")}
            >
                <ArrowUpIcon />
            </Link>
            {isHomePage &&
                navigationConfig.map((link) => {
                    const highlighted = link.url?.includes("#")
                        ? currentSection === link.url?.split("#")?.[1]
                        : pathname === link.url;

                    if (link.auth !== undefined && ((link.auth && !authUser) || (!link.auth && authUser))) return null;

                    return (
                        <Link
                            key={link.url}
                            href={link.url}
                            className={clsx(
                                "hidden md:block py-3 px-6 whitespace-nowrap",
                                highlighted ? "rounded-full bg-white text-black" : ""
                            )}
                        >
                            {link.label}
                        </Link>
                    );
                })}
        </nav>
    );
};

export default Navigation;
