import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {Home} from "./components/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";

function App() {
  return (
    <div className="App">
      
      <Router>
      
        <Routes>
          
          <Route path="/" element={<div><Navbar loggedIn="true"/><Home loggedIn="true"/></div>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
