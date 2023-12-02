import clsx from "clsx";
import { ComponentProps, FC } from "react";
import AnimatedTitle from "@/app/components/common/AnimatedTitle";
import FAQQuestion from "./FAQQuestion";
import { SignatureIcon } from "../common/Icons";

interface FAQsProps extends ComponentProps<"div"> {}

const FAQs: FC<FAQsProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("bg-forest-green text-lime-green py-10 sm:py-16 md:py-20", className)} {...props}>
            <div className="container">
                <div className="flex items-center gap-4 mb-4">
                    <SignatureIcon />

                    <p className="uppercase text-lime-green text-sm font-semibold font-overpass-mono">FAQs</p>
                </div>
                <h2 className="font-display font-bold mt-3 mb-8">Questions? Let&apos;s answer them</h2>

                <div className="grid md:grid-cols-2 gap-8 place-items-start">
                    <div className="grid gap-8">
                        <FAQQuestion
                            answer="Whether you have one request or multiple, our subscription model accommodates your needs. You can choose the plan that aligns with your project requirements."
                            question="What if I only have a single request?"
                        />
                        <FAQQuestion
                            answer="Hiring a full-time .. brings added costs and commitments. Our subscription model offers cost-effective access to a diverse team of experts, providing flexibility to scale your design needs as projects evolve."
                            question="Why wouldn't I just hire a full-time?"
                        />
                        <FAQQuestion
                            answer="No, there's no fixed limit on requests. Our subscription model allows you to send one request at a time for Standard and two requests for Pro subscribers. As soon as one request is completed, you can submit another, keeping the workflow continuous."
                            question="Is there a limit to how many requests I can have?"
                        />
                    </div>

                    <div className="grid gap-8">
                        <FAQQuestion
                            answer="Our pause feature allows you to temporarily halt your subscription without canceling it. This feature is useful if you need a break or have specific project timelines in mind. You can easily resume your subscription when you're ready."
                            question="How does the pause feature work?"
                        />
                        <FAQQuestion
                            answer="Your satisfaction is our priority. If you're not completely satisfied with a design, you can provide feedback, and we'll revise it until it meets your expectations."
                            question="What if I don't like the design?"
                        />
                        <FAQQuestion
                            answer="We're committed to delivering exceptional value. If you're not satisfied with our service, please reach out, and we'll work to address your concerns. We do not offer refunds, but we aim to ensure you're delighted with the results."
                            question="Are there any refunds if I don't like the service?"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
