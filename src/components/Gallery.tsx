import React from "react";
import {GalleryImage} from "./GalleryImage";
import {FaArrowAltCircleUp} from "react-icons/fa";

interface GalleryProps {
    setIsLoading: Function;
    imageLinks: string[];
}

export const Gallery = ({setIsLoading, imageLinks}: GalleryProps) => {
    return (
        <>
            <div className="gallery" id="gallery">
                {imageLinks.map((image, index) => (
                    <GalleryImage image={image} key={index} setIsLoading={setIsLoading}></GalleryImage>
                ))}
            </div>
            <a href="#gallery">
                <FaArrowAltCircleUp id="gallery-to-top"></FaArrowAltCircleUp>
            </a>
        </>
    );
};
