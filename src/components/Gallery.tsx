import React, {useState, useEffect} from "react";
import {GalleryImage} from "./GalleryImage";
import {FaArrowAltCircleUp} from "react-icons/fa";
import firebase from "./Firebase";
interface GalleryProps {
    setIsLoading: Function;
}

export const Gallery = ({setIsLoading}: GalleryProps) => {
    const [imageLinks, setImageLinks] = useState(["https://source.unsplash.com/300x300/?nature,water"]);
    useEffect(() => {
        checkStore();
    }, []);
    const checkStore = () => {
        console.log("checked");

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
                setImageLinks(imageLinks => [...imageLinks, url]);
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
