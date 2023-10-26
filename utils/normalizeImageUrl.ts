function normalizeImageUrl(imageUrl?: string) {
    if (!imageUrl) return "";
    return imageUrl.includes("https://") ? imageUrl : `https://${imageUrl?.split("//")?.[1]}`;
}

export default normalizeImageUrl;
