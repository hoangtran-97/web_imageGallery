import React, {useState, useEffect} from "react";
import {GalleryImage} from "./GalleryImage";
import {FaArrowAltCircleUp} from "react-icons/fa";
import firebase from "./Firebase";
interface GalleryProps {
    setIsLoading: Function;
    isUpdating: boolean;
}

export const Gallery = ({setIsLoading, isUpdating}: GalleryProps) => {
    const [imageLinks, setImageLinks] = useState(["https://source.unsplash.com/300x300/?nature,water"]);

    /*eslint-disable */
    useEffect(() => {
        checkStore();
    }, [isUpdating]);
    /*eslint-enable */
    const checkStore = () => {
        const storageRef = firebase.storage().ref("images");
        storageRef
            .listAll()
            .then(function(result) {
                result.items.forEach(imageRef => {
                    saveLinks(imageRef);
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const saveLinks = (imageRef: any) => {
        imageRef
            .getDownloadURL()
            .then((url: any) => {
                if (!imageLinks.includes(url)) {
                    console.log("false");
                    setImageLinks(imageLinks => [...imageLinks, url]);
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

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
