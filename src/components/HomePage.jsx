import React, { useEffect, useState } from 'react';
import PostCard from './Utils/PostCard';
import Sidebar from './Utils/Sidebar';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
