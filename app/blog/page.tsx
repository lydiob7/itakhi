import generalMetadata from "@/config/metadata";
import BlogPage from "../components/blog/BlogPage";

export const metadata = generalMetadata("Blog - Itakhi Digital");

const page = () => {
    return <BlogPage />;
};

export default page;
