import { ComponentProps, FC } from "react";
import clsx from "clsx";

interface RecentWorkProps extends ComponentProps<"div"> {}

const RecentWork: FC<RecentWorkProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("", className)} {...props}>
            Work
        </div>
    );
};

export default RecentWork;
