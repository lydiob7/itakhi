import { Metadata } from "next";

/* 
    <title>Bilingual Web Design & Development Solutions | Itakhi</title>
*/

const generalMetadata: (title?: string) => Metadata = (
    title: string = "Itakhi - Bilingual Web Design & Development Solutions"
) => ({
    alternates: {
        canonical: "https://itakhidigital.com/"
    },
    authors: [
        { name: "Itakhi", url: "https://itakhidigital.com/" },
        { name: "Gabriela Polanco Ferreyra", url: "https://gabrielapolancoferreyra.com/" },
        { name: "Tomi Scattini", url: "https://tomiscattini.com/" }
    ],
    colorScheme: "light",
    description:
        "Empower your online presence with Itakhi's bilingual web design and development solutions. We offer tailored services for small businesses, agencies, and artists, enhancing brand visibility and impact in the USA and Europe. Discover our expertise today.",
    keywords:
        "bilingual web design, web development, digital solutions, small business, brand visibility, online presence, USA, Europe, product, product management, web design, websites, web development, full stack, frontend, backend, coding, javascript, programación, desarrollo web, desarrollo web full stack, desarrollo de paginas web, desarrollo de aplicaciones web, desarrollo paginas web",
    openGraph: {
        title: "Itakhi - Bilingual Web Design & Development Solutions",
        description:
            "Empower your online presence with Itakhi's bilingual web design and development solutions. We offer tailored services for small businesses, agencies, and artists, enhancing brand visibility and impact in the USA and Europe. Discover our expertise today.",
        type: "website",
        url: "https://itakhidigital.com",
        siteName: "Itakhi",
        images: [{ url: "assets/images/brand-square.jpg", width: 800, height: 600 }]
    },
    title
});

export default generalMetadata;
