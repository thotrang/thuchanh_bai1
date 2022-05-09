let height=prompt("nhập chiều cao của bạn");
let width=prompt("nhập cân nặng của bạn");

let BMI=width/(height*2);
if (BMI < 18)
    document.write("Underweight");
else if (BMI < 25.0)
    document.write("Normal");
else if (BMI < 30.0)
    document.write("Overweight");
else
    document.write("Obese");