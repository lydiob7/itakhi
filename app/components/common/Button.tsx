import { ComponentProps, FC } from "react";
import clsx from "clsx";

type CustomProps = {
    color?: "primary" | "secondary" | "tertiary";
    size?: "sm" | "md" | "lg";
    variant?: "contained" | "outlined" | "text";
};

function getButtonStyles({ color = "primary", size = "md", variant = "contained" }: CustomProps): string {
    const stylesMap = {
        "primary-contained": "btn-primary",
        "secondary-contained": "btn-secondary",
        "tertiary-contained": "btn-tertiary",
        "primary-outlined": "btn-primary-outlined",
        "secondary-outlined": "btn-secondary-outlined",
        "tertiary-outlined": "btn-tertiary-outlined",
        "primary-text": "btn-primary-text",
        "secondary-text": "btn-secondary-text",
        "tertiary-text": "btn-tertiary-text"
    };

    const sizeMap = {
        sm: "py-1 px-2 rounded-sm",
        md: "px-3 py-2 rounded-md",
        lg: "px-4 py-3 rounded-lg"
    };

    return clsx(stylesMap[`${color}-${variant}`], sizeMap[size]);
}

type ButtonProps = CustomProps & ComponentProps<"button">;

const Button: FC<ButtonProps> = ({ className, ...props }) => {
    return (
        <button
            className={clsx(
                "uppercase font-semibold font-overpass-mono text-xs md:text-sm flex items-center disabled:bg-gray-300 disabled:text-gray-600",
                getButtonStyles({ color: props.color, size: props.size, variant: props.variant }),
                className
            )}
            {...props}
        />
    );
};

export default Button;
