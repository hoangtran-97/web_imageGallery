import React, {useState, useEffect} from "react";
import "./css/App.css";
import {Gallery} from "./components/Gallery";
import {Header} from "./components/Header";
import {Loading} from "./components/Loading";
import {Upload} from "./components/Upload";

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

export default App;
