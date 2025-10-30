import React from "react"; 
import { useParams } from "react-router-dom";

function DetailF(props) {
    const { pid } = useParams(); // lấy id sản phẩm từ URL
    return <Detail {...props} id={pid} />;
  }
  
class Detail extends React.Component { 

  
        constructor(props) { 
            super(props); 
            this.state = { 
                // Biến Data chi tiết sản phẩm 
                product_data: {} 
                , 
                // Biến lưu số lượng sản phẩm 
                quantity: 1 
                , 
                // Biến trạng thái Tab 
                activeTab: "description" 
                , 
                // Biến chọn ảnh 
                selectedImage: null, 
            }; 
        } 
    
        // Lấy dữ liệu lần đầu 
        componentDidMount() { 
            const { id } = this.props; 
            this.getDeatilProduct(id); 
        } 

        componentDidUpdate(prevProps) {
            // ✅ Nếu id thay đổi, load lại sản phẩm
            if (prevProps.id !== this.props.id) {
                this.getDetailProduct(this.props.id);
            }
        }

        onClickSelectedId = (id) => { 
            this.props.onSelectProduct(id); 
            }; 
        
        // Nút mua sp 
        onClickBuyNow = () => { 
            alert(`Đặt mua ${this.state.quantity} sản phẩm thành công!`); 
        }; 
    
        // Nút thêm sp vào gio hàng 
        onClickAddToCart = () => { 
            alert(`Đã thêm ${this.state.quantity} sản phẩm vào giỏ hàng!`); 
        }; 
    
        // Thay đổi sl 
        onChangeQuantity = (e) => { 
            const value = Number(e.target.value); 
            if (value > 0) { 
                this.setState({ quantity: value }); 
            } 
        }; 
    
        // Thay đổi thẻ Tab 
        onChangeTabChange = (tab) => { 
            this.setState({ activeTab: tab }); 
        }; 
    
        // Click chọn ảnh khác 
        onChangeImageSelect = (img) => { 
            this.setState({ selectedImage: img }); 
        }; 
    
        // Hàm request API lấy dữ liệu  
        getDeatilProduct = (id) => { 
            let url = `http://localhost:4000/api/products/products/${id}`; 
    
            fetch(url) 
                .then(res => { 
                    if (!res.ok) throw Error(res.statusText); 
                    return res.json(); 
                }) 
                .then(data => { 
                    // Xét dữ liệu từ API trả về vào  biến product_data 
                    this.setState({ 
                        product_data: data.products, 
                        // Hiển thị ảnh chính đầu tiên 
                        selectedImage: data.products.images[0], 
                        // Hiển thị số lượng đầu tiên 
                        quantity: data.products.quantity, 
                    }); 
    
                    console.log('API: \n', data.products) 
                }) 
                .catch(error => console.log('Có lỗi nè : \n', error)) 
        }; 
    
    // Hiển thị dữ liệu lên GUI 
    render() { 
        return ( 
 
            <div className="container my-4"> 
                <h3 className="fw-bold mb-4">{this.state.product_data.name}</h3> 
                <div className="row"> 
                    {/* IMAGE sản phẩm */} 
                    <div className="col-md-6"> 
                        <div className="text-center"> 
                            <img 
                                src={this.state.selectedImage} 
                                alt="Product" 
                                className="img-fluid rounded mb-3" 
                                style={{ maxHeight: "240px", objectFit: "contain" 
}} 
                            /> 
                        </div> 
 
                        <div className="d-flex justify-content-center gap-2"> 
                            {this.state.product_data.images && 
                                this.state.product_data.images.filter(img => img && img.trim() !== "") 
                                    .map((img, idx) => ( 
                                        <img 
                                            key={idx} 
                                            src={img} 
                                            alt={`thumb-${idx}`} 
                                            className={`img-thumbnail ${this.state.selectedImage === img ? "border-primary" : "" 
                                                }`} 
                                            style={{ 
                                                width: "80px", 
                                                height: "80px", 
                                                cursor: "pointer", 
                                                objectFit: "contain", 
                                            }} 
                                            onClick={() => this.onChangeImageSelect(img)} 
                                        /> 
                                    ))} 
                        </div> 
                    </div> 
 
                    {/* INFO sản phẩm */} 
                    <div className="col-md-6"> 
                        <div className="mb-3"> 
                            <span className="badge bg-warning text-dark me-2"> 
                                <i className="bi bi-star-fill"></i> {this.state.product_data.rating} 
                            </span>
                            <span>{this.state.product_data.description}</span> 
                        </div> 
 
                        <div className="d-flex align-items-center mb-3"> 
                            <label className="me-2 fw-semibold">Quantity:</label> 
                            <input 
                                type="number" 
                                className="form-control" 
                                value={this.state.quantity} 
                                min="1" 
                                style={{ width: "80px" }} 
                                onChange={this.onChangeQuantity} 
                            /> 
                        </div> 
 
                        <h4 className="fw-bold text-success mb-4"> 
                            {this.state.product_data.price 
                                ? this.state.product_data.price.toLocaleString("vi-VN") 
                                : "0₫"} 
                        </h4> 
 
                        <div className="d-flex gap-2"> 
                            <button 
                                className="btn btn-outline-primary" 
                                onClick={this.onClickBuyNow} 
                            > 
                                Buy now 
                            </button> 
                            <button 
                                className="btn btn-primary" 
                                onClick={this.onClickAddToCart} 
                            > 
                                <i className="bi bi-cart-fill me-1"></i> Add to cart 
                            </button> 
                        </div> 
                    </div> 
                </div> 
 
                {/* TAB */} 
                <ul className="nav nav-tabs mt-5"> 
                    <li className="nav-item"> 
                        <button  className={`nav-link ${this.state.activeTab === "description" ? "active" : "" }`}
                                onClick={() => this.onChangeTabChange("description")} 
                        > 
                        Descriptions 
                        </button> 
                    </li> 
                    <li className="nav-item"> 
                        <button 
                            className={`nav-link ${this.state.activeTab === "review" ? "active" : "" }`} 
                            onClick={() => this.onChangeTabChange("review")} 
                        > 
                            Review (0) 
                        </button> 
                    </li> 
                    <li className="nav-item"> 
                        <button 
                            className={`nav-link ${this.state.activeTab === "related" ? "active" : "" }`} 
                            onClick={() => this.onChangeTabChange("related")} 
                        > 
                            Related Product 
                        </button> 
                    </li> 
                </ul> 
 
                <div className="border border-top-0 p-3"> 
                    {this.state.activeTab === "description" && ( 
                        <div> 
                            <h5>Overview</h5> 
                            <p>{this.state.product_data.description}</p> 
                            <p> 
                                <strong>Brand: </strong> 
                            {this.state.product_data.brand} 
                            </p> 
                        </div> 
                    )} 
                    {this.state.activeTab === "review" && <p>Chưa có đánh giá nào.</p>} 
                    {/* ✅ Hiển thị sản phẩm liên quan */}
                    {this.state.activeTab === "related" && (
                        <div className="row">
                            {this.state.relatedProducts.map((item) => (
                                <div key={item.id} className="col-md-3 mb-3">
                                    <div
                                        className="card h-100"
                                        onClick={() => this.onClickSelectedId(item.id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="card-img-top"
                                            style={{
                                                height: "120px",
                                                objectFit: "contain",
                                            }}
                                        />
                                        <div className="card-body text-center">
                                            <h6>{item.name}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        ); 
       
    } 
} 
export default DetailF;