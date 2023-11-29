import { ComponentProps } from "react";
import clsx from "clsx";
import Chip from "../common/Chip";

interface KeywordsProps extends ComponentProps<"div"> {}

const keywords = [
    "Web Design Solutions",
    "web development",
    "Maintenance",
    "Small Business Website",
    "user experience design",
    "Collaborative Web Design",
    "Portfolios",
    "Digital transformation for small business"
];

const Keywords = ({ className, ...props }: KeywordsProps) => {
    return (
        <div className={clsx("bg-forest-green py-12 lg:py-14 xl:py-20", className)} {...props}>
            <div className="container flex flex-wrap gap-2 items-center justify-center">
                {keywords.map((keyword) => (
                    <Chip key={keyword}>{keyword}</Chip>
                ))}
            </div>
        </div>
    );
};

export default Keywords;
