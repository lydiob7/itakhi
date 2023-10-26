import { ComponentProps } from "react";
import clsx from "clsx";
import Post from "@/types/Post";
import routes from "@/config/routes";
import Link from "next/link";
import Image from "next/image";
import { normalizeImageUrl } from "@/utils";

const FALLBACK_POST_IMG = "";

interface PostCardProps extends ComponentProps<"div"> {
    post: Post;
}

const PostCard = ({ className, post, ...props }: PostCardProps) => {
    console.log(post);
    return (
        <Link href={routes.post(post.slug)}>
            <div className={clsx("flex gap-12 items-center h-40 w-full", className)} {...props}>
                <div className="flex-1">
                    <div className="flex gap-4 items-center">
                        {post.author.avatar && (
                            <Image
                                className="h-10 w-10 rounded-full object-cover overflow-hidden"
                                src={normalizeImageUrl(post.author.avatar?.url)}
                                alt={post.author.avatar?.title || ""}
                                width={50}
                                height={50}
                            />
                        )}
                        <div className="font-semibold">{post.author.full_name}</div>
                        <span>
                            {" "}
                            -{" "}
                            {new Intl.DateTimeFormat(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            }).format(new Date(post.created_at))}
                        </span>
                    </div>
                    <h3 className="font-bold text-2xl leading-loose">{post.title}</h3>
                    <p className="my-4">{post.excerpt}</p>
                    {post.tags?.length && (
                        <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tag) => (
                                <span className="bg-gray rounded-full px-4 py-1" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <Image
                    className="w-60 h-full shrink-0 object-cover"
                    src={normalizeImageUrl(post.featured_img?.url) || FALLBACK_POST_IMG}
                    alt={post.featured_img?.title || ""}
                    width={500}
                    height={300}
                />
            </div>
        </Link>
    );
};

export default PostCard;
