import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthComp from './components/AuthComp';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AddOffer from './pages/addOffer/AddOffer';
import AllBrands from './pages/allBrands/AllBrands';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <AuthComp>
  <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addOffer" element={<AddOffer />} />
          <Route path="/brands" element={<AllBrands />} />

        </Routes>
        
      </div>
    </Router>
  </AuthComp>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
