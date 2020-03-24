import React from "react";
import {GalleryImage} from "./GalleryImage";

const images: string[] = [
    "https://source.unsplash.com/300x300/?nature,water",
    "https://source.unsplash.com/300x300/?thunder",
    "https://source.unsplash.com/300x300/?game",
    "https://source.unsplash.com/300x300/?nintendo",
    "https://source.unsplash.com/300x300/?food",
    "https://source.unsplash.com/300x300/?computer",
    "https://source.unsplash.com/300x300/?fps",
    "https://source.unsplash.com/300x300/?code",
    "https://source.unsplash.com/300x300/?holiday",
    "https://source.unsplash.com/300x300/?music",
    "https://source.unsplash.com/300x300/?love",
    "https://source.unsplash.com/300x300/?vietnam"
];
export const Gallery = () => {
    return (
        <div className="gallery">
            {images.map(image => (
                <GalleryImage image={image}></GalleryImage>
            ))}
        </div>
    );
};
