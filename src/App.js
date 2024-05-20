import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import New from "./New";
import Home from "./Home";
import About from "./About";
import Log from "./Log";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
