"use client";

import { ComponentProps, FormEvent } from "react";
import clsx from "clsx";
import Button from "./Button";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { BlackSpiral } from "@/public/assets/images/spirals";

interface NewsletterFormProps extends ComponentProps<"form"> {}

const MAILCHIMP_SUBSCRIBE_FORM_URL = process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_FORM_URL;

const parseMessage = (message: string) => {
    if (message.includes("0 -")) return message.replace("0 -", "").trim();
    return message;
};

const NewsletterForm = ({ className, ...props }: NewsletterFormProps) => {
    return (
        <>
            <MailchimpSubscribe
                url={MAILCHIMP_SUBSCRIBE_FORM_URL!}
                render={({ subscribe, status, message }) => {
                    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
                        ev.preventDefault();
                        const formData = new FormData(ev.currentTarget);
                        const email = formData.get("email")?.toString();
                        if (!email) return;
                        subscribe({ EMAIL: email });
                    };
                    return (
                        <>
                            <form className={clsx("flex gap-4 w-full", className)} onSubmit={handleSubmit} {...props}>
                                <input
                                    className={clsx(
                                        "grow px-4 rounded-lg",
                                        status === "error" ? "border-red-500 border-2" : ""
                                    )}
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Enter your email"
                                />
                                <Button disabled={status === "sending"}>
                                    Subscribe{" "}
                                    {status === "sending" && <BlackSpiral className="animate-spin h-8 w-8 ml-8" />}
                                </Button>
                            </form>
                            {status === "success" && <div className="text-darkGreen mt-4">{parseMessage(message)}</div>}
                            {status === "error" && (
                                <div className="text-red-500 mt-4">
                                    {typeof message === "string" ? parseMessage(message) : message.message}
                                </div>
                            )}
                        </>
                    );
                }}
            />
        </>
    );
};

export default NewsletterForm;
