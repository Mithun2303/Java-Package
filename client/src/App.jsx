import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './LandingPage';
import { Login } from './login';
import { Movie } from './Movie';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/login' Component={Login}/>
        <Route path='/:movie_name' Component={Movie}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App 
