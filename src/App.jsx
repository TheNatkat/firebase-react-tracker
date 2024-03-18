import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import Login from './assets/pages/Login';
import Home from './assets/pages/Home';
import SignUp from './assets/pages/SignUp';
import './App.css'
import Profile from './assets/pages/Profile';

const App = () => {
  const [page, setPage] = useState('login');

  return (
    <div className="app">
      {page === 'login' ? <Login setPage={setPage} /> 
      : page === 'signup' ?  <SignUp setPage={setPage} /> 
      : page === 'home' ?  <Home setPage={setPage} /> 
      : <Profile setPage={setPage}/>}
    </div>
  );
};

export default App;
