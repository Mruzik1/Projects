var num1 = 1;
var num2 = 1;

for(var i = 0; i <= 5; i++) {             // 11 разделено на два из-за двух переменных
    num1 = num1 + num2;
    num2 = num2 + num1;
    if(i == 4) {
        console.log('11 чило Фибоначчи = ' + num1);
    }
}