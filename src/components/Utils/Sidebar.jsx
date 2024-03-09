import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-[25%] sticky'>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full" alt="hero" src="https://dummyimage.com/720x600" />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">UserName</h1>
                        <p className="leading-relaxed mb-8">Profile desc.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Edit Profile</button>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Log Out</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sidebar