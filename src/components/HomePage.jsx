import React from 'react';
import PostCard from './Utils/PostCard';
import Sidebar from './Utils/Sidebar';
import Navbar from './Utils/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex overflow-scroll">
        <Sidebar />
        <PostCard />
      </div>
    </>
  );
};

export default HomePage;
