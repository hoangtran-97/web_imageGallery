import React, {useState} from "react";
import firebase from "./Firebase";
import {v4 as uuid} from "uuid";

export const Upload = () => {
    const [image, setImage] = useState({});
    const handleChange = (e: any) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
        }
    };
    const uploadFirebase = (image: any) => {
        const ext = image.name.split(".").pop(); //Extract extension
        const filename = `${uuid()}.${ext}`; //Unique name
        firebase
            .storage()
            .ref(`images/${filename}`)
            .put(image);
    };
    return (
        <div>
            <input type="file" onChange={handleChange}></input>
            <button onClick={() => uploadFirebase(image)}>Upload</button>
        </div>
    );
};
