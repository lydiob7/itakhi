import { ComponentProps, FC } from "react";
import clsx from "clsx";
import { SignatureIcon } from "../common/Icons";
import Button from "../common/Button";
import Link from "next/link";
import routes from "@/config/routes";
import ServiceAccordion, { ServiceAccordionProps } from "./ServiceAccordion";

interface ServicesProps extends ComponentProps<"div"> {}

interface Service extends ServiceAccordionProps {
    value: string;
}

export const services: Service[] = [
    {
        body: "Transform your online presence with custom-coded website services. Get a tailored digital solution in [HIGHLIGHTED_START]up to six weeks.[HIGHLIGHTED_END]",
        image: "/assets/images/service-doodle1.png",
        imageBgColor: "bg-steel-blue",
        price: "Starting at $ 4500",
        priceDetails: "fixed price for customized projects (Up to 4 pages included)",
        title: "1- Website Services (Custom Code)",
        value: "custom-code"
    },
    {
        body: "Experience a smooth website creation journey with simple briefs and Loom videos – a collaborative approach that brings your vision to life in a mere [HIGHLIGHTED_START]two weeks.[HIGHLIGHTED_END]",
        image: "/assets/images/service-doodle2.png",
        imageBgColor: "bg-pale-lime",
        price: "$ 900-1500",
        priceDetails: "fixed price for low code projects (Up to 5 pages using templates)",
        title: "2-Express Website (Low Code)",
        value: "low-code"
    },
    {
        body: "Upgrade your web and app interfaces with our specialized UX/UI design services. Our team crafts intuitive and engaging user experiences, ensuring a seamless interaction.",
        image: "/assets/images/service-doodle3.png",
        imageBgColor: "bg-forest-green",
        price: "$ 300",
        priceDetails: "daily",
        title: "3-UX/UI Design (web and app)",
        value: "uxui"
    },
    {
        body: "Experience end-to-end digital empowerment with our full-stack services.",
        image: "/assets/images/service-doodle4.png",
        imageBgColor: "bg-coral-red",
        price: "$ 300",
        priceDetails: "daily",
        small: true,
        title: "4-Maintenance and support",
        value: "mantainance"
    },
    {
        body: "Maximize flexibility with our hour service pack, where we cater to all your needs, including custom-coded websites, UX/UI design, maintenance and support, and full-stack solutions. ",
        image: "/assets/images/service-doodle5.png",
        imageBgColor: "bg-lime-green",
        price: " $ 900",
        priceDetails: "daily",
        title: "5-25 hours pack",
        value: "25hs-pack"
    }
];

const Services: FC<ServicesProps> = ({ className, ...props }) => {
    return (
        <div
            className={clsx(
                "container flex flex-col gap-4 lg:flex-row lg:items-center py-10 sm:py-16 md:py-20",
                className
            )}
            {...props}
        >
            <div className="grid gap-8 lg:w-2/5 lg:pr-12 shrink-0 grow-0">
                <p className="flex items-center gap-4 uppercase font-overpass-mono text-xs md:text-sm">
                    <SignatureIcon color="forest-green" />
                    services
                </p>
                <h2 className="font-display font-bold">Develop Your Online Presence</h2>
                <p className="font-heading-3">
                    Leverage our expertise for an all-encompassing digital service. From understanding your needs to
                    seamless execution, we streamline the path to success, breaking free from the conventional grind of
                    endless meetings and paperwork.
                </p>
                <Link href={routes.home}>
                    <Button>Learn more</Button>
                </Link>
            </div>
            <div className="py-4 lg:w-3/5 shrink-0 grow-0">
                {services.map((service) => (
                    <ServiceAccordion key={service.title} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
