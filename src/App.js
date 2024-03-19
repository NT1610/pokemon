import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import NextPage from './Components/Home/NextPage';
import SearchPokemon from './Components/Search/SearchPokemon';
import './App.css';

const App = () => {
  return (

    <BrowserRouter >
      <div className="grid grid-cols-5 min-h-screen flex flex-col">
        <div className="col-span-1">
          <Nav />
        </div>
        <div className="col-span-4 bg-cyan-800 ">
          <Routes>
            <Route path="/" element={<NextPage />} />
            <Route path="/search" element={<SearchPokemon />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
};

export default App;
