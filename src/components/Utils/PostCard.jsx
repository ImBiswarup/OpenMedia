import React, { useEffect, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaComment, FaShare } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';
import { MdAddPhotoAlternate } from "react-icons/md";

import userImage from '../../images/userImage.jpg';
import Post from '../data/posts';

const PostCard = () => {
    const [commentBar, setCommentBar] = useState(true);
    const [post, setPost] = useState("");
    const [comment, setComment] = useState("");
    const [files, setFiles] = useState("");
    const [description, setDescription] = useState("");

    const commentLoader = (e) => {
        setComment(e.target.value);
    }
    const postLoader = (e) => {
        setPost(e.target.value);
    }

    const commentBarShow = () => {
        setCommentBar(!commentBar);
    }

    useEffect(() => {
    }, [files]);

    const showUpload = (e) => {
        const mediaFile = e.target.files[0];
        if (mediaFile) {
            alert(`File selected: ${mediaFile.name}`);
        }
        setFiles(mediaFile);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image', files);
        formData.append('username', 'Test User'); // Change to dynamic username if needed
        formData.append('desc', description); // Adding description to the form data

        // Send the formData to the backend for uploading
        // Replace the URL with your backend endpoint
        fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to upload file');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // Optionally, you can update state or perform any action upon successful upload
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
    };

    return (
        <div className='flex-col mx-auto w-full mt-5'>
            <div className="md:w-1/2 w-full relative bg-white rounded text-black container h-14 flex items-center justify-end mx-auto">
                <IoSend size={28} className="absolute items-center mr-2 text-gray-500 hover:text-gray-900 transition-all cursor-pointer" />
                <label htmlFor="file-upload" className="flex-1 text-center flex items-center justify-center cursor-pointer bg-white ml-2">
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        onChange={showUpload}
                    />
                    <MdAddPhotoAlternate className='text-gray-500 hover:text-gray-900 ' size={30} />
                </label>
                <input
                    value={post}
                    onChange={postLoader}
                    className='w-full rounded outline-none pl-2' type="text" placeholder="Share what's on your mind" />
                <input
                    value={description}
                    onChange={handleDescriptionChange}
                    className='w-full rounded outline-none pl-2' type="text" placeholder="What's on your mind" />
                <button onClick={handleUpload}></button>
            </div>

            {Post.map((item, index) => (
                <div key={index} className="w-full lg:w-[50%] xl:w-[50%] mx-auto overflow-hidden shadow-lg rounded-lg my-6">
                    <div className="bg-white dark:bg-gray-800">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <img className="w-10 h-10 rounded-full cursor-pointer" src={userImage} alt="User" />
                                    <div>
                                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer">
                                            {item.username}
                                        </h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.time}</span>
                                    </div>
                                </div>
                                <button className="focus:outline-none">
                                    <BsThreeDotsVertical />
                                </button>
                            </div>
                        </div>
                        <div className="p-4 pt-2">
                            <p className="text-gray-800 dark:text-gray-200">{item.desc}</p>
                            <img className="w-full h-96 object-cover mt-4 rounded-lg" src={userImage} alt="Bonnie" />
                        </div>
                        <div className="p-4 border-t dark:border-gray-700">
                            <div className="flex justify-between mt-2">
                                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all focus:outline-none">
                                    <AiFillLike size={30} />
                                    <span className='text-xl font-medium'>Like</span>
                                </button>
                                <button onClick={commentBarShow} className={`flex items-center space-x-1 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all focus:outline-none`}>
                                    <FaComment size={30} />
                                    <span className='text-xl font-medium'>Comment</span>
                                </button>
                                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all focus:outline-none">
                                    <FaShare size={30} />
                                    <span className='text-xl font-medium'>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`relative bg-white dark:bg-gray-800 p-4 ${commentBar ? "hidden" : ""}`}>
                        <IoSend size={28} className={`absolute top-1/2 transform -translate-y-1/2 right-8 text-gray-500 hover:text-gray-900 transition-all cursor-pointer `} />
                        <input
                            type="text"
                            value={comment}
                            onChange={commentLoader}
                            className={`w-full p-2 border text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
                            placeholder="Write what you want..."
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostCard;
