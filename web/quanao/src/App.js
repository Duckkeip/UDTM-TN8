import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route ,Navigate  } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from './pages/home/homepage';
import Products from './components/products/products';
import Category from './components/categories/categories';
import ProtectedRoute from './components/protected';
import Detail from './components/products/detail';
//import Download from './pages/Download';
//import Sach from './pages/Sach';
//import SachTrongLoai from './pages/SachTrongLoai';
//import TrangChu from './pages/TrangChu';

function App() {
  const [selectedId, setSelectedId] = useState(null); 

  return (
    <BrowserRouter>

      <Routes>{/* User */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/:id" element={<Homepage />} />
        {<Route path="*" element={<Navigate to="/login" replace />} />}
        <Route path="/home/:id/sanpham" element={
          <ProtectedRoute>
            <Products onSelectProduct={setSelectedId}/>
            </ProtectedRoute>} />
        <Route path="/home/:id/danhmuc" element={
          <ProtectedRoute>
            <Category/>
            </ProtectedRoute>} />
        <Route path ="/home/:id/sanpham/:pid" element ={
          <ProtectedRoute>
            <Detail id ={selectedId}/>
          </ProtectedRoute>}/>
      </Routes>
 
    </BrowserRouter>
);


}


export default App;
