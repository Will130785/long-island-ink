import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {useSelector} from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import FAQScreen from "./screens/FAQScreen";
import ShopScreen from "./screens/ShopScreen";
import OrderScreen from "./screens/OrderScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import './App.css';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from "./screens/RegisterScreen";

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  console.log(userInfo);

  return (
    <BrowserRouter>
    <div className="site-container">
    <nav>
        <div className="logo">
            <h4>Long Island Ink</h4>
        </div>
        <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/orders">My Orders</Link>
            </li>
            <li>
            {
                userInfo ? (<Link to="/profile">{userInfo.data.name}</Link>) :
                (<Link to="/signin">Log In</Link>)
              }
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
        </ul>

        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>

    <main className="main">
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/shop/product/:id" component={ProductScreen} />
      <Route path="/" exact={true} component={HomeScreen} />
      <Route path="/faq" exact={true} component={FAQScreen} />
      <Route path="/shop" exact={true} component={ShopScreen} />
      <Route path="/orders" exact={true} component={OrderScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
    </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
