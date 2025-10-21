# ỨNG DỤNG THƯƠNG MẠI ĐIỆN TỬ WEB BÁN QUẦN ÁO 
## Mở 2 cmds lên cd đến file server và web (thư mục clone rep của máy bạn )
---

### ở server chạy

```js
D:\git\UDTM-TN8\server>npm run //nếu chạy 1 lần 
D:\git\UDTM-TN8\server>npm rs //nếu sửa code thì server tự động reset 
// nếu muốn biết script như nào vào package.json của mỗi thư mục xem
```

### ở web chạy
```js
D:\git\UDTM-TN8\web>cd quanao
D:\git\UDTM-TN8\web\quanao>npm start

```

### các chức năng khác 


Người dùng đi từ frontend là react ---> gửi request qua phía server ---> routes/ có chức năng xử lý các phương thức truyền POST PUT GET PATCH ...và lưu vào database  


-phân ra như này 
#### Server
  +đi từ Models server ra hết  
  +routes học thầy rồi biết nó làm gì (các chức năng thêm vào )
  +các folder cùng cấp với routes có thể thêm hoặc không tuỳ vd config/db.js là để kết nối database
  +server.js chạy server
#### Web
  + mục src/pages là các trang người dùng sử dụng ví dụ homepage , timkiem , giohang
  + các file .jsx nên chỉ cần 1 css thôi vì classname đặt giống nhau hết là được (1 vài trường hợp sẽ phải đổi classname nếu muốn chức năng đó khác biết - thêm vào css)
  ```
  //trong css của pages 
  .btn-logo //(nút của logo)
  {
    margin: x x  x;
    padding: x x x;
    color : red // hay linear-gradient tuỳ 
  }
  
  ```
  (anh em làm các chức năng khác chỉ cần thêm cùng cấp với homepage)

  


