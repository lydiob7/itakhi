import { Anton, Inter } from "next/font/google";
import "./globals.css";
import UserPreferencesContextProvider from "@/context/UserPreferencesContextProvider";
import GeneralContextProvider from "@/context/GeneralContextProvider";
import AuthContextProvider from "@/context/AuthContextProvider";
import BlogContextProvider from "@/context/BlogContextProvider";
import clsx from "clsx";
import Script from "next/script";
import Layout from "./components/common/Layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anton = Anton({ subsets: ["latin"], variable: "--font-anton", weight: "400" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3QEGC94S3J" />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag('js', new Date());

                        gtag('config', 'G-3QEGC94S3J');
                `
                }}
            />
            <body className={clsx(inter.variable, anton.variable)}>
                <UserPreferencesContextProvider>
                    <GeneralContextProvider>
                        <AuthContextProvider>
                            <Layout>{children}</Layout>
                        </AuthContextProvider>
                    </GeneralContextProvider>
                </UserPreferencesContextProvider>
            </body>
        </html>
    );
}
