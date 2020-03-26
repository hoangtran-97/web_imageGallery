import React, {useState} from "react";
import firebase from "./Firebase";
import {v4 as uuid} from "uuid";
interface UploadProps {
    setProgress: Function;
    setIsLoading: Function;
}
export const Upload = ({setProgress, setIsLoading}: UploadProps) => {
    const [image, setImage] = useState({});
    const handleChange = (e: any) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
        }
    };
    const uploadFirebase = (image: any) => {
        setIsLoading(true);
        const ext = image.name.split(".").pop(); //Extract extension
        const filename = `${uuid()}.${ext}`; //Unique name
        firebase
            .storage()
            .ref(`images/${filename}`)
            .put(image)
            .on("state_changed", snapshot => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
                if (progress === 100) {
                    setIsLoading(false);
                }
            });
    };
    return (
        <div>
            <input type="file" onChange={handleChange}></input>
            <button onClick={() => uploadFirebase(image)}>Upload</button>
        </div>
    );
};
