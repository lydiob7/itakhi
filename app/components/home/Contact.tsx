import { ComponentProps } from "react";
import clsx from "clsx";
import { SignatureIcon } from "../common/Icons";
import ContactForm from "./ContactForm";

interface ContactProps extends ComponentProps<"div"> {}

const Contact = ({ className, ...props }: ContactProps) => {
    return (
        <div
            className={clsx(
                "container flex flex-col gap-4 lg:flex-row lg:items-center py-10 sm:py-16 md:py-20",
                className
            )}
            {...props}
        >
            <div className="grid gap-8 w-full lg:w-1/2 lg:pr-12 shrink-0 grow-0">
                <p className="flex items-center gap-4 uppercase font-overpass-mono text-xs md:text-sm">
                    <SignatureIcon color="forest-green" />
                    contact us
                </p>
                <h2 className="font-display font-bold">Let&apos;s talk</h2>
                <p className="font-heading-3">
                    If you&apos;re not ready to dive into our client portal or have additional inquiries, simply
                    complete the form below. We&apos;re here to assist you promptly and address any questions you may
                    have. Your digital journey starts with a conversation.
                </p>
            </div>

            <ContactForm className="w-full lg:w-1/2" />
        </div>
    );
};

export default Contact;
