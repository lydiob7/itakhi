"use client";

import clsx from "clsx";
import { ComponentProps, FC, useState } from "react";
import { MinusIcon, PlusIcon } from "@/assets/icons";
import AnimatedTitle from "@/app/components/common/AnimatedTitle";

interface QuestionProps {
    answer: string;
    question: string;
}

const Question: FC<QuestionProps> = ({ answer, question }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                className="w-full font-semibold text-xl text-lile flex items-start justify-between gap-4"
                onClick={() => setIsOpen((bool) => !bool)}
            >
                <h3 className="block text-left">Q. {question}</h3>
                {isOpen ? <MinusIcon className="mt-[6px]" /> : <PlusIcon className="mt-[6px]" />}
            </button>
            <p
                className={clsx(
                    "font-light text-xl text-white overflow-hidden transition-all duration-500",
                    isOpen ? "max-h-[250px]" : "max-h-0"
                )}
            >
                {answer}
            </p>
        </div>
    );
};

interface FAQsProps extends ComponentProps<"div"> {}

const FAQs: FC<FAQsProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("bg-wine py-10 md:py-20", className)} {...props}>
            <div className="container">
                <AnimatedTitle
                    className="text-25 md:text-6xl uppercase mt-3 mb-8 text-lile"
                    title="QUESTIONS? LET'S ANSWER THEM"
                />

                <div className="grid md:grid-cols-2 gap-8 place-items-start">
                    <div className="grid gap-8">
                        <Question
                            answer="Whether you have one request or multiple, our subscription model accommodates your needs. You can choose the plan that aligns with your project requirements."
                            question="What if I only have a single request?"
                        />
                        <Question
                            answer="Hiring a full-time .. brings added costs and commitments. Our subscription model offers cost-effective access to a diverse team of experts, providing flexibility to scale your design needs as projects evolve."
                            question="Why wouldn't I just hire a full-time?"
                        />
                        <Question
                            answer="No, there's no fixed limit on requests. Our subscription model allows you to send one request at a time for Standard and two requests for Pro subscribers. As soon as one request is completed, you can submit another, keeping the workflow continuous."
                            question="Is there a limit to how many requests I can have?"
                        />
                    </div>

                    <div className="grid gap-8">
                        <Question
                            answer="Our pause feature allows you to temporarily halt your subscription without canceling it. This feature is useful if you need a break or have specific project timelines in mind. You can easily resume your subscription when you're ready."
                            question="How does the pause feature work?"
                        />
                        <Question
                            answer="Your satisfaction is our priority. If you're not completely satisfied with a design, you can provide feedback, and we'll revise it until it meets your expectations."
                            question="What if I don't like the design?"
                        />
                        <Question
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
