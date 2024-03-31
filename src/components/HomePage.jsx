import React from 'react';
import PostCard from './Utils/PostCard';
import Sidebar from './Utils/Sidebar';

const HomePage = () => {

  return (
    <>
      <div className="flex overflow-scroll">
        <Sidebar />
        <PostCard />
      </div>
    </>
  );
};

export default HomePage;
