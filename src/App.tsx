import React from "react";
import "./css/App.css";
import {Gallery} from "./components/Gallery";
import {Header} from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Gallery></Gallery>
        </div>
    );
}

export default App;
