import React, {useState} from "react";
import {GalleryImage} from "./GalleryImage";

interface imageObject {
    id: number;
    link: string;
}
const images: imageObject[] = [
    {id: 0, link: "https://source.unsplash.com/300x300/?nature,water"},
    {id: 1, link: "https://source.unsplash.com/300x300/?thunder"},
    {id: 2, link: "https://source.unsplash.com/300x300/?game"},
    {id: 3, link: "https://source.unsplash.com/300x300/?code"},
    {id: 4, link: "https://source.unsplash.com/300x300/?mac"},
    {id: 5, link: "https://source.unsplash.com/300x300/?game"},
    {id: 6, link: "https://source.unsplash.com/300x300/?computer"},
    {id: 7, link: "https://source.unsplash.com/300x300/?love"}
];
export const Gallery = () => {
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFFF");
    const [color, setColor] = useState("#000000");
    const styles = {
        dynamic: {
            backgroundColor: backgroundColor,
            color: color
        }
    };
    return (
        <>
            <div className="header" style={styles.dynamic}>
                <button id="upload">Upload</button>
                <p>Firebase Gallery</p>
                <p>Theme</p>
            </div>
            <div className="gallery" style={styles.dynamic}>
                {images.map(image => (
                    <GalleryImage
                        image={image}
                        key={image.id.toString()}
                        setBackgroundColor={setBackgroundColor}
                        setColor={setColor}
                    ></GalleryImage>
                ))}
            </div>
        </>
    );
};
