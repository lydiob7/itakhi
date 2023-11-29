import { ComponentProps } from "react";
import clsx from "clsx";

interface BlogProps extends ComponentProps<"div"> {}

const Blog = ({ className, ...props }: BlogProps) => {
    return (
        <div className={clsx("", className)} {...props}>
            Blog
        </div>
    );
};

export default Blog;
