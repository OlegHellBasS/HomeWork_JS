// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
{
    let x = +prompt('x');
if (x !== 0) {
    console.log(true)
} else {
    console.log(false)
}
}

// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
{
    let time = +prompt('Time');
if (time <= 15 && time >= 0) {
    console.log('Горілка')
} else if (time >= 16 && time <= 30) {
    console.log('Пиво')
} else if (time >= 31 && time <= 45) {
    console.log('ойой')
} else if (time >= 46 && time <= 59) {
    console.log('zzzzzzz')
}
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
{
    let day = +prompt('Day?')
if (day <= 10) {
    console.log(1)
} else if (day <= 20 && day >= 11) {
    console.log(2)
} else if (day <= 31 && day >= 21)
    console.log(3)
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
{
    let week = prompt('day');
switch (week) {
    case '1':
        console.log('First lesson');
        break;
    case '2':
        console.log('The first practical lesson');
        break;
    case '3':
        console.log('Second lesson')
        break;
    case '4':
        console.log('Second practical classes')
        break;
    case '5':
        console.log('Consultations')
        break
    case '6':
        console.log('English')
        break;
    case '7':
        console.log('Day off')
        break;
}
}


// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
{
    let a = +prompt('100')
let b = +prompt('200')
if (a > b){
    console.log(a)
}else if (a === b){
    console.log('числа рівні')
}else {
    console.log(b)
}
}

//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)
{
    let x = prompt('x') || "default";
 console.log(x);

 let a = false
console.log(x=a || "default")
}