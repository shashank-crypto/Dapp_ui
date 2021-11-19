import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {Home} from "./components/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      
      <Router>
      
        <Routes>
          
          <Route path="/" element={<div><Navbar/><Home/></div>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
