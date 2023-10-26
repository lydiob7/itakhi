"use client";

import { ComponentProps } from "react";
import clsx from "clsx";
import { useAuthContext } from "@/context/useAuthContext";
import { FALLBACK_AVATAR_IMG } from "@/constants";
import Image from "next/image";

interface DashbordPageProps extends ComponentProps<"div"> {}

const DashbordPage = ({ className, ...props }: DashbordPageProps) => {
    const { profile } = useAuthContext();

    return (
        <div className={clsx("container", className)} {...props}>
            {profile && (
                <div className="flex items-center gap-4">
                    <Image
                        className="rounded-full h-16 w-16 object-cover overflow-hidden"
                        src={profile.avatar_url || FALLBACK_AVATAR_IMG}
                        alt={profile.email}
                        width={50}
                        height={50}
                    />
                    <div>
                        <div className="text-xl font-semibold">
                            {profile.first_name} {profile.last_name}
                        </div>
                        <div className="opacity-60">{profile.email}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashbordPage;
