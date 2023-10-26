import { sections } from "@/context/GeneralContextProvider";
import routes from "@/config/routes";

interface NavigationConfig {
    auth?: boolean;
    label: string;
    url: string;
}

const navigationConfig: NavigationConfig[] = [
    {
        url: `${routes.home}#${sections.philosophy}`,
        label: "Our Philosophy"
    },
    {
        url: `${routes.home}#${sections.services}`,
        label: "Services"
    },
    {
        url: `${routes.home}#${sections.recentWork}`,
        label: "Recent Work"
    },
    {
        url: `${routes.home}#${sections.pricing}`,
        label: "Pricing"
    },
    {
        url: `${routes.home}#${sections.faqs}`,
        label: "FAQs"
    },
    {
        url: routes.blog,
        label: "Blog"
    },
    {
        url: routes.login,
        label: "Login",
        auth: false
    },
    {
        url: routes.dashbord,
        label: "Dashbord",
        auth: true
    }
];

export default navigationConfig;
