"use client";

import { FC, ReactNode, createContext, useEffect, useMemo, useState } from "react";

interface UserPreferencesContextProps {
    userPrefersReducedMotion: boolean;
}

export const UserPreferencesContext = createContext<UserPreferencesContextProps | null>(null);

const UserPreferencesContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [userPrefersReducedMotion, setUserPrefersReducedMotion] = useState<boolean>(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduce-motion: reduce)").matches) setUserPrefersReducedMotion(true);
    }, []);

    const value = useMemo(
        () => ({
            userPrefersReducedMotion
        }),
        [userPrefersReducedMotion]
    );

    return <UserPreferencesContext.Provider value={value}>{children}</UserPreferencesContext.Provider>;
};

export default UserPreferencesContextProvider;
