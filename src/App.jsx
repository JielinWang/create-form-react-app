import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Success from "./components/Success";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
