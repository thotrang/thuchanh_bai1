function convert(){
    let number = document.getElementById("number").value;
    let money1 = document.getElementById("tien").value;
    let money2 = document.getElementById("tien2").value;
    let number2;

    if(money1 == 'USD' && money2 == 'VND'){
        number2= number*23000;
    }
    else if(money1 == 'VND' && money2 == 'USD'){
        number2= number/23000;
    }
    else{
        number2=number;
    }
    alert(number2);
}