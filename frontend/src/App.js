import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './bootstrap.min.css'
import {Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
      <Container>
      <h1>ProShop Ecommerce PlateForm</h1>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/product/:id' component={ProductScreen}  />
      </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
