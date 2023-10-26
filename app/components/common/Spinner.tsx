import { ComponentProps } from "react";
import clsx from "clsx";
import { BlackSpiral } from "@/public/assets/images/spirals";

interface SpinnerProps extends ComponentProps<"div"> {}

const Spinner = ({ className, ...props }: SpinnerProps) => {
    return (
        <div className={clsx("w-full h-full min-h-[50vh] flex items-center justify-center", className)} {...props}>
            <BlackSpiral className="loading-spinner" />
        </div>
    );
};

export default Spinner;
