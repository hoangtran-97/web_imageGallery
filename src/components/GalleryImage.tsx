import React from "react";
const vibrant = require("node-vibrant");
interface GalleryImageProps {
    image: {id: number; link: string};
    key: string;
}
export const GalleryImage = ({image}: GalleryImageProps) => {
    const {link} = image;
    return (
        <div style={{backgroundImage: `url(${link})`}} className="gallery-card" onClick={() => updateColor(link)}></div>
    );
};
const updateColor = (link: string) => {
    vibrant.from(link).getPalette((err: any, palette: any): any => {
        console.log(palette, err);
    });
};
