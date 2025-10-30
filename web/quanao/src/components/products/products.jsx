import React from "react"; 

class Products extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            products_data: [], 
            filterRating: 0, 
        }; 
    } 
 
    // Lấy dữ liệu lần đầu 
    componentDidMount() { 
        this.getProducts(); 
    } 
 
    // Hàm Filter dữ liệu 
    onChangeRatingFilter = (rating) => { 
        this.setState({ filterRating: rating }); 
    }; 
 
    // Hàm request API lấy dữ liệu  
    getProducts = () => { 
        let url = `http://localhost:4000/api/products/products`; 
 
        fetch(url) 
            .then(res => { 
                if (!res.ok) throw Error(res.statusText); 
                return res.json(); 
            }) 
            .then(data => { 
                console.log("products_data=", data.products); 
                this.setState({ products_data: data.products }); 
            }) 
            .catch(error => console.log('Có lỗi nè : \n', error)) 
    }; 
 
    // Hiển thị dữ liệu lên GUI 
    render() { 
        // Xử lý Filter 
        const { products_data, filterRating } = this.state; 
        const filtered = filterRating 
            ? products_data.filter((p) => p.rating >= filterRating) 
            : products_data; 
 
        return ( 
            <div className="container my-4"> 
                <div className="row"> 
                    {/* FILTER */} 
                    <div className="col-md-3"> 
                        <div className="border rounded p-3 bg-light"> 
                            <h5>Filter Options</h5> 
                            <hr /> 
                            <div> 
                                <h6>Popular Filter</h6> 
                                <div className="form-check"> 
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input" 
                                        onChange={() => 
this.onChangeRatingFilter(5)} 
                                    /> 
                                    <label className="form-check-
label">5 star or upper</label> 
                                </div> 
                                <div className="form-check">
                                <input type="checkbox" 
className="form-check-input" /> 
                                    <label className="form-check-
label">Same day delivery</label> 
                                </div> 
                                <div className="form-check"> 
                                    <input type="checkbox" 
className="form-check-input" /> 
                                    <label className="form-check-
label">Super seller</label> 
                                </div> 
                                <div className="form-check"> 
                                    <input type="checkbox" 
className="form-check-input" /> 
                                    <label className="form-check-
label">Sale Product</label> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
 
                    {/* PRODUCT LIST */} 
                    <div className="col-md-9"> 
                        <div className="row"> 
                            {filtered.map((p, idx) => ( 
                                <div className="col-md-4 mb-4" 
key={idx}> 
                                    <div className="card h-100 
shadow-sm border-0"> 
                                        <img 
                                            src={p.images[0]} 
                                            className="card-img-top" 
                                            alt={p.name} 
                                            style={{ 
                                                height: "200px", 
                                                objectFit: "contain", 
                                                background: "#fff", 
                                            }} 
                                        /> 
                                        <div className="card-body"> 
                                            <h6 className="card-title 
text-truncate">{p.name}</h6> 
                                            <p className="text-
success fw-bold"> 
    {p.price.toLocaleString()} ₫ 
                                            </p> 
                                            <p className="text-muted 
mb-1"> 
                                                <i className="bi bi
building"></i> {p.brand} 
                                            </p> 
                                            <p className="text
warning mb-2"> 
                                                <i className="bi bi
star-fill"></i> {p.rating} 
                                            </p> 
                                            <button className="btn 
btn-dark w-100"> 
                                                <i className="bi bi
cart"></i> Add to cart 
                                            </button> 
                                        </div> 
                                    </div> 
                                </div> 
                            ))} 
                        </div> 
                    </div> 
                </div> 
            </div> 
        ); 
    } 
} 
 
export default Products;