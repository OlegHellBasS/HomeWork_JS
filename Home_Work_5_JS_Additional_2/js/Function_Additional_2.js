// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const num_min = (num_1, num_2, num_3) => {
    if (num_1 < num_2 && num_1 < num_3) {
        console.log(num_1)
    } else if (num_2 < num_1 && num_2 < num_3) {
        console.log(num_2)
    } else {
        console.log(num_3)
    }
};
num_min(5, 4, 2)

//------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const num_max = (num_1, num_2, num_3) => {
    if (num_1 > num_2 && num_1 > num_3) {
        console.log(num_1)
    } else if (num_2 > num_1 && num_2 > num_3) {
        console.log(num_2)
    } else {
        console.log(num_3)
    }
};
num_max(8, 5, 6)
//-----------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву
let arr_3 = [21, 17, 13, 6, 22, 31, 45, 66, 100, 18];

const arr_max_num = arr => {
    let max = arr[0]
    for (const arrNum of arr) {
        if (max < arrNum)
            max = arrNum
    }
    return max
};
console.log(arr_max_num(arr_3))
//-----------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву

const arr_min_num = arr => {
    let min = arr[0]
    for (const arrNum of arr) {
        if (min > arrNum)
            min = arrNum
    }
    return min
};
console.log(arr_min_num(arr_3))

//----------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr_num = [1, 2, 10]
const arr_item_plus = arr => {
    let num = 0;
    for (const numElement of arr) {
        num += numElement
    }
    return num
};
console.log(arr_item_plus(arr_num));

//----------------------------------------------------------------------------------------------------------------
// - Дано натуральное число n. Выведите все числа от 1 до n.
const num_f = n => {
    if (n <= 1) return 1;
    return num_f(n - 1) + " " + n;
};
console.log(num_f(5))
//----------------------------------------------------------------------------------------------------------------
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

const num_a_b = (a, b) => {
    if (a < b){
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }if (a > b){
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
};
num_a_b(6, 3,);
//----------------------------------------------------------------------------------------------------------------
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
const foo_1 = [9,8,0,4];

const reversForIndex = (arr,n) => {
    let ia = arr[n]
    let ib = arr[n+1]
    arr[n + 1] = ia
    arr[n] = ib
    return arr;
}
console.log(reversForIndex(foo_1, 0));
//---------------------------------------------------------------------------------------------------------------
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
const arr_i_2 = (arr) =>{
      const narr = [];
    for (let i = 0; i < arr.length; i++) {
       if ( arr[i] !== 0 ){
           narr[narr.length] = arr[i]
        }
    }
   for (let i = 0; i < arr.length; i++) {
        if ( arr[i] === 0 ){
            narr[narr.length] = arr[i]
        }
    }
    return narr
}
console.log(arr_i_2([1, 0, 6, 0, 3]));
//---------------------------------------------------------------------------------------------------------------