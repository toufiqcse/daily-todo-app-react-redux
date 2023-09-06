import { useState } from "react";

const ImageModal = ({ selectedImage }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return <div>
        {modalOpen && (
            <div className="fixed inset-0 z-50 flex justify-center items-center">
                <div
                    className="fixed inset-0 bg-gray-200 opacity-50"
                    onClick={closeModal}
                ></div>
                <div className="bg-white p-4 rounded-lg z-10 relative">
                    <img
                        src={selectedImage.url}
                        alt={selectedImage.name}
                        className="max-h-80 max-w-md"
                    />
                    <button
                        className="absolute top-2 right-2 text-red-600"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
    </div>
}

export default ImageModal