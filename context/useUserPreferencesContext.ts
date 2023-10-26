import { useContext } from "react";
import { UserPreferencesContext } from "./UserPreferencesContextProvider";

export const useUserPreferencesContext = () => {
    const context = useContext(UserPreferencesContext);

    if (!context) throw new Error("useUserPreferencesContext should be used inside a UserPreferencesContextProvider");

    return context;
};
