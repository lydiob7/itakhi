import OAuthCallbackPage from "@/app/components/auth/OAuthCallbackPage";
import generalMetadata from "@/config/metadata";

export const metadata = generalMetadata("OAuth Callback - Itakhi Digital");

const page = () => {
    return <OAuthCallbackPage />;
};

export default page;
