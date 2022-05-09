 let anh = null;
 anh= document.getElementById('myImage');

function main(){
    anh=document.getElementById('myImage');
    anh.style.position = 'relative';
    anh.style.left = '0px';
}
function movieRight(){
    anh.style.left = parseInt(anh.style.left) + 10 +'px';
}
window.onload = main;
