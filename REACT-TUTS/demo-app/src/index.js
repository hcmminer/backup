import React from "react";
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from './components/TopMenu';
import Products from './pages/Products';

import { CartProvider } from "./contexts/Cart";

const Index = () => <h2>Home</h2>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className='App'>
          <TopMenu />
          <Switch>
            <Route path="/products/" components={Products}>
              <Products />
            </Route>
            <Route path="/" exact component={Index}>
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
