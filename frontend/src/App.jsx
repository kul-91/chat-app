import React, { useEffect } from 'react'  // use rafc to generate this boiler plate after downloading es7 react/redux....
import { Routes, Route, Navigate } from "react-router-dom"
import { Loader } from "lucide-react";

import Nevbar from './components/Nevbar';
import HomePage from './pages/HomePage';
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import Setting from "./pages/Setting"
import Profile from "./pages/Profile"
import { useAuthStore } from './store/useAuthStore';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore';

const App = () => {
  const { authUser, checkAuth, isChecking, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  useEffect(() => {
    console.log("Applying theme:", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (isChecking && authUser) return (

    <div className='flex items-center justify-centre h-screen'>
      <Loader className='size-10 animate-spin' />
    </div>
  )

  return (
    <div data-theme={theme}>
      <Nevbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/profile' element={authUser ? <Profile /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />
    </div>

  );
}

export default App;