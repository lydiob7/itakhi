"use client";

import { FC, ReactNode, createContext, useCallback, useMemo, useState } from "react";
import * as contentful from "contentful";
import Post from "../types/Post";
import PostDTO from "@/types/PostDTO";

const contentfulClient = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!
});

const CACHE_EXPIRATION_DURATION = 1000 * 60 * 10;
const POST_LAST_FETCHED = "posts:last_fetched";

interface BlogContextProps {
    currentPost: Post | null;
    getPost: (postSlug: string) => void;
    getPosts: () => void;
    isLoadingCurrentPost: boolean;
    isLoadingPosts: boolean;
    posts: Post[];
}

export const BlogContext = createContext<BlogContextProps | null>(null);

const BlogContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentPost, setCurrentPost] = useState<Post | null>(null);
    const [isLoadingCurrentPost, setIsLoadingCurrentPost] = useState<boolean>(false);
    const [isLoadingPosts, setIsLoadingPosts] = useState<boolean>(false);
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = useCallback(async () => {
        setIsLoadingPosts(true);
        try {
            const lastFetched = parseInt(localStorage.getItem(POST_LAST_FETCHED) || "0");
            if (posts.length && Date.now() - lastFetched < CACHE_EXPIRATION_DURATION) return;
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
            localStorage.setItem(POST_LAST_FETCHED, Date.now().toString());
            setPosts((response?.items || []).map((post) => new PostDTO(post)));
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoadingPosts(false);
        }
    }, []);

    const getPost = useCallback(async (postSlug: string) => {
        setIsLoadingCurrentPost(true);
        try {
            const response = await contentfulClient.getEntries({
                content_type: "post",
                "fields.slug": postSlug
            });
            if (response?.items?.[0]) setCurrentPost(new PostDTO(response.items[0]));
        } catch (error) {
        } finally {
            setIsLoadingCurrentPost(false);
        }
    }, []);

    const value = useMemo(
        () => ({
            currentPost,
            getPost,
            getPosts,
            isLoadingCurrentPost,
            isLoadingPosts,
            posts
        }),
        [currentPost, getPosts, isLoadingCurrentPost, isLoadingPosts, posts]
    );

    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;
