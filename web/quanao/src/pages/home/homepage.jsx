import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';


function Homepage() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
  
const goToCategory = () => {
    if (user && user.id) {
        setTimeout(() =>   {
        navigate(`/home/${user.id}/danhmuc`);
        }, 500);
      } else {
        alert("Bạn cần đăng nhập trước!");
        navigate("/login");
      }
    }
const goToProduct = () => {
    if (user && user.id) {
        setTimeout(() =>   {
        navigate(`/home/${user.id}/sanpham`);
        }, 500);
      } else {
        alert("Bạn cần đăng nhập trước!");
        navigate("/login");
      }
}

    return (
        <div>
            {/* nhập địa chỉ dựa trong file App.js */}
            {/* Homepage ae làm tiếp nhé  */}
            <h1>Homepage</h1>
            <h2>Nhập localhost:4001/login</h2>
            <h2>Nhập localhost:4001/register</h2>
            <button class="btn" onClick ={goToCategory}> Đến trang danh mục    </button>
            <button class="btn" onClick ={goToProduct}> Đến trang sản phẩm  </button>
        </div>
    );
    
}

export default Homepage;