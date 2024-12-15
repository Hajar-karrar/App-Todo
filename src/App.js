import React, { useState } from "react";
import './App.css';
import HeroSection from "./HeroSection";
import TodoApp from "./ToDoo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/todo" element={<TodoApp />} />
         

        </Routes>
      </Router>
     

    </div>
  );
}

export default App;
