let input_vatli=prompt("nhập điểm vật lí ");
let input_toan=prompt("nhập điểm toán ");
let input_hoa=prompt("nhập điểm hóa ");

let vatli=parseInt(input_vatli);
let toan=parseInt(input_toan);
let hoa=parseInt(input_hoa);

let sum=(vatli+toan+hoa);
let tb=sum/3;

document.write("điểm trung bình của 3 môn "+tb+'<br/>');
document.write("tổng điểm 3 môn "+ sum+ "<br/>");