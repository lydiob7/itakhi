import { ComponentProps } from "react";
import clsx from "clsx";

interface FeaturedPostsProps extends ComponentProps<"div"> {}

const FeaturedPosts = ({ className, ...props }: FeaturedPostsProps) => {
    return (
        <div className={clsx("pb-40 md:pb-48 pt-10 md:pt-20", className)} {...props}>
            FeaturedPosts
        </div>
    );
};

export default FeaturedPosts;
