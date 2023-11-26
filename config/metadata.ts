import { Metadata } from "next";

/* 
    <title>Bilingual Web Design & Development Solutions | Itakhi</title>
*/

const generalMetadata: (title?: string) => Metadata = (
    title: string = "Itakhi | Digital Atelier Specialized in Web Design & Services"
) => ({
    metadataBase: new URL("http://localhost:3000"),
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
        "At Itakhi, we redefine the digital journey by crafting transformativeweb experiences. Our tailored bilingual web design and development solutions empower small businesses, agencies, and artists, enhancing brand visibility and impact in the USA and Europe.",
    keywords:
        "Bilingual web design, Web development solutions, Small business web design, Agency website development, Artist website design, Brand visibility, Impactful web solutions, USA and Europe web design",
    openGraph: {
        title: "Itakhi | Digital Atelier Specialized in Web Design & Services",
        description:
            "At Itakhi, we redefine the digital journey by crafting transformativeweb experiences. Our tailored bilingual web design and development solutions empower small businesses, agencies, and artists, enhancing brand visibility and impact in the USA and Europe.",
        type: "website",
        url: "https://itakhidigital.com",
        siteName: "Itakhi",
        // images: [{ url: "assets/images/brand-square.jpg", width: 800, height: 600 }]
    },
    title
});

export default generalMetadata;
