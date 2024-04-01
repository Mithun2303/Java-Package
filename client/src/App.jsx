import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './LandingPage';
import { Login } from './login';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App 
