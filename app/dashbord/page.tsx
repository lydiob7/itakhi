import React from "react";
import DashbordPage from "../components/dashbord/DashbordPage";
import generalMetadata from "@/config/metadata";
import PrivateRoutes from "../components/common/PrivateRoutes";

export const metadata = generalMetadata("Dashbord - Itakhi Digital");

const page = () => {
    return (
        <PrivateRoutes>
            <DashbordPage />
        </PrivateRoutes>
    );
};

export default page;
