interface PostAuthor {
    full_name: string;
    id: string;
    email: string;
    role: string;
    bio?: string;
    avatar?: {
        title?: string;
        url: string;
    };
}

export default PostAuthor;
