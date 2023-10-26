import { useContext } from "react";
import { GeneralContext } from "./GeneralContextProvider";

export const useGeneralContext = () => {
    const context = useContext(GeneralContext);

    if (!context) throw new Error("useGeneralContext should be used inside a GeneralContextProvider");

    return context;
};
