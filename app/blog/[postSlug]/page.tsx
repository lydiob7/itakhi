import PostPage from "@/app/components/blog/PostPage";
import contentfulClient from "@/config/contentfulConfig";
import generalMetadata from "@/config/metadata";
import routes from "@/config/routes";
import PostDTO from "@/types/PostDTO";
import Link from "next/link";

export async function generateStaticParams() {
    const response = await contentfulClient.getEntries({
        content_type: "post",
        select: ["fields.slug"],
        order: ["sys.createdAt"]
    });

    return response?.items
        ?.map((post) => new PostDTO(post))
        .map((post) => ({
            postSlug: post.slug
        }));
}

const getPost = async (postSlug: string) => {
    try {
        const response = await contentfulClient.getEntries({
            content_type: "post",
            "fields.slug": postSlug
        });
        if (response?.items?.[0]) return new PostDTO(response.items[0]);
    } catch (error) {
        console.error(error);
    }
};

export async function generateMetadata({ params }: { params: { postSlug: string } }) {
    const post = await getPost(params.postSlug);
    return generalMetadata(post?.title ? `${post?.title} - Itakhi Digital` : undefined);
}

const page = async ({ params }: { params: { postSlug: string } }) => {
    const currentPost = await getPost(params.postSlug);

    if (!currentPost)
        return (
            <div className="container grid place-items-center w-screen h-[60vh]">
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="font-anton text-4xl">404 - Post not found</h2>
                    <Link className="underline" href={routes.blog}>
                        Back to Blog
                    </Link>
                </div>
            </div>
        );

    return <PostPage currentPost={currentPost} />;
};

export default page;
