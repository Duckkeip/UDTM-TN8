import { useParams } from "react-router-dom";
const SachTrongLoai = () => {    
    let { id,pagenum = 1 } = useParams();
    return   <div> <h1>Đây là trang liệt kê sách trong 1 loại {id}{pagenum}</h1></div>    
};
export default SachTrongLoai;
