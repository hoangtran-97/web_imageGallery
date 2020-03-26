import React from "react";
import {FirebaseContext} from "./Firebase";
export const Header = () => {
    return (
        <div className="header">
            <button className="header-button">Upload</button>
            <p id="header-text">Firebase Gallery</p>
            <button className="header-button">Github</button>
            <FirebaseContext.Consumer>
                {firebase => {
                    return <div>I've access to Firebase and render something.</div>;
                }}
            </FirebaseContext.Consumer>
        </div>
    );
};
