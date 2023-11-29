import { ComponentProps, FC } from "react";
import clsx from "clsx";
import { SignatureIcon } from "../common/Icons";

interface ServicesProps extends ComponentProps<"div"> {}

const Services: FC<ServicesProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("container py-10 md:py-20", className)} {...props}>
            <p className="flex items-center gap-4 uppercase font-overpass-mono text-xs md:text-sm">
                <SignatureIcon color="forest-green" />
                services
            </p>
            <h2 className="font-display-xxl font-bold">Develop Your Online Presence</h2>
        </div>
    );
};

export default Services;
