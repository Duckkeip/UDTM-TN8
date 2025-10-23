
import './App.css';
//import { BrowserRouter, Routes, Route ,Navigate,NavLink } from "react-router-dom";
//import Login from "./pages/Login";
//import Register from "./pages/Register";
//import Homepage from './pages/home/homepage';
import FormSearchPic from './pages/FormSearchPic';
//import Download from './pages/Download';
//import Sach from './pages/Sach';
//import SachTrongLoai from './pages/SachTrongLoai';
//import TrangChu from './pages/TrangChu';

function App() {
  
  return (
    <div className="container mt-4">
    <h2 className="text-center text-primary mb-3">
      🔍 Form Tìm Hình Ảnh (Unsplash)
    </h2>
    <FormSearchPic />
  </div>
);


}


export default App;
