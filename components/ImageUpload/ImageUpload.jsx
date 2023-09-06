import Image from 'next/image';
import { useState } from 'react';
import ImageModal from './ImageModal';

export default function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files.length !== 1) {
            alert('Please select only one image');
            return;
        }
        const file = files[0];
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (!allowedTypes.includes(file.type)) {
            console.log('Please select a PNG or JPG image.');
            return;
        }

        setSelectedImage(
            {
                name: file.name,
                url: URL.createObjectURL(file),
                type: file.type,

            }
        );

    };

    const openModal = () => {
        setModalOpen(true);
    };

    const handleShowImage = () => {
        if (selectedImage) {
            // Add your upload logic here

            console.log('Uploading image:', selectedImage);
        }
        openModal()
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const handleDeleteImage = () => {
        setSelectedImage('');
    };
    return (
        <div className="flex justify-between items-center">

            <div className='w-full'>
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="imageInput"
                    onChange={handleImageChange}
                    multiple={false}
                    required
                    name='userImage'
                />
                <label
                    htmlFor="imageInput"
                    className={`block p-4  border-dashed cursor-pointer w-full py-2 px-4 border-2 outline-none  border-purple-700  rounded-md mt-2 text-[1rem] ${selectedImage ? 'animated-border' : ''
                        }`}
                >
                    {selectedImage ? (
                        <div className='flex justify-between items-center'>
                            <span>
                                {selectedImage.name.length > 20
                                    ? selectedImage.name.slice(0, 20) + `... ${selectedImage.type}`
                                    : selectedImage.name}
                            </span>

                            <button className='text-red-600 bg-none outline-none border-none' onClick={handleDeleteImage}>Delete</button>
                        </div>


                    ) : (
                        <span>Click or drag an image here to upload</span>
                    )}
                </label>
            </div>

            <div className='w-full text-right'>
                {selectedImage && (
                    <span
                        className="bg-purple-700 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={handleShowImage}
                    >
                        Show  Image
                    </span>
                )}
            </div>

            {modalOpen && (
                <div className="fixed inset-0 z-100 flex justify-center items-center">
                    <div
                        className="fixed inset-0 bg-black/50 opacity-70 "
                        onClick={closeModal}
                    ></div>
                    <div className="bg-purple-700 p-1 rounded-md z-10 relative ">
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.name}
                            className="max-h-80 max-w-md "
                        />
                        <button
                            className="absolute top-[-20px] right-[0px] text-red-600"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}
