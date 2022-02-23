import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";

function App() {
    return (
        <Routes>
            <Route path="products" element={<Products />} />
            <Route path="welcome" element={<Welcome />} />
        </Routes>
    );
}

export default App;
