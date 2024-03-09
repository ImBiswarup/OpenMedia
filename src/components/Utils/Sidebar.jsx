import React from 'react'
import userImage from '../../images/userImage.jpg';

const Sidebar = () => {
    return (
        <div className='flex-col flex text-white w-[30%] mx-auto text-center rounded sticky ml-1'>
        <div className="bg-red-500">
            <div className="image flex items-center justify-center p-4">
                <img className='rounded-full h-28 w-28 ' src={userImage} alt="" />
            </div>
            <div className="desc mb-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, neque.
            </div>
        </div>
        <div className="bg-green-500">Lorem ipsum dolor sit amet.</div>
        </div>
    );
};

export default Sidebar