import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './bootstrap.min.css'
import {Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/cartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/profileScreen";
import ShippingScreen from "./screens/shippingScreen";
import PaymentScreen from "./screens/paymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/orderScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
      <Container>
      <h1>ProShop Ecommerce PlateForm</h1>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/seach/:keyword' component={HomeScreen}  />
      <Route path='/product/:id' component={ProductScreen}  />
      <Route path='/login' component={LoginScreen}  />
      <Route path='/register' component={RegisterScreen}  />
      <Route path='/profile' component={ProfileScreen}  />
      <Route path='/shipping' component={ShippingScreen}  />
      <Route path='/payment' component={PaymentScreen}  />
      <Route path='/placeorder' component={PlaceOrderScreen}  />
      <Route path='/order/:id' component={OrderScreen}  />
      <Route path='/cart/:id?' component={CartScreen}  />
      </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
