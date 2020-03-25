import React from "react";
const vibrant = require("node-vibrant");
interface GalleryImageProps {
    image: {id: number; link: string; info?: string};
    key: string;
}
export const GalleryImage = ({image}: GalleryImageProps) => {
    const {link, info} = image;
    const updateColor = (link: string) => {
        vibrant.from(link).getPalette((err: any, palette: any): any => {
            console.log(err, palette);
            document.documentElement.style.setProperty("--background-color", palette.Vibrant.hex);
            document.documentElement.style.setProperty("--sub-background-color", palette.LightVibrant.hex);
            document.documentElement.style.setProperty("--color", palette.DarkVibrant.hex);
        });
    };
    return (
        <div style={{backgroundImage: `url(${link})`}} className="gallery-card">
            {info ? <p id="gallery-info">{info}</p> : null}
            <div id="gallery-button-container">
                <button className="gallery-button" onClick={() => updateColor(link)}>
                    Change Theme
                </button>
                <button className="gallery-button">Download</button>
            </div>
        </div>
    );
};
