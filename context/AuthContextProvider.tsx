"use client";

import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from "react";
import { AuthError, Session, User as AuthUser } from "@supabase/supabase-js";
import supabase from "../config/supabaseConfig";
import User from "../types/User";
import routes from "../config/routes";
import { useRouter } from "next/navigation";

const domain =
    typeof window === "undefined" ? process.env.NEXT_PUBLIC_DEV_URL : window?.location.origin || window?.location.host;

interface LoginProps {
    email: string;
    password: string;
}

export interface AuthContextProps {
    authUser: AuthUser | null;
    authError: AuthError | null;
    authLoading: boolean;
    clearAuthState: () => void;
    exchangeToken: (code: string) => void;
    login: (loginProps: LoginProps) => void;
    loginWithGoogle: () => void;
    logout: () => void;
    profile: User | null;
    session: Session | null;
    signup: (loginProps: LoginProps) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const AuthContextProvider = ({ children, ...props }: { children: ReactNode }) => {
    const [authUser, setAuthUser] = useState<AuthUser | null>(null);
    const [authLoading, setAuthLoading] = useState<boolean>(false);
    const [initialauthLoading, setInitialAuthLoading] = useState<boolean>(true);
    const [authError, setAuthError] = useState<AuthError | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [profile, setProfile] = useState<User | null>(null);

    const router = useRouter();

    const signup = useCallback(async ({ email, password }: LoginProps) => {
        setAuthLoading(true);
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
        setAuthError(error);
        setAuthUser(data.user);
        setAuthLoading(false);
    }, []);

    const login = useCallback(async ({ email, password }: LoginProps) => {
        setAuthLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        setAuthError(error);
        setAuthUser(data.user);
        setAuthLoading(false);
    }, []);

    const loginWithGoogle = useCallback(async () => {
        setAuthLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${domain}${routes.authCallback}`,
                queryParams: {
                    access_type: "offline",
                    prompt: "consent"
                }
            }
        });
        setAuthError(error);
        setAuthLoading(false);
    }, []);

    const exchangeToken = useCallback(async (code: string) => {
        setAuthLoading(true);
        await supabase.auth.exchangeCodeForSession(code);
        setAuthLoading(false);
    }, []);

    const clearAuthState = useCallback(() => {
        setAuthError(null);
        setAuthLoading(false);
    }, []);

    const logout = useCallback(async () => {
        await supabase.auth.signOut();
        router.push(routes.home);
        setAuthUser(null);
    }, [router]);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setInitialAuthLoading(false);
        });

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                router.push(routes.home);
                return setAuthUser(null);
            }
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, [router]);

    useEffect(() => {
        if (session) setAuthUser(session.user);
    }, [session]);

    const getPublicUser = useCallback(async (userId: string) => {
        const { data } = await supabase
            .from("users")
            .select("first_name, last_name,id,avatar_url,email,created_at")
            .eq("id", userId);
        if (!data?.[0]) return;
        setProfile(data[0]);
    }, []);

    useEffect(() => {
        if (authUser) getPublicUser(authUser.id);
    }, [authUser, getPublicUser]);

    const value = useMemo(
        () => ({
            authError,
            authLoading,
            authUser,
            clearAuthState,
            exchangeToken,
            login,
            loginWithGoogle,
            logout,
            profile,
            session,
            signup
        }),
        [
            authError,
            authLoading,
            authUser,
            clearAuthState,
            exchangeToken,
            login,
            loginWithGoogle,
            logout,
            profile,
            session,
            signup
        ]
    );

    if (initialauthLoading) return <div className="w-full h-screen container grid place-items-center">Loading...</div>;

    return (
        <AuthContext.Provider {...props} value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
