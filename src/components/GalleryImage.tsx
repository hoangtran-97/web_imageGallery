import React from "react";
interface GalleryImageProps {
    image: string;
}
export const GalleryImage = ({image}: GalleryImageProps) => {
    return <div style={{backgroundImage: `url(${image})`}} className="gallery-card" onClick={updateColor}></div>;
};
const updateColor = () => {
    console.log("updated");
};
