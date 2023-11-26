const routes = {
    auth: "/auth",
    authCallback: "/auth/callback",
    blog: "/blog/posts",
    dashbord: "/dashbord",
    home: "/",
    login: "/auth/login",
    post: (postSlug: string = ":postSlug") => `/blog/${postSlug}`,
    privacy: "/privacy-policy",
    profile: "/profile",
    signup: "/auth/signup"
} as const;

export default routes;
