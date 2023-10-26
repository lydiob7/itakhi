import { useContext } from "react";
import { BlogContext } from "./BlogContextProvider";

export const useBlogContext = () => {
    const context = useContext(BlogContext);

    if (!context) throw new Error("useBlogContext should be used inside a BlogContextProvider");

    return context;
};
