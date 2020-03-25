import React from "react";
import Modal from "react-modal";
interface LoadingProps {
    isLoading: boolean;
}
export const Loading = ({isLoading}: LoadingProps) => {
    return (
        <Modal isOpen={isLoading} className="loading-modal" overlayClassName="loading-modal-overlay">
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        </Modal>
    );
};
