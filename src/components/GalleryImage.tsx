import React from "react";
const vibrant = require("node-vibrant");
interface GalleryImageProps {
    image: {id: number; link: string};
    key: string;
    setBackgroundColor: Function;
    setColor: Function;
}
export const GalleryImage = ({image, setBackgroundColor, setColor}: GalleryImageProps) => {
    const {link} = image;
    const updateColor = (link: string) => {
        vibrant.from(link).getPalette((err: any, palette: any): any => {
            console.log(err);
            setColor(palette.DarkVibrant.hex);
            setBackgroundColor(palette.Vibrant.hex);
        });
    };
    return (
        <div style={{backgroundImage: `url(${link})`}} className="gallery-card" onClick={() => updateColor(link)}></div>
    );
};
