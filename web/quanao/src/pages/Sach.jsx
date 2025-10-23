import { useParams } from "react-router-dom";
const Sach = () => {    
    let { id } = useParams();
    return <div> <h1>Đây là trang sách có id là: {id}</h1></div>    
};
export default Sach;
