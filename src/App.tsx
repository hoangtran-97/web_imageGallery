import React from "react";
import "./css/App.css";
import {Gallery} from "./components/Gallery";
import {Header} from "./components/Header";
import {Loading} from "./components/Loading";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Gallery></Gallery>
            <Loading></Loading>
        </div>
    );
}

export default App;
