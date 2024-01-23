import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/Profile" element = {<Profile/>}></Route>
        <Route path="/Sign-in" element = {<SignIn/>}></Route>
        <Route path="/Sign-up" element = {<SignUp/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default  App