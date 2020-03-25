import React from "react";
const vibrant = require("node-vibrant");
interface GalleryImageProps {
    image: {id: number; link: string; title?: string};
    key: string;
    setIsLoading: Function;
}
export const GalleryImage = ({image, setIsLoading}: GalleryImageProps) => {
    const {link, title} = image;
    const updateColor = async (link: string) => {
        setIsLoading(true);
        await vibrant.from(link).getPalette((err: any, palette: any): any => {
            console.log(err, palette);
            document.documentElement.style.setProperty("--background-color", palette.Vibrant.hex);
            document.documentElement.style.setProperty("--sub-background-color", palette.LightVibrant.hex);
            document.documentElement.style.setProperty("--color", palette.DarkVibrant.hex);
        });
        setIsLoading(false);
    };
    return (
        <div style={{backgroundImage: `url(${link})`}} className="gallery-card">
            {title ? <p id="gallery-title">{title}</p> : null}
            <div id="gallery-button-container">
                <button className="gallery-button" onClick={() => updateColor(link)}>
                    Change Theme
                </button>
                <button className="gallery-button">Download</button>
            </div>
        </div>
    );
};
