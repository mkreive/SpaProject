import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
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
                    <Route
                        path="product-detail/:productId"
                        element={<ProductDetail />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
