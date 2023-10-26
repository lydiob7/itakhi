import { Document } from "@contentful/rich-text-types";
import PostAuthor from "./PostAuthor";

interface Post {
    author: PostAuthor;
    content?: Document;
    created_at: string;
    excerpt: string;
    featured_img?: {
        title?: string;
        url: string;
    };
    id: string;
    slug: string;
    subtitle?: string;
    tags: string[];
    title: string;
    updated_at: string;
}

export default Post;
