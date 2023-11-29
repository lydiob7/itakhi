import { ComponentProps } from "react";
import clsx from "clsx";

interface ContactProps extends ComponentProps<"div"> {}

const Contact = ({ className, ...props }: ContactProps) => {
    return (
        <div className={clsx("", className)} {...props}>
            Contact
        </div>
    );
};

export default Contact;
