function clickYes() {
    alert("you right!");
}

function movie() {
    let over = document.getElementById('no');
    over.style.position = 'relative';

    let width = window.innerWidth;
    let height = window.innerHeight;

    over.style.left= Math.random() * width + 'px'
    over.style.top = Math.random() * height + 'px'
}

