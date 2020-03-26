import React from "react";
const vibrant = require("node-vibrant");
interface GalleryImageProps {
    image: string;
    key: number;
    setIsLoading: Function;
}
export const GalleryImage = ({image, setIsLoading}: GalleryImageProps) => {
    const updateColor = async (link: string) => {
        setIsLoading(true);
        await vibrant.from(`https://cors-anywhere.herokuapp.com/${link}`).getPalette((err: any, palette: any): any => {
            console.log(err);
            document.documentElement.style.setProperty("--background-color", palette.Vibrant.hex);
            document.documentElement.style.setProperty("--sub-background-color", palette.LightVibrant.hex);
            document.documentElement.style.setProperty("--color", palette.DarkVibrant.hex);
        });
        setIsLoading(false);
    };
    return (
        <div style={{backgroundImage: `url(${image})`}} className="gallery-card">
            <div id="gallery-button-container">
                <button className="gallery-button" onClick={() => updateColor(image)}>
                    Change Theme
                </button>
                <button className="gallery-button">Download</button>
            </div>
        </div>
    );
};
