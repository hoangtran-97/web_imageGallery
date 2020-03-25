import React, {useState} from "react";
import "./css/App.css";
import {Gallery} from "./components/Gallery";
import {Header} from "./components/Header";
import {Loading} from "./components/Loading";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="App">
            <Header></Header>
            <Gallery setIsLoading={setIsLoading}></Gallery>
            <Loading isLoading={isLoading}></Loading>
        </div>
    );
}

export default App;
