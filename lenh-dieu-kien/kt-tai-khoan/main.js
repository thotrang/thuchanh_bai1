let nhapTen= prompt("Nhập tên");

if(nhapTen=="Admin"){
    let nhapPassWord= prompt("Nhập mật khẩu");
    if(nhapPassWord=="TheMaster")
        alert("Welcome");
    else
        alert("canceld");
}

else if(nhapTen==null)
    alert("canceld");
else
    alert("I don’t know you");