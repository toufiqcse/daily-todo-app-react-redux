import { updateTodo } from "@/redux/todos/actionsCreator";
import { useState } from "react";
import { useDispatch } from "react-redux";



const EditTask = ({ selectedTask }) => {
    const dispatch = useDispatch()
    const { todoName, todoDate, todoStatus, todoProgress, todoImage } = selectedTask;
    const [formData, setFormData] = useState(
        {
            todoName: todoName,
            todoDate: todoDate,
            todoStatus: todoStatus,
            todoProgress: todoProgress,
            todoImage: todoImage?.url,
        }
    );
    const [modalOpen, setModalOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(
            {
                ...formData,
                [name]: value,
            }
        );
    };

    // image function
    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files.length !== 1) {
            alert('Please select only one image');
            return;
        }
        const file = files[0];
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (!allowedTypes.includes(file.type)) {
            alert('Please select a PNG or JPG image.');
            return;
        }
        const imageUrl = URL.createObjectURL(file); // Get the URL
        setFormData({
            ...formData,
            todoImage: {
                file,
                url: imageUrl,
                name: file.name,
                size: file.size,
                type: file.type,
            },
        });
    };

    const handleShowImage = () => {
        setModalOpen(true)
    };
    const closeModal = () => {
        setModalOpen(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const { todoName, todoDate, todoStatus, todoProgress, todoImage } = formData;
        // send data to redux
        const updatedTodo = {
            id: selectedTask.id, // Assuming you have an id field in your task object
            todoName,
            todoDate,
            todoStatus,
            todoProgress,
            todoImage,
        };
        dispatch(addedTodo({ todoName, todoDate, todoStatus, todoProgress, todoImage }));
        // dispatch(updateTodo(updatedTodo));

        // Reset the form fields if needed
        setFormData({
            todoName: '',
            todoDate: "",
            todoStatus: '',
            todoProgress: '',
            todoImage: null,
        });


    };
    return (
        <div>
            <div className="text-center text-[20px] py-2 rounded-md text-purple-800 bg-gray-300 font-semibold">{`Edit ${todoName} Task`}</div>
            <form onSubmit={handleSubmit}>
                {/* add todo filed */}
                <div className="mt-4 mb-4">
                    <span className="mr-4 font-semibold">Task Name :</span>
                    <input
                        className="w-full py-2 px-4 border-2 outline-none border-purple-200 focus:border-purple-700 rounded-md mt-2 text-[1rem]"
                        type="text"
                        name="todoName"
                        value={formData.todoName}
                        onChange={handleInputChange}
                        placeholder="Enter your task"
                        required
                    />
                </div>
                {/* Date select */}
                <div className="mb-4">
                    <span className="mr-4 font-semibold">Task Start Date :</span>
                    <input

                        className="w-full py-2 px-4  outline-none border-2
                        border-purple-200  rounded-md mt-2 text-[1rem]"
                        type="text"
                        name="todoDate"
                        value={todoDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {/* status select */}
                <div className="mb-4">
                    <span className="mr-4 font-semibold">Task Status :</span>
                    <select
                        className="w-full py-2 px-4 border-2 outline-none border-purple-200 focus:border-purple-700 rounded-md mt-2 text-[1rem]"
                        name="todoStatus"
                        defaultValue={formData.todoStatus}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="complete">Complete</option>
                        <option value="progress">Progress</option>
                        <option value="Incomplete">Incomplete</option>
                        <option value="Hold">Hold</option>
                    </select>
                </div>
                {/* progress */}
                <div className="mt-4 mb-4">
                    <span className="mr-4 font-semibold">Progress % :</span>
                    <input
                        className="w-full py-2 px-4 border-2 outline-none border-purple-200 focus:border-purple-700 rounded-md mt-2 text-[1rem]"
                        type="number"
                        name="todoProgress"
                        value={formData.todoProgress}
                        onChange={handleInputChange}
                        placeholder="Enter progress "
                        required
                    />
                </div>
                {/* upload image */}
                <div className="mb-4">
                    <span className="mr-4 font-semibold">Upload Image :</span>
                    {/* <ImageUpload /> */}
                    <div className="flex justify-between items-center">

                        <div className='w-full'>
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="todoImage"
                                onChange={handleImageChange}
                                multiple={false}
                                required
                                name='todoImage'
                            />
                            <label
                                htmlFor="todoImage"
                                className={`block p-4 border-dashed cursor-pointer w-full py-2 px-4 border-2 outline-none border-purple-700 rounded-md mt-2 text-[1rem] ${formData.todoImage ? 'animated-border' : ''
                                    }`}
                            >
                                {todoImage ? (
                                    <div className='flex justify-between items-center'>
                                        <span>
                                            {todoImage?.name.length > 20
                                                ? todoImage?.name.slice(0, 20) +
                                                `... ${todoImage?.type}`
                                                : todoImage?.name}
                                        </span>

                                        <button className='text-red-600 bg-none outline-none border-none' onClick={() =>
                                            setFormData({
                                                ...formData,
                                                todoImage: null, // Clear the image
                                            })
                                        }>Delete</button>
                                    </div>
                                ) : (
                                    <span>Click or drag an image here to upload</span>
                                )}
                            </label>
                        </div>

                        <div className='w-full text-right'>
                            {formData.todoImage && (
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
                                <div className="bg-purple-700 p-1 rounded-md z-90 relative ">
                                    <img
                                        src={todoImage?.url}
                                        alt={todoImage?.name}
                                        className="max-h-80 max-w-md"
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
                </div>
                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full py-2 text-center border-2 outline-none bg-purple-400 hover:bg-purple-700 rounded-md text-[1rem] transition-all duration-300 hover:text-white font-semibold"
                    >
                        Updated ToDo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditTask;
