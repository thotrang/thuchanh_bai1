function nhap(value){
    
    let s = document.getElementById("number").value;
    document.getElementById("number").value = s + value;
}
function tinhToan(){
    let s =document.getElementById('number').value;
    
    document.getElementById("number").value=eval(s);
}
//nhấn nút để giá trị đc đưa lên ô text
// bắt sự kiện cho nút ấn vào>
// gọi giá trị trên text xuống để dùng eval để tính toán
// in ra kết quả trên text
// reset
