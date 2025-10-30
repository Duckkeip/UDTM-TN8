import React from "react";
import { Navigate, useParams } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { id } = useParams();

  // Nếu chưa đăng nhập
  if (!token || !user.id) {
    alert("Bạn cần đăng nhập trước!");
    return <Navigate to="/login" replace />;
  }

  // Nếu URL không khớp user.id (chống truy cập sai user)
  if (id && id !== user.id) {
    alert("Bạn không có quyền truy cập trang này!");
    return <Navigate to={`/home/${user.id}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
