import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManageProducts from './features/manage-products/pages/ManageProducts';
import ManageOrders from './features/manage-orders/pages/ManageOrders';
import ManageBlogs from './features/manage-blogs/pages/ManageBlogs';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path='/manage-products' element ={<ManageProducts/>}/>
        <Route path='/manage-orders' element ={<ManageOrders/>}/>
        <Route path='/manage-blogs' element ={<ManageBlogs/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
