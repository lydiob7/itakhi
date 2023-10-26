import { Metadata } from "next";

const generalMetadata: (title?: string) => Metadata = (
    title: string = "Itakhi - Streamlined Design and Development"
) => ({
    alternates: {
        canonical: "https://itakhidigital.com/"
    },
    authors: [
        { name: "Itakhi", url: "https://itakhidigital.com/" },
        { name: "Gabriela Polanco Ferreyra", url: "https://gabrielapolancoferreyra.com/home" },
        { name: "Tomi Scattini", url: "https://tomiscattini.com/" }
    ],
    colorScheme: "light",
    description: "Itakhi - Streamlined Design and Development",
    keywords:
        "product, product management, web design, websites, web development, full stack, frontend, backend, coding, javascript, programación, desarrollo web, desarrollo web full stack, desarrollo de paginas web, desarrollo de aplicaciones web, desarrollo paginas web",
    openGraph: {
        title: "Itakhi - Streamlined Design and Development",
        description: "Itakhi - Streamlined Design and Development",
        type: "website",
        url: "https://itakhidigital.com",
        siteName: "Itakhi - Streamlined Design and Development",
        images: [{ url: "assets/images/brand-square.jpg", width: 800, height: 600 }]
    },
    title
});

export default generalMetadata;
