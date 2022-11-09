// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 55;
if (time >= 0 && time <= 15) {
    console.log('Перша чверть')
} else if (time >= 16 && time <= 30) {
    console.log('Друга чверть')
} else if (time >= 31 && time <= 45) {
    console.log('Третя Чверть')
} else if (time >= 46 && time <= 59) {
    console.log('Четверта Чверть')
} else {
    console.log('Error')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if (day >= 1 && day <= 10) {
    console.log('Перша')
} else if (day >= 11 && day <= 20) {
    console.log('Друга')
} else if (day >= 21 && day <= 31) {
    console.log('Третя')
} else {
    console.log('Error')
}
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let week = 3;
switch (week) {
    case 1:
        console.log('First lesson');
        break;
    case 2:
        console.log('The first practical lesson')
        break;
    case 3:
        console.log('Second lesson')
        break;
    case 4:
        console.log('Second practical classes')
        break;
    case 5:
        console.log('Consultations')
        break;
    case 6:
        console.log('English')
        break;
    case 7:
        console.log('Day off')
        break;
    default:
        console.log('Error')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 5;
let b = 5;
if (a > b) {
    console.log(a)
} else if (b > a) {
    console.log(b)
} else if (a === b){
    console.log('Рівні числа')
}else {
    console.log('Error')
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xl = prompt('x') || "default";
console.log(xl);

let al = false
console.log(x = al || "default")