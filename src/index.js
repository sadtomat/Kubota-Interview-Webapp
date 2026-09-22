import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Store from './pages/Store.js';
import Cart from './pages/Cart.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Profile from './pages/Profile.js';
import Item from './pages/Item.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/store' element={<Store />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/item" element={<Item />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
