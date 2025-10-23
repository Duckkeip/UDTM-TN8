import React from "react";

class FormSearchPic extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
    this.tukhoa = React.createRef();
  }

  timhinh = (e) => {
    e.preventDefault(); // ✅ Ngăn reload form
    let tk = this.tukhoa.current.value;
    let page = 1;
    let limit = 20;
    let key = "P2eJf9Dw9f9_zSPRdqqqVZrpRI_dLyQjxzpp-7X7NQ0"; // 🔑 Thay bằng Access Key của bạn trên Unsplash Developer
    let url = `https://api.unsplash.com/search/photos?query=${tk}&page=${page}&per_page=${limit}&client_id=${key}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        console.log("results=", data.results);
        this.setState({ pictures: data.results });
      })
      .catch((error) => console.log("Có lỗi nè:\n", error));
  };

  render() {
    return (
      <div className="text-center">
        <form
          className="p-3 w-50 border border-primary m-auto"
          onSubmit={this.timhinh}
        >
          <p>
            <input
              ref={this.tukhoa}
              className="form-control"
              placeholder="Nhập từ khóa tìm kiếm hình ảnh..."
            />
          </p>
          <button type="submit" className="btn btn-primary">
            Tìm hình
          </button>
        </form>

        <div id="kqSeachPic" className="d-flex flex-wrap mt-3">
          {this.state.pictures.map((h, index) => (
            <div key={index} className="p-2" style={{ width: "25%" }}>
              <img
                src={h.urls.small}
                alt={h.alt_description}
                className="w-100 rounded shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FormSearchPic;
