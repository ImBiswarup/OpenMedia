import React from 'react'
import userImage from '../../images/userImage.jpg';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const Sidebar = () => {
    return (
        <div className='flex-col flex text-white w-full md:w-[30%] mx-auto text-center sticky md:ml-4'>
            <div className="bg-red-500 rounded-lg p-4">
                <div className="image flex items-center justify-center p-4">
                    <img className='rounded-full h-28 w-28' src={userImage} alt="User Profile" />
                </div>
                <div className="desc mb-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, neque.
                </div>
            </div>
            <div className="bg-green-500 rounded-lg mt-4 md:mt-0">
                <Link to={'/'} className=" relative rounded text-black container h-14 flex items-center justify-center mx-auto">
                    <FaHome className='text-gray-500 ml-2 cursor-pointer' size={50} />
                    <span className='w-full text-2xl -ml-8 rounded outline-none pl-2'>
                       Home
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar