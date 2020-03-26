import React, {useState} from "react";
import "./css/App.css";
import {Gallery} from "./components/Gallery";
import {Header} from "./components/Header";
import {Loading} from "./components/Loading";
import {Upload} from "./components/Upload";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="App">
            <Header></Header>
            <Gallery setIsLoading={setIsLoading}></Gallery>
            <Loading isLoading={isLoading}></Loading>
            <Upload></Upload>
        </div>
    );
}

export default App;
