import { Routes, Route } from 'react-router';
import Header from './views/layouts/header.jsx';
import Login from './views/auth/login.jsx';
import Home from './views/home/home.jsx';
import Register from './views/auth/register.jsx';
import Profile from './views/profile/profile.jsx';
import './App.css'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/profile"} element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
