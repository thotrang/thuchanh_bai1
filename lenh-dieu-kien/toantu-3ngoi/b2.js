

// Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.

// Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings

// Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login

// Còn lại hiển thị chuỗi rỗng


let login = prompt("Enter:");
let message = (login=='Employee')?'Hello':
            (login=='Director')?'Greetings':
            (login=='')?'No login':'';