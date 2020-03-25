import React from "react";
import {GalleryImage} from "./GalleryImage";

interface imageObject {
    id: number;
    link: string;
    info?: string;
}
const images: imageObject[] = [
    {id: 0, link: "https://source.unsplash.com/300x300/?nature,water", info: "blabla bbalbla"},
    {id: 1, link: "https://source.unsplash.com/300x300/?thunder"},
    {id: 2, link: "https://source.unsplash.com/300x300/?game"},
    {id: 3, link: "https://source.unsplash.com/300x300/?code"},
    {id: 4, link: "https://source.unsplash.com/300x300/?mac"},
    {id: 5, link: "https://source.unsplash.com/300x300/?gamer"},
    {id: 6, link: "https://source.unsplash.com/300x300/?computer"},
    {id: 7, link: "https://source.unsplash.com/300x300/?love"}
];
export const Gallery = () => {
    return (
        <div className="gallery">
            {images.map(image => (
                <GalleryImage image={image} key={image.id.toString()}></GalleryImage>
            ))}
        </div>
    );
};
