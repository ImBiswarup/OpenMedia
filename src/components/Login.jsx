import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState('')

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        email,
        password,
      });
      if (response && response.data) {
        console.log(response.data.user.token);
        const { token } = response.data.user;
        setToken(token);
        Cookies.set('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log(response.data);
        toast.success(response.data.msg);
        window.location.href = '/';
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md p-4 bg-gray-100 dark:bg-gray-800 border rounded-lg shadow-md">
        <form className="space-y-6">
          <h5 className="text-2xl font-semibold text-gray-200">Sign in to our platform</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={login}
          >
            Login to your account
          </button>
          <ToastContainer />
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link to="/sign-up" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;