"use client";

import { ComponentProps, useEffect } from "react";
import clsx from "clsx";
import { useAuthContext } from "@/context/useAuthContext";
import routes from "@/config/routes";
import { useRouter } from "next/navigation";

interface AuthPageProps extends ComponentProps<"div"> {}

const AuthPage = ({ className, children, ...props }: AuthPageProps) => {
    const { authUser } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (authUser) router.push(routes.dashbord);
    }, [authUser, router]);

    return (
        <div className={clsx("container mx-auto py-8 grid place-items-center gap-12", className)} {...props}>
            <div className="flex flex-col gap-8 w-full max-w-md py-12">{children}</div>
        </div>
    );
};

export default AuthPage;
