
function kiemtra(){
    let year=document.getElementById("year").value;
    if(year%4==0){
        if(year%100==0 && year%400!=0)
            alert("năm "+ year +" không phải năm nhuận");
        else
            alert("năm "+ year +" là năm nhuận");
    }
    else
        alert("năm "+ year +" không phải năm nhuận");
}
