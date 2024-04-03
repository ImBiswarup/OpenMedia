import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';



export const AppContext = createContext();

export const AppContext_Provider = ({ children }) => {

    const { postID } = useParams();
    const baseURL = 'http://localhost:5000'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [text, setText] = useState("");
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState('');

    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = Cookies.get('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);


    const authAxios = axios.create({
        baseURL: baseURL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });


    const login = async () => {
        try {
            const response = await authAxios.post('http://localhost:5000/user/login', {
                email,
                password,
            });
            if (response && response.data && response.data.token) {
                const { token } = response.data;
                setToken(token);
                Cookies.set('token', token); // Set token in cookies
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                console.log(response.data);
                alert(response.data.msg);
                window.location.href = '/';
            } else {
                console.error('Invalid response format:', response);
                // Handle invalid response format
            }
        } catch (error) {
            // Handle error
            // console.error('Error during login:', error.message);
            setErrorMessage(error.response.data.msg);
        }
    };


    const logout = () => {
        setToken('');
        Cookies.remove('token'); 
    };

    const createPostHandler = async () => {
        try {
            const response = await authAxios.post(`${baseURL}/post/create-post`, {
                text
            });
            console.log(response.data);
            setText('')
        } catch (err) {
            console.log(err.response.data.msg);
            // alert(err.response.data.msg);
        }
    }

    const displayPosts = async () => {
        try {
            const response = await authAxios.get("http://localhost:5000/post");
            console.log(response.data.posts);
            setPosts(response.data.posts);
        } catch (err) {
            console.log(err.response.data.msg);
            // alert(err.response.data.msg);
        }
    }
    const displayUser = async (userID) => {
        try {
            const response = await authAxios.get(`http://localhost:5000/user/${userID}`);
            console.log(response.data.user);
        } catch (err) {
            alert(err.response.data.error);
        }
    }

    const fetchPost = async (postID) => {
        try {
            const response = await authAxios.get(`http://localhost:5000/post/${postID}`);
            setPost(response.data.post);
            console.log(post)
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <AppContext.Provider value={{
            createPostHandler, displayPosts, displayUser,
            text, setText,
            posts, setPosts,
            fetchPost, postID,
            post, setPost,
            login, logout,
            email, setEmail,
            password, setPassword,
            errorMessage, setErrorMessage,
        }}>
            {children}
        </AppContext.Provider>
    );
};

