import { Document } from "@contentful/rich-text-types";
import Post from "../types/Post";
import PostAuthor from "../types/PostAuthor";

class PostAuthorDTO implements PostAuthor {
    full_name: string;

    id: string;

    email: string;

    role: string;

    bio?: string | undefined;

    avatar?: { title?: string | undefined; url: string } | undefined;

    constructor(_data: any) {
        this.full_name = _data?.fields?.full_name;
        this.id = _data?.sys?.id;
        this.email = _data?.fields?.email;
        this.role = _data?.fields?.role;
        this.bio = _data?.fields?.bio;
        this.avatar = {
            title: _data?.fields?.avatar?.fields?.title,
            url: _data?.fields?.avatar?.fields?.file?.url
        };
    }
}

class PostDTO implements Post {
    author: PostAuthor;

    content?: Document | undefined;

    created_at: string;

    excerpt: string;

    featured_img?: { title?: string | undefined; url: string } | undefined;

    id: string;

    slug: string;

    subtitle?: string | undefined;

    tags: string[];

    title: string;

    updated_at: string;

    constructor(_data: any) {
        this.author = new PostAuthorDTO(_data?.fields?.author);
        this.content = _data?.fields?.content;
        this.created_at = _data?.sys?.createdAt;
        this.excerpt = _data?.fields?.excerpt;
        this.featured_img = {
            title: _data?.fields?.featured_img?.fields?.title,
            url: _data?.fields?.featured_img?.fields?.file?.url
        };
        this.id = _data?.sys?.id;
        this.slug = _data?.fields?.slug;
        this.subtitle = _data?.fields?.subtitle;
        this.tags = _data?.fields?.tags;
        this.title = _data?.fields?.title;
        this.updated_at = _data?.sys?.updatedAt;
    }
}

export default PostDTO;
