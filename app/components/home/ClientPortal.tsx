import { ComponentProps } from "react";
import clsx from "clsx";

interface ClientPortalProps extends ComponentProps<"div"> {}

const ClientPortal = ({ className, ...props }: ClientPortalProps) => {
    return (
        <div className={clsx("", className)} {...props}>
            ClientPortal
        </div>
    );
};

export default ClientPortal;
