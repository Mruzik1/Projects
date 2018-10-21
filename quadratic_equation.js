var a = prompt('Введите кооф. 1', '');
var b = prompt('Введите кооф. 2', '');
var c = prompt('Введите кооф. 3', '');
var D = b*b - 4*a*c;
var x1 = (-b + Math.sqrt(D))/(2*a);
var x2 = (-b - Math.sqrt(D))/(2*a);

if (D == 0) {
    alert('Корень кв ур = ' + x1);
}

else if (D < 0 || a == 0) {
    alert('Вы что-то ввели неверно! Проверьте написанное.');
}
else if (D > 0) {
    alert('Корни кв ур = ' + String(x1) + ' и ' + String(x2));
}

location.reload();