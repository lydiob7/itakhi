import { ComponentProps } from "react";
import clsx from "clsx";
import PostCard from "@/app/components/blog/PostCard";
import Spinner from "@/app/components/common/Spinner";
import contentfulClient from "@/config/contentfulConfig";
import PostDTO from "@/types/PostDTO";

const getPosts = async () => {
    try {
        const response = await contentfulClient.getEntries({
            content_type: "post",
            select: [
                "fields.author",
                "fields.title",
                "fields.excerpt",
                "fields.slug",
                "fields.tags",
                "fields.featured_img",
                "sys.createdAt",
                "sys.updatedAt"
            ],
            order: ["sys.createdAt"]
        });
        return (response?.items || []).map((post) => new PostDTO(post));
    } catch (error) {
        console.error(error);
        return [];
    }
};

interface BlogPageProps extends ComponentProps<"div"> {}

const BlogPage = async ({ className, ...props }: BlogPageProps) => {
    const posts = await getPosts();
    const isLoadingPosts = false;

    return (
        <div className={clsx("container", className)} {...props}>
            <h2 className="text-4xl font-bold font-anton my-8">Blog</h2>
            {isLoadingPosts ? (
                <Spinner />
            ) : (
                <div className="grid gap-8 max-w-4xl my-20">
                    {posts?.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogPage;
