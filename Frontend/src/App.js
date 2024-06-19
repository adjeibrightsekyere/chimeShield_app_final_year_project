import React from 'react';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
//import axios from "axios";
import './App.css';

import HomePage from './Pages/homePage';
import SignIn from './Pages/signIn';
import SignUp from './Pages/signUp';
import Features from './Pages/features';
import Feed from './Pages/feed';
import History from './Pages/history';

function App() {
  

 


  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='features' element={<Features />} />
        <Route path='history' element={<History />} />
        <Route path='feed' element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
