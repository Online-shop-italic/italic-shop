import React from 'react';

import './App.css';
import Header from './components/Header/Header.jsx';
import { Route,Routes} from 'react-router-dom'
import Women from './pages/Women/Women.jsx'
import Men from './pages/Men/Men.jsx'
import Home from './pages/Home/Home.jsx'
import Jewelry from './pages/Jewelry/Jewelry.jsx'
import Featured from './pages/Featured/Featured.jsx'
import SignIn from './pages/SignIn/Sign.jsx';


function App() {
  return (
    <div className="App">

    <Header/>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Women  />} />
        <Route path='/men' element={<Men />} />
        <Route path='/jewelry' element={<Jewelry />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/sign-in' element={<SignIn />} />
    </Routes>
    </div>
  );
}

export default App;
