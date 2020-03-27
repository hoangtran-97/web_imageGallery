import React from "react";
import {FaGithub, FaCloudUploadAlt} from "react-icons/fa";
interface HeaderProps {
    setUploadModalOpen: Function;
}
export const Header = ({setUploadModalOpen}: HeaderProps) => {
    return (
        <div className="header">
            <button className="header-button hvr-icon-wobble-vertical" onClick={() => setUploadModalOpen(true)}>
                <FaCloudUploadAlt className="header-icon hvr-icon"></FaCloudUploadAlt>
                Upload
            </button>
            <p id="header-text">Firebase Gallery</p>
            <button className="header-button hvr-icon-wobble-vertical">
                <a href="https://github.com/hoangtran-97/web_imageGallery" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="header-icon  hvr-icon"></FaGithub>
                    GitHub
                </a>
            </button>
        </div>
    );
};
