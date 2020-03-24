import React from "react";
interface GalleryImageProps {
    image: {id: number; link: string};
    key: string;
}
export const GalleryImage = ({image}: GalleryImageProps) => {
    const {link} = image;
    return <div style={{backgroundImage: `url(${link})`}} className="gallery-card" onClick={updateColor}></div>;
};
const updateColor = () => {
    console.log("updated");
};
