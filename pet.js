do {
   var name = prompt('Ваше имя', '');
   var age = prompt('Ваш возраст');
} while (name === null || age === null);

var pet = confirm('Есть ли у вас питомец?');
var petName;

if (pet == true) {
    petName = 'Моего питомца зовут ' + prompt('Имя вашего питомца', '') + '.';
}

else if (pet == false) {
    petName = 'Питомцев нет.';
}

if (name == 'null' || name == '') {
    name = 'Вася';
}

else if (age == 'null' || age == '') {
    age = '30';
}

alert('Моё имя ' + name + '.\n' + 'Мне ' + String(age) + ' лет (года).' + '\n' + petName);