import { ComponentProps } from "react";
import clsx from "clsx";
import NewsletterForm from "./NewsletterForm";

interface NewsletterProps extends ComponentProps<"div"> {}

const Newsletter = ({ className, ...props }: NewsletterProps) => {
    return (
        <div className={clsx("container", className)} {...props}>
            <div className="bg-gray py-10 rounded-2xl flex flex-col items-center gap-10">
                <div className="text-darkGreen text-5xl text-center font-semibold max-w-[960px]">
                    Subscribe to get the latest tips for your business&apos;s digital presence
                </div>
                <div className="w-full max-w-lg">
                    <NewsletterForm />
                    <p className="pt-2 text-sm text-darkGreen">We care about your data in our privacy policy.</p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
