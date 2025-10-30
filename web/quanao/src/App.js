
import './App.css';
import { BrowserRouter, Routes, Route   } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from './pages/home/homepage';
import Products from './components/products/products';
import Category from './components/categories/categories';
import protectedRoute from './components/protected';
//import Download from './pages/Download';
//import Sach from './pages/Sach';
//import SachTrongLoai from './pages/SachTrongLoai';
//import TrangChu from './pages/TrangChu';

function App() {
  
  return (
    <BrowserRouter>

      <Routes>{/* User */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/:id" element={<Homepage />} />
        {/*<Route path="*" element={<Navigate to="/login" replace />} />*/}

        <Route path="/home/:id/sanpham" element={<protectedRoute><Products/></protectedRoute>} />
        <Route path="/home/:id/danhmuc" element={<protectedRoute><Category/></protectedRoute>} />
      </Routes>
     
    </BrowserRouter>
);


}


export default App;
