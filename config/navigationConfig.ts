import { sections } from "@/context/GeneralContextProvider";
import routes from "@/config/routes";

interface NavigationConfig {
    label: string;
    url: string;
}

const navigationConfig: NavigationConfig[] = [
    {
        url: `${routes.home}#${sections.services}`,
        label: "Services"
    },
    {
        url: `${routes.home}#${sections.recentWork}`,
        label: "Work"
    },
    {
        url: routes.blog,
        label: "Blog"
    },
    {
        url: `${routes.home}#${sections.faqs}`,
        label: "Answers!"
    },
    {
        url: `${routes.home}#${sections.contact}`,
        label: "Contact Us"
    }
];

export default navigationConfig;
