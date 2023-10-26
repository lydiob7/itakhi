"use client";

import { ChangeEvent, ComponentProps, FormEvent, useState } from "react";
import clsx from "clsx";
import Button from "./Button";

interface NewsletterFormProps extends ComponentProps<"form"> {}

const NewsletterForm = ({ className, ...props }: NewsletterFormProps) => {
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {};

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);

        console.log(formData);
    };

    return (
        <>
            <form className={clsx("flex gap-4 w-full", className)} onSubmit={handleSubmit} {...props}>
                <input
                    className={clsx("grow px-4 rounded-lg", error ? "border-red-500 border-2" : "")}
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                />
                <Button>Subscribe</Button>
            </form>
            {error && <span className="text-red-500">{error}</span>}
        </>
    );
};

export default NewsletterForm;
