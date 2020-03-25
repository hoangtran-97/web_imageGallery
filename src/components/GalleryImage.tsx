import React from "react";
const vibrant = require("node-vibrant");
interface GalleryImageProps {
    image: {id: number; link: string};
    key: string;
}
export const GalleryImage = ({image}: GalleryImageProps) => {
    const {link} = image;
    const updateColor = (link: string) => {
        vibrant.from(link).getPalette((err: any, palette: any): any => {
            console.log(err, palette);
            document.documentElement.style.setProperty("--background-color", palette.Vibrant.hex);
            document.documentElement.style.setProperty("--sub-background-color", palette.LightVibrant.hex);
            document.documentElement.style.setProperty("--color", palette.DarkVibrant.hex);
        });
    };
    return (
        <div style={{backgroundImage: `url(${link})`}} className="gallery-card" onClick={() => updateColor(link)}></div>
    );
};
