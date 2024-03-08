import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Post = [
    {
        username: "Biswarup",
        time: "just now",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    },
]



const PostCard = () => {
    return (
        <div className='w-[50%] overflow-scroll shadow-lg no-scrollbar scrollable'>
            {
                Post.map((items) => (
                    <div className="flex items-center justify-center mb-5" key={Math.random()}>
                        <div className="w-full max-w-sm bg-white border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-between items-center px-4 pt-4">
                                <div className="flex items-center space-x-2">
                                    <img className="w-10 h-10 rounded-full cursor-pointer" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                    <div>
                                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer">{items.username}</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{items.time}</span>
                                    </div>
                                </div>
                                <button className="focus:outline-none">
                                    <BsThreeDotsVertical />
                                </button>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <p className="text-gray-800 dark:text-gray-200">
                                    {items.desc}
                                </p>
                                <img className="w-full h-40 object-cover mt-4 rounded-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                <div className="flex justify-between mt-4 gap-x-5">
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 focus:outline-none">
                                        <AiFillLike />
                                        <span>Like</span>
                                    </button>
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 focus:outline-none">
                                        <FaComment />
                                        <span>Comment</span>
                                    </button>
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 focus:outline-none">
                                        <FaShare />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default PostCard