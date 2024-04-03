import React, { useContext } from 'react';
import userImage from '../../images/userImage.jpg';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus, FaVideo } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { AppContext } from '../Context/AppContext';


const sidebarLinks = [
    {
        icon: <FaHome size={50} />,
        name: 'Home',
        path: '/'
    },
    {
        icon: <FaVideo size={50} />,
        name: 'Video',
        path: '/videos'
    },
    {
        icon: <FaUserPlus size={50} />,
        name: 'Friends',
        path: '/friends'
    },
    {
        icon: <AiFillMessage size={50} />,
        name: 'Chats',
        path: '/chats'
    },
];

const Sidebar = () => {

    const { post } = useContext(AppContext)

    console.log(post.createdBy)

    return (
        <div className="hidden lg:flex-col lg:flex text-white md:w-[30%] mx-auto text-center sticky md:ml-4">
            <div className="p-4">
                <div className="image flex items-center justify-center p-4">
                    <img className="rounded-full h-28 w-28" src={userImage} alt="User Profile" />
                </div>
                <div className="desc mb-2 text-2xl font-semibold">
                    {post?.createdBy?.username || "name"}
                </div>
                <button className='hover:bg-blue-500 text-lg transition-all rounded-xl p-2'>
                    Edit profile
                </button>
            </div>
            <div className="mt-4 md:mt-0 flex-col items-center justify-center">
                {sidebarLinks.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className="relative rounded text-gray-200 container h-14 flex items-center justify-center mx-auto transition-all hover:text-slate-400"
                    >
                        {item.icon}
                        <span className="w-full text-center text-2xl">{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
