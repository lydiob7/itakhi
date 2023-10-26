const routes = {
    auth: "/auth",
    authCallback: "/auth/callback",
    blog: "/blog/posts",
    contact: "/contact",
    dashbord: "/dashbord",
    home: "/",
    login: "/auth/login",
    post: (postSlug: string = ":postSlug") => `/blog/${postSlug}`,
    profile: "/profile",
    signup: "/auth/signup"
} as const;

export default routes;
