import React from 'react';
import PostCard from './Utils/PostCard';
import Sidebar from './Utils/Sidebar';

const HomePage = () => {
  return (
    <>
      <div className="flex overflow-scroll shadow-lg no-scrollbar h-screen">
        <Sidebar />
        <PostCard />
      </div>
    </>
  );
};

export default HomePage;
