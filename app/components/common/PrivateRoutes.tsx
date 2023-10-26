"use client";

import { ReactNode } from "react";
import routes from "@/config/routes";
import { useAuthContext } from "@/context/useAuthContext";
import { useRouter } from "next/navigation";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
    const { session } = useAuthContext();
    const router = useRouter();

    if (!session) {
        router.push(routes.login);
        return null;
    }

    return children;
};

export default PrivateRoutes;
