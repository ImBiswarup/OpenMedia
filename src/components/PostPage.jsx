import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import { AiFillLike } from 'react-icons/ai';
import { FaComment, FaShare } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

import userImage from '../images/userImage.jpg';
import { AppContext } from './Context/AppContext';
// import Post from '../../../server/models/Posts';
const PostPage = () => {

    const { postID } = useParams();

    const { fetchPost, post, logout } = useContext(AppContext)

    const [commentBar, setCommentBar] = useState(true);
    const [comment, setComment] = useState("");

    useEffect(() => {
        fetchPost(postID);
    }, [postID]);

    console.log(post)

    if (!post) {
        return <div>Loading...</div>;
    }


    return (
        <div className='h-screen'>
            <div className="w-full lg:w-[50%] xl:w-[50%] mx-auto overflow-hpostIdden shadow-lg rounded-lg my-6">
                <div className="bg-white dark:bg-gray-800">
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <img className="w-10 h-10 rounded-full cursor-pointer" src={userImage} alt="User" />
                                <div>
                                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer">
                                        {post.createdBy.username}
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.createdAt}</span>
                                </div>
                            </div>
                            <button className="focus:outline-none">
                                <BsThreeDotsVertical />
                            </button>
                        </div>
                    </div>
                    <div className="p-4 pt-2">
                        <p className="text-gray-800 dark:text-gray-200">{post.text}</p>
                        <img className="w-full h-96 object-cover mt-4 rounded-lg" src={userImage} alt="Bonnie" />
                    </div>
                    <div className="p-4 border-t dark:border-gray-700">
                        <div className="flex justify-between mt-2">
                            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all focus:outline-none">
                                <AiFillLike size={30} />
                                <span className='text-xl font-medium'>Like</span>
                            </button>
                            <button onClick={() => { setCommentBar(!commentBar) }} className={`flex items-center space-x-2 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all focus:outline-none`}>
                                <FaComment size={30} />
                                <span className='text-xl font-medium'>Comment</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all focus:outline-none">
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
                        onChange={(e) => setComment(e.target.value)}
                        className={`w-full p-2 border text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
                        placeholder="Write what you want..."
                    />
                </div>
            </div>
        </div>
    )
}

export default PostPage