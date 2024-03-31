import React, { createContext, useState } from 'react';
import axios from 'axios';



export const AppContext = createContext();

export const AppContext_Provider = ({ children }) => {
    const [value, setValue] = useState('Initial value');
    const [text, setText] = useState("");
    const [posts, setPosts] = useState([]);


    const createPostHandler = async () => {
        try {
            const response = await axios.post("http://localhost:5000/post/create-post", {
                text
            });
            // if (response.data.posts.text.length === 0);
            // alert(err.response.data.msg);
            setText('')
        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    const displayPosts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/post");
            console.log(response.data.posts);
            setPosts(response.data.posts);
        } catch (err) {
            alert(err.response.data.msg);
        }
    }
    const displayUser = async (userID) => {
        try {
            const response = await axios.get(`http://localhost:5000/user/${userID}`);
            console.log(response.data.user);
            // Set the user data in state or perform any other necessary actions
        } catch (err) {
            alert(err.response.data.error);
        }
    }


    return (
        <AppContext.Provider value={{ value, setValue, createPostHandler, displayPosts, displayUser, text, setText, posts, setPosts, }}>
            {children}
        </AppContext.Provider>
    );
};

