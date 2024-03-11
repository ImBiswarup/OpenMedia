import React, { useEffect, useState } from 'react';
import { FaHome, FaUserPlus, FaVideo } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { AiFillMessage } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState("")
  const location = useLocation();
  const [isactive, setIsactive] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const searchLoader = (e) => {
    setSearch(e.target.value);
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const iconStyles = { fontSize: 40, transition: 'color 0.3s' };

  const isActive = (path) => (
    location.pathname === path ? 'text-white scale-125 font-semibold' : 'text-gray-400'
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 78 ? setIsactive(true) : setIsactive(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
      });
    };
  }, []);

  return (
    <header className={`bg-gray-900 text-white body-font sticky w-full transition-all z-10`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className='text-2xl font-bold'>OpenMedia</span>
        </Link>
        <div className="relative flex items-center ml-10 w-[16.5rem] md:mb-0 mb-5 mt-3">
          <input
            type="text"
            value={search}
            onChange={searchLoader}
            className="bg-white text-black border-0 px-3 py-2 rounded-full focus:outline-none w-full"
            placeholder="Search"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-900 cursor-pointer">
            <FiSearch />
          </span>
        </div>
        <nav className="md:ml-auto md:mr-auto mx-auto flex flex-wrap items-center text-lg justify-evenly cursor-pointer gap-x-8">
          <Link
            to='/'
            className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/')}`}
            onClick={() => handleTabClick('home')}
          >
            <FaHome size={35} style={{ ...iconStyles, color: activeTab === 'home' ? 'white' : '' }} />
          </Link>
          <Link
            to='/videos'
            className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/videos')}`}
            onClick={() => handleTabClick('video')}
          >
            <FaVideo size={35} style={{ ...iconStyles, color: activeTab === 'video' ? 'white' : '' }} />
          </Link>
          <Link
            to='/friends'
            className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/friends')}`}
            onClick={() => handleTabClick('people')}
          >
            <IoPeople size={35} style={{ ...iconStyles, color: activeTab === 'people' ? 'white' : '' }} />
          </Link>
          <Link
            to='/chats'
            className={`mr-5 hover:text-white cursor-pointer hover:scale-125 transition-all ${isActive('/chats')}`}
            onClick={() => handleTabClick('message')}
          >
            <AiFillMessage size={35} />
          </Link>
        </nav>
        <Link
          to="/log-in"
          className={`mr-5 hover:text-white hover:border-blue-600 mt-3 mb-2 md:mt-0 md:mb-0 cursor-pointer hover:scale-125 transition-all text-center ${isActive('/log-in')}`}
          onClick={() => handleTabClick('log-in')}
        >
          <FaUserPlus size={35} style={{ ...iconStyles, color: activeTab === 'log-in' ? 'white' : '' }} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
