function topDirection(){
    let anh=document.getElementById(myImage);
    anh.style.top=parseInt(anh.style.top) + 5+ 'px';
}
function bottomDirection(){
    let anh=document.getElementById(myImage);
    anh.style.top=parseInt(anh.style.top) - 5+ 'px';
}
function leftDirection(){
    let anh=document.getElementById(myImage);
    anh.style.left=parseInt(anh.style.left) + 5+ 'px';
}
function rightDirection(){
    let anh=document.getElementById(myImage);
    anh.style.left=parseInt(anh.style.left) - 5+ 'px';
}
function myDirection(huong){
    switch(huong.keyCode){
        case 37:
            leftDirection();
            break;
        case 38:
            rightDirection();
            break;
        case 39:
            topDirection();
            break;
        case 40:
            bottomDirection();
            break;
    }
    
}
myDirection();
// function moveSelection(evt) {
//     switch (evt.keyCode) {
//         case 37:
//             leftArrowPressed();
//             break;
//         case 39:
//             rightArrowPressed();
//             break;
//         case 38:
//             upArrowPressed();
//             break;
//         case 40:
//             downArrowPressed();
//             break;
//     }
// }
// function docReady() {
//     window.addEventListener('keydown', moveSelection);
// }