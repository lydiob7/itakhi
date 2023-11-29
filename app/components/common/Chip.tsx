import { ComponentProps } from "react";
import clsx from "clsx";

interface ChipProps extends ComponentProps<"div"> {}

const Chip = ({ className, children, ...props }: ChipProps) => {
    return (
        <div
            className={clsx(
                "px-4 py-2 font-overpass-mono uppercase text-lime-green rounded-full border-1 border-lime-green text-xs md:text-sm",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Chip;
