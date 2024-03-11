import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage';
import FriendsPage from './components/FriendsPage';
import ChatPage from './components/ChatPage';
import Login from "./components/Login";
import Signup from "./components/Signup";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='text-gray-400 bg-gray-900'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/videos' element={<VideoPage />} />
        <Route exact path='/friends' element={<FriendsPage />} />
        <Route exact path='/chats' element={<ChatPage />} />
        <Route exact path='/log-in' element={<Login />} />
        <Route exact path='/sign-up' element={<Signup />} />
      </Routes >
    </div>
  )
}

export default App
