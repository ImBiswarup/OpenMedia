// HomePage.js

import React from 'react';
import Sidebar from './Utils/Sidebar';
import PostCard from './Utils/PostCard';

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
