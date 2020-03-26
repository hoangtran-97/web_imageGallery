import React from "react";
interface HeaderProps {
    setUploadModalOpen: Function;
}
export const Header = ({setUploadModalOpen}: HeaderProps) => {
    return (
        <div className="header">
            <button className="header-button" onClick={() => setUploadModalOpen(true)}>
                Upload
            </button>
            <p id="header-text">Firebase Gallery</p>
            <button className="header-button">Github</button>
        </div>
    );
};
