import { ComponentProps } from "react";
import clsx from "clsx";
import { InstagramIcon, LinkedinIcon } from "../../../assets/icons";

interface FooterProps extends ComponentProps<"div"> {}

const Footer = ({ className, ...props }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <div
            className={clsx(
                "container flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 py-20",
                className
            )}
            {...props}
        >
            <p className="font-light">&copy; {currentYear} Itakhi-Atelier Digital</p>
            <div className="flex gap-2 items-center">
                <a
                    aria-label="LinkedIn"
                    className="block bg-wine p-3 rounded-full"
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedinIcon />
                </a>
                <a
                    aria-label="Instagram"
                    className="block bg-wine p-3 rounded-full"
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <InstagramIcon />
                </a>
            </div>
        </div>
    );
};

export default Footer;
