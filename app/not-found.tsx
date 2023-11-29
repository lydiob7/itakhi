import generalMetadata from "@/config/metadata";
import routes from "@/config/routes";
import React from "react";
import Button from "./components/common/Button";
import { SignatureIcon } from "./components/common/Icons";

export const metadata = generalMetadata("Page not found - Itakhi Digital");

const NotFoundPage = () => {
    return (
        <div className="fixed top-0 left-0 z-[99] bg-forest-green text-light-ivory h-screen w-screen flex flex-col justify-center">
            <div className="container w-full">
                <div className="flex items-center gap-4 mb-4">
                    <SignatureIcon />

                    <h2 className="uppercase text-lime-green text-sm font-semibold font-overpass-mono">Error 404</h2>
                </div>
                <div className="font-display-md font-medium max-w-[620px] md:max-w-[990px]">
                    Sorry, but the page you are looking for might have been removed or is temporarily unavailable.
                </div>
                <a className="text-forest-green mt-8 block" href={routes.home}>
                    <Button>Back to Homepage</Button>
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;
