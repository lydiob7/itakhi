"use client";

import { FormEvent } from "react";
import Button from "@/app/components/common/Button";

const ContactPage = () => {
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    };

    return (
        <div className="py-10 md:py-20 container flex justify-between gap-16">
            <div className="flex-1">
                <p className="text-xs md:text-sm uppercase mb-4">Let&apos;s talk</p>
                <h1 className="font-anton text-[100px] md:text-[148px] uppercase leading-[1.2] md:leading-[1.05]">
                    Contact
                </h1>
            </div>
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-8">
                <input
                    className="border-b-1 border-black uppercase placeholder:uppercase p-4"
                    id="fullName"
                    name="fullName"
                    placeholder="Full name"
                    type="text"
                />
                <input
                    className="border-b-1 border-black uppercase placeholder:uppercase p-4"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                <textarea
                    className="border-b-1 border-black uppercase placeholder:uppercase p-4 h-48"
                    id="message"
                    name="message"
                    placeholder="Message"
                />
                <Button aria-label="Submit form" color="black" type="submit" className="w-max self-end">
                    Send
                </Button>
            </form>
        </div>
    );
};

export default ContactPage;
