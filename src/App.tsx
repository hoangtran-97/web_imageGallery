import React, {useState} from "react";
import "./css/App.css";
import {Gallery} from "./components/Gallery";
import {Header} from "./components/Header";
import {Loading} from "./components/Loading";
import {Upload} from "./components/Upload";
import firebase from "./components/Firebase";
const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    return (
        <div className="App">
            <Header setUploadModalOpen={setUploadModalOpen}></Header>
            <Gallery setIsLoading={setIsLoading}></Gallery>
            <Loading isLoading={isLoading} progress={progress}></Loading>
            <Upload
                setProgress={setProgress}
                setIsLoading={setIsLoading}
                uploadModalOpen={uploadModalOpen}
                setUploadModalOpen={setUploadModalOpen}
            ></Upload>
        </div>
    );
};
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
            console.log(url);
        })
        .catch((error: any) => {
            console.log(error);
        });
};
checkStore();
export default App;
