import React, {useState} from "react";
import firebase from "./Firebase";
import {v4 as uuid} from "uuid";
import Modal from "react-modal";
import {FaTimes} from "react-icons/fa";
interface UploadProps {
    setProgress: Function;
    setIsLoading: Function;
    uploadModalOpen: boolean;
    setUploadModalOpen: Function;
    checkStore: Function;
}
export const Upload = ({setProgress, setIsLoading, uploadModalOpen, setUploadModalOpen, checkStore}: UploadProps) => {
    const [image, setImage] = useState(null);
    const handleChange = (e: any) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
        }
    };
    const uploadFirebase = async (image: any) => {
        if (image !== null) {
            setUploadModalOpen(false);
            setIsLoading(true);
            const ext = image.name.split(".").pop(); //Extract extension
            const filename = `${uuid()}.${ext}`; //Unique name
            await firebase
                .storage()
                .ref(`images/${filename}`)
                .put(image)
                .on("state_changed", snapshot => {
                    // progress function ....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                    if (progress === 100) {
                        checkStore();
                        setIsLoading(false);
                        setProgress(0);
                    }
                });
        } else {
            alert("Please choose an Image to upload!");
        }
    };
    return (
        <Modal
            isOpen={uploadModalOpen}
            className="upload-modal"
            overlayClassName="upload-modal-overlay"
            ariaHideApp={false}
        >
            <input type="file" onChange={handleChange} id="upload-input"></input>
            <button onClick={() => uploadFirebase(image)} id="upload-upload">
                Upload
            </button>
            <FaTimes id="upload-close" onClick={() => setUploadModalOpen(false)}></FaTimes>
        </Modal>
    );
};
