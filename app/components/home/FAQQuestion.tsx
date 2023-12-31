"use client";

import clsx from "clsx";
import { FC, useState } from "react";
import { MinusIcon, PlusIcon } from "@/app/components/common/Icons";

interface QuestionProps {
    answer: string;
    question: string;
}

const FAQQuestion: FC<QuestionProps> = ({ answer, question }) => {
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

export default FAQQuestion;
