import generalMetadata from "@/config/metadata";
import routes from "@/config/routes";
import Link from "next/link";
import React from "react";

export const metadata = generalMetadata("Page not found - Itakhi Digital");

const NotFoundPage = () => {
    return (
        <div className="container grid place-items-center w-screen h-[60vh]">
            <div className="flex flex-col gap-4 items-center">
                <h2 className="font-anton text-4xl">404 - Page not found</h2>
                <Link className="underline" href={routes.home}>
                    Back to Home Page
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
