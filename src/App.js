import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route path="products" element={<Products />} />
                    <Route path="welcome" element={<Welcome />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
