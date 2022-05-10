function topDirection() {
    let anh = document.getElementById('myImage');
    anh.style.top = parseInt(anh.style.top) - 5 + 'px';
}
function bottomDirection() {
    let anh = document.getElementById('myImage');
    anh.style.top = parseInt(anh.style.top) + 5 + 'px';
}
function leftDirection() {
    let anh = document.getElementById('myImage');
    anh.style.left = parseInt(anh.style.left) - 5 + 'px';
}
function rightDirection() {
    let anh = document.getElementById('myImage');
    anh.style.left = parseInt(anh.style.left) + 5 + 'px';
}
function myDirection(event) {
    switch (event.keyCode) {
        case 37:
            leftDirection();
            break;
        case 38:
            topDirection();
            break;
        case 39:
            rightDirection();
            break;
        case 40:
            bottomDirection();
            break;
    }

}
