import React, {useState, useEffect} from "react";
import "./css/App.css";
import {Gallery} from "./components/Gallery";
import {Header} from "./components/Header";
import {Loading} from "./components/Loading";
import {Upload} from "./components/Upload";
import firebase from "./components/Firebase";
let wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    const [imageLinks, setImageLinks] = useState(["https://source.unsplash.com/300x300/?nature,water"]);
    /*eslint-disable */
    useEffect(() => {
        checkStore();
    }, []);
    useEffect(() => {}, [imageLinks]);
    /*eslint-enable */

    const checkStore = async () => {
        setIsLoading(true);
        console.log("started checking store");
        await wait(2000);
        //Bug: storageRef does not update quick_enough, as far as I know, this is firebase fail to return the up-to-date result, especially when uploading large images
        const storageRef = firebase.storage().ref("images");
        storageRef
            .listAll()
            .then(result => {
                console.log("Found items", result);
                if (result.items.length === 0) {
                    setIsLoading(false);
                }
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
                    setImageLinks(imageLinks => [...imageLinks, url]);
                }
                setIsLoading(false);
            })
            .catch((error: any) => {
                console.log(error);
            });
    };
    return (
        <div className="App">
            <Header setUploadModalOpen={setUploadModalOpen}></Header>
            <Gallery setIsLoading={setIsLoading} imageLinks={imageLinks}></Gallery>
            <Loading isLoading={isLoading} progress={progress}></Loading>
            <Upload
                setProgress={setProgress}
                setIsLoading={setIsLoading}
                uploadModalOpen={uploadModalOpen}
                setUploadModalOpen={setUploadModalOpen}
                checkStore={checkStore}
            ></Upload>
        </div>
    );
};

export default App;
