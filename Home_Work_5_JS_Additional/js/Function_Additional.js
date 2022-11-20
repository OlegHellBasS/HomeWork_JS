// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function num_min(num_1, num_2, num_3) {
//     if (num_1 < num_2 && num_1 < num_3) {
//         console.log(num_1)
//     } else if (num_2 < num_1 && num_2 < num_3){
//         console.log(num_2)
//     }else {
//         console.log(num_3)
//     }
//         }
// num_min(3,4,2)

//-------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function num_max(num_1, num_2, num_3) {
//     if (num_1 > num_2 && num_1 > num_3) {
//         console.log(num_1)
//     } else if (num_2 > num_1 && num_2 > num_3){
//         console.log(num_2)
//     }else {
//         console.log(num_3)
//     }
// }
// num_max(8,4,6)

//-------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву
// let arr_2 = [21, 17, 13, 6, 22, 31, 45, 66, 100, 18];
//
// function arr_max_num (arr){
//     let max = arr[0]
//     for (const arrNum of arr) {
//         if (max < arrNum)
//             max = arrNum
//     }return max
// }
// console.log(arr_max_num(arr_2))

//-------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function arr_centr_num(arr) {
//     let cn = 0;
//     for (const arrNum of arr) {
//         cn += arrNum;
//     }return cn / arr.length
// }
// console.log(arr_centr_num(arr_2))
//-------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function max_and_min_num (...num){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const numElement of num) {
//         if (numElement > max){
//             max = numElement
//         }
//         if (numElement < min){
//             min = numElement
//         }
//     }
//     console.log(max)
//     return min
// }
// let num = max_and_min_num(1,2,3,4,5,6,7,8,9,10);
// console.log(num)
//-------------------------------------------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr_num_r = [];
// function arr_random_num (){
//     let arr = [];
//     for ( let i = 0; i < 10; i++ ) {
//         arr.push(Math.round( Math.random() * 100 ));
//     }
//     console.log(arr);
//     }
// arr_random_num(arr_num_r)
//-------------------------------------------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// function arr_random_limit (limit){
//     let arr = [];
//     for ( let i = 0; i < limit; i++ ) {
//         arr.push(Math.floor( Math.random() * 100 ));
//     }
//     console.log(arr);
// }
// arr_random_limit(15)
//-------------------------------------------------------------------------------------------------------------------
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr_num123 = [1,2,3];
function reverse_arr (arr) {

    const arrr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrr[arrr.length ] = arr[i]
    }
    console.log(arrr)
}
reverse_arr(arr_num123)
//-------------------------------------------------------------------------------------------------------------------
// - створити функцію, яка якщо приймає один аргумент,
// просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function farg() {
    let z = 0
 if (arguments.length === 1){
     console.log(arguments)
 }else if (arguments.length > 1){
     for (let i = 0; i < arguments.length; i++) {
         z+= arguments[i]
     }
 }return z
}

console.log(farg(1,' helo' ,' oleg' ));

//-------------------------------------------------------------------------------------------------------------------
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
const arr_1 = [1,2,3,4];
const arr_2 = [2,3,4,5];
// результат
//     [3,5,7,9]
const EXAMPLE_arr = (arr1,arr2) => {
    let resarr = [];
    for (let i = 0; i < arr1.length; i++) {
        resarr.push(arr1[i] + arr2[i]);
    }
    return resarr;
}
let b = EXAMPLE_arr(arr_1,arr_2);
console.log(b);
//-------------------------------------------------------------------------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
const user_arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]

function u_arr_o(arr) {
    const user_ob = []
    for (const arrElement of arr) {
        for (const key in arrElement) {
            user_ob[user_ob.length] = key
        }
    }
    return user_ob
}

console.log(u_arr_o(user_arr));
//-------------------------------------------------------------------------------------------------------------------
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]