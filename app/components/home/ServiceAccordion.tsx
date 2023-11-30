"use client";

import clsx from "clsx";
import { FC, useState } from "react";
import { ChevronDownIcon } from "@/app/components/common/Icons";
import Image from "next/image";

export interface ServiceAccordionProps {
    body: string;
    image: string;
    imageBgColor: string;
    price: string;
    priceDetails: string;
    title: string;
    small?: boolean;
}

const parseBody = (body: string) => {
    const splitBody = body.split("[HIGHLIGHTED_START]");
    const afterHightlighted = splitBody?.[1]?.split("[HIGHLIGHTED_END]");
    const normalText = splitBody?.[0];
    const highlightedText = afterHightlighted?.[0];
    const restOfText = afterHightlighted?.[1];

    return {
        highlightedText: highlightedText || "",
        hasHighlighted: body.includes("[HIGHLIGHTED_START]"),
        normalText: normalText || "",
        raw: body,
        restOfText: restOfText || ""
    };
};

const ServiceAccordion: FC<ServiceAccordionProps> = ({
    body,
    image,
    imageBgColor,
    price,
    priceDetails,
    small,
    title
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const parsedBody = parseBody(body);

    return (
        <div className="border-b-1 border-forest-green">
            <button
                className="w-full font-semibold font-heading-4 flex justify-between lg:justify-normal lg:grid lg:grid-cols-[2fr,1fr,1fr] items-center gap-4 py-2"
                onClick={() => setIsOpen((bool) => !bool)}
            >
                <h3 className="block text-left">{title}</h3>
                <div
                    className={clsx(
                        imageBgColor,
                        "hidden lg:block grow-0 shrink-0 rounded-full h-[41px] w-full transition-transform",
                        isOpen ? (small ? "translate-y-[100%]" : "translate-y-[150%]") : ""
                    )}
                >
                    <Image className="w-full object-cover" src={image} alt="Doodle" width={198} height={41} />
                </div>
                <ChevronDownIcon
                    className={clsx("mt-[6px] justify-self-center transition-transform", isOpen ? "rotate-180" : "")}
                />
            </button>
            <div
                className={clsx(
                    "overflow-hidden transition-all duration-500 grid lg:grid-cols-[2fr,1fr,1fr] items-center gap-4",
                    isOpen ? "max-h-[250px] py-2" : "max-h-0"
                )}
            >
                <p className="font-paragraph-lg">
                    {parsedBody.hasHighlighted ? (
                        <>
                            {parsedBody.normalText}
                            <span className="text-red-500">{parsedBody.highlightedText}</span>
                            {parsedBody.restOfText}
                        </>
                    ) : (
                        parsedBody.raw
                    )}
                </p>
                <div className="grid gap-2 text-center lg:col-start-3">
                    <p className="font-paragraph-lg">{price}</p>
                    <p className="italic font-paragraph-md">{priceDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceAccordion;
