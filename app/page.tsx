import { Metadata } from "next";
import HomePage from "@/app/components/home/HomePage";
import generalMetadata from "@/config/metadata";

export const metadata = generalMetadata();

const page = () => {
    return <HomePage />;
};

export default page;
