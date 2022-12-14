// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle(a, b) {
    return a * 2 + b * 2;
}

let a = rectangle(10, 20)
console.log(a)

//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function radius(r) {
    return Math.PI * Math.pow(r, 2);
}

let b = radius(10)
console.log(b)

//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cilinder = (h, r) => Math.PI * Math.pow(r, 2) * h;
console.log(cilinder(6, 8))

//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
];

function f_arr_1(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

f_arr_1(users)

//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraf(city) {
    document.write(`<p>${city}</p>`)
}

paragraf('Львів')

//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ul_li_3(name) {
    document.write(`<ul>`)
    document.write(`<li>${name}</li>
                    <li>${name}</li>
                    <li>${name}</li>`)
    document.write(`</ul>`);
}

ul_li_3('Oleg')

//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ul_li_c(text, num) {
    document.write(`<ul>`)
    for (let i = -1; i < num; i++) {
        document.write(`<li>${text}</li>`)
        document.write(`</ul>`);
    }
}

ul_li_c('City Lviv', 5)

//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr_num_str = [true, 'stop', 6, 'play', false];

function arr_ul_li_item(arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

arr_ul_li_item(arr_num_str)

//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function arr_id_name_age(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}

arr_id_name_age(users)
//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву

let arr_2 = [21, 17, 13, 6, 22, 31, 45, 66, 100, 18];

function arr_min_num(arr) {
    let min_num = arr[0];
    for (const arrNum of arr) {
        if (min_num > arrNum) {
            min_num = arrNum
        }
    }
    return min_num

}

let x = arr_min_num(arr_2);
console.log(x)

//--------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr_num = [1, 2, 10]
function arr_item_plus(arr){
    let num = 0;
    for (const numElement of arr) {
        num += numElement
    }return num
}
let n = arr_item_plus(arr_num)
console.log(n)
//--------------------------------------------------------------------------------------------------------------------