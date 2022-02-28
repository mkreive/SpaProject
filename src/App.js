import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

// // Lazy loading - uzloadins tik tada kai reikes to komponento
// const Products = React.lazy(() => import("./pages/Products"));

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/welcome" />}
                    />
                    <Route path="welcome/*" element={<Welcome />} />
                    {/* <Suspense fallback={<p className="centered">Loading...</p>}> */}
                    <Route path="products/*" element={<Products />} />
                    {/* </Suspense> */}
                    <Route
                        path="products/:productId"
                        element={<ProductDetail />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
