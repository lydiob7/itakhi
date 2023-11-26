import { ComponentProps } from "react";
import clsx from "clsx";

interface FeaturedPostsProps extends ComponentProps<"div"> {}

const FeaturedPosts = ({ className, ...props }: FeaturedPostsProps) => {
    return (
        <div className={clsx("container py-10 md:py-20", className)} {...props}>
            FeaturedPosts
        </div>
    );
};

export default FeaturedPosts;
