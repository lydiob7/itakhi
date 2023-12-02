"use client";

import { ComponentProps } from "react";
import clsx from "clsx";
import Button from "../common/Button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { services } from "./Services";
import Select from "../common/Select";

interface ContactFormProps extends ComponentProps<"form"> {}

const formSchema = z.object({
    fullName: z.string().min(1, "Full Name is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    service: z.object({
        value: z.string(),
        label: z.string()
    }),
    description: z.string().min(1, "A description is required")
});

type FormSchemaType = z.infer<typeof formSchema>;

const serviceOptions = services.map((service) => ({
    value: service.value,
    label: service.title
}));

const ContactForm = ({ className, ...props }: ContactFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        resetField,
        setValue,
        watch
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        mode: "onChange"
    });

    const service = watch("service");

    const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={clsx("grid gap-4 sm:gap-8 md:gap-16", className)} {...props}>
            <div className="relative grid">
                <label className="font-syne font-medium font-heading-5" htmlFor="fullName">
                    What&apos;s your name?
                </label>
                <input
                    className={clsx(
                        "font-paragraph-lg bg-transparent py-4 border-b-1 border-forest-green",
                        errors?.fullName ? "outline-red-500 outline-2 outline" : ""
                    )}
                    type="text"
                    id="fullName"
                    placeholder="Type your full name"
                    {...register("fullName")}
                />
                {errors?.fullName && (
                    <span className="md:absolute w-full md:-bottom-10 left-0 text-red-500 text-right mt-3 md:mt-0">
                        {errors.fullName.message}
                    </span>
                )}
            </div>

            <div className="relative grid">
                <label className="font-syne font-medium font-heading-5" htmlFor="email">
                    What&apos;s your email address?
                </label>
                <input
                    className={clsx(
                        "font-paragraph-lg bg-transparent py-4 border-b-1 border-forest-green",
                        errors?.email ? "outline-red-500 outline-2 outline" : ""
                    )}
                    type="text"
                    id="email"
                    placeholder="example@email.com"
                    {...register("email")}
                />
                {errors?.email && (
                    <span className="md:absolute w-full md:-bottom-10 left-0 text-red-500 text-right mt-3 md:mt-0">
                        {errors.email.message}
                    </span>
                )}
            </div>

            <div className="relative grid">
                <label className="font-syne font-medium font-heading-5" htmlFor="services">
                    What services are you looking for?
                </label>
                <Select
                    className="w-full"
                    onChange={(val) => {
                        if (val) setValue("service", val, { shouldDirty: true });
                        else resetField("service");
                    }}
                    options={serviceOptions}
                    placeholder="Choose from a list here"
                    value={service}
                />
                {errors?.service && (
                    <span className="md:absolute w-full md:-bottom-10 left-0 text-red-500 text-right mt-3 md:mt-0">
                        {errors.service.message}
                    </span>
                )}
            </div>

            <div className="relative grid">
                <label className="font-syne font-medium font-heading-5" htmlFor="description">
                    Tell us about your project
                </label>
                <textarea
                    className={clsx(
                        "font-paragraph-lg bg-transparent py-4 border-b-1 border-forest-green",
                        errors?.description ? "outline-red-500 outline-2 outline" : ""
                    )}
                    id="description"
                    placeholder="Please type your project description"
                    {...register("description")}
                />
                {errors?.description && (
                    <span className="md:absolute w-full md:-bottom-10 left-0 text-red-500 text-right mt-3 md:mt-0">
                        {errors.description.message}
                    </span>
                )}
            </div>

            <Button className="w-max" disabled={!isValid || isSubmitting} type="submit">
                Send a message
            </Button>
        </form>
    );
};

export default ContactForm;
