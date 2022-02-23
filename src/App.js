import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/welcome">Welcome</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/welcome">
                        <Welcome />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
