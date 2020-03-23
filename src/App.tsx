import React from "react";
import "./App.css";

const images: string[] = [
    "https://source.unsplash.com/300x300/?nature,water",
    "https://source.unsplash.com/300x300/?thunder",
    "https://source.unsplash.com/300x300/?game",
    "https://source.unsplash.com/300x300/?nintendo",
    "https://source.unsplash.com/300x300/?food",
    "https://source.unsplash.com/300x300/?computer"
];

function App() {
    return (
        <div className="App">
            <div className="gallery">
                {images.map(image => (
                    <img src={image} alt="gallery-item" className="gallery-card"></img>
                ))}
            </div>
        </div>
    );
}

export default App;
