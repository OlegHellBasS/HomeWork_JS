// - створити масив з 5 числових значень - та вивести його в консоль

// let arr_number = [5, 4, 3, 2, 1];
// console.log(arr_number)

//-------------------------------------------------------------------------------------------------------------------
// - створити масив з 5 стічкових значень - та вивести його в консоль

// let arr_str = ['stop', 'play', 'reg', 'display', 'hdd'];
// console.log(arr_str)

//-------------------------------------------------------------------------------------------------------------------
// - створити масив з 5 значень стрічкового, числового та булевого типу - та вивести його в консоль

// let arr_num_str = [true, 'stop', 6, 'play', false];
// console.log(arr_num_str)

//-------------------------------------------------------------------------------------------------------------------
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr_1 = [];
// arr_1 [0] = true;
// arr_1 [1] = 'stop';
// arr_1 [2] = 6;
// arr_1 [3] = 5;
// arr_1 [4] = 'play';
// arr_1 [5] = false;
// console.log(arr_1)

//-------------------------------------------------------------------------------------------------------------------

// - є масив
// let arr_2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//-------------------------------------------------------------------------------------------------------------------
// 1. перебрати його циклом while
// let a = 0;
// while (a < arr_2.length) {
//     console.log(arr_2[a])
//     a++
// }

//-------------------------------------------------------------------------------------------------------------------
// перебрати його циклом while але в зворотньому циклі (с заду на перед)

// let aa = arr_2.length - 1;
// while (aa >= 0) {
//     console.log(arr_2[aa])
//     aa--
// }

//-------------------------------------------------------------------------------------------------------------------
// 2. перебрати його циклом for

// for (let b = 0; b < arr_2.length; b++) {
//     console.log(arr_2[b])
// }

//-------------------------------------------------------------------------------------------------------------------
// 2. перебрати його циклом for але в зворотньому циклі (с заду на перед)

// for (let ab = arr_2.length -1; ab >= 0; ab--) {
//     console.log(arr_2[ab])
// }

//-------------------------------------------------------------------------------------------------------------------
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// c = 0;
// while (c < arr_2.length) {
//     if (c % 2 !== 0) {
//         console.log(arr_2[c]);
//     }
//     c++
// }

//-------------------------------------------------------------------------------------------------------------------
// перебрати циклом while та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)

// let ca = arr_2.length - 1;
// while (ca >= 0) {
//     if (ca % 2 !== 0)
//     console.log(arr_2[ca])
//     ca--
// }

//-------------------------------------------------------------------------------------------------------------------
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let d = 0; d < arr_2.length; d++) {
//     if (d % 2 !== 0) {
//         console.log(arr_2[d])
//     }
// }

//------------------------------------------------------------------------------------------------------------------
// перебрати циклом for та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)

// for (let da = arr_2.length -1; da >= 0 ; da--) {
//     if (da % 2 !== 0){
//         console.log(arr_2[da])
//     }
// }

//-------------------------------------------------------------------------------------------------------------------
// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < arr_2.length) {
//     if (arr_2[i] % 2 === 0) {
//         console.log(arr_2[i])
//     }
//     i++
// }
//-------------------------------------------------------------------------------------------------------------------
//перебрати циклом while та вивести  числа тільки парні  значення
// let ia = arr_2.length -1;
// while (ia >= 0) {
//     if (arr_2[ia] % 2 === 0)
//     console.log(arr_2[ia])
//     ia--
// }
//-------------------------------------------------------------------------------------------------------------------
// 6. перебрати циклом for та вивести  числа тільки парні  значення але в зворотньому циклі (с заду на перед)

// for (let f = 0; f < arr_2.length; f++) {
//     if (arr_2[f] % 2 === 0) {
//         console.log(arr_2[f])
//     }
// }

//-------------------------------------------------------------------------------------------------------------------
// 7. замінити кожне число кратне 3 на слово "okten"

// for (let j = 0; j < arr_2.length; j++) {
//     if (arr_2[j] % 3===0) {
//         arr_2[j] = "okten"
//     }console.log(arr_2[j])
// }
//-------------------------------------------------------------------------------------------------------------------
// for (let ja = arr_2.length -1; ja >= 0 ; ja--) {
// if (arr_2[ja] % 3===0) {
//     arr_2[ja] = "okten"
// }console.log(arr_2[ja])
// }
//-------------------------------------------------------------------------------------------------------------------
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//------------------------------------------------------------------------------------------------------------------
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let arr_5 = [];
// arr_5 [0] = true;
// arr_5 [1] = 'stop';
// arr_5 [2] = 6;
// arr_5 [3] = 5;
// arr_5 [4] = 'play';
// arr_5 [5] = false;
// arr_5 [6] = 9
// arr_5 [7] = 55
// arr_5 [8] = 'helo'
// arr_5 [9] = 99
// for (const arr5Element of arr_5) {
//     console.log(arr5Element)
// }
//-----------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let ta = 0; ta < 10; ta++) {
//     document.write('крок  ')
//     console.log('крок',ta)
// }

//-----------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let tb = 0; tb < 100; tb++) {
//     document.write('крок  ')
//     console.log('крок',tb)
// }

//-----------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let tc = 0; tc < 100; tc+=2) {
//     document.write('крок  ')
//     console.log('крок',tc)
// }

//-----------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let td = 0; td < 100; td++) {
//     if (td % 2 === 0){
//     console.log('крок',td);
//     document.write(`крок  `)}
// }

//-----------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let tc = 0; tc < 100; tc++) {
//     if (tc % 2 === 1){
//     console.log('крок',tc);
//     document.write(`крок  `)}
// }

//-----------------------------------------------------------------------------------------------------------------
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [{
        title: 'Last wish',
        pageCount: 640,
        after: 'Andrzej Sapkowski',
        genre: ['Fantasy','adventure novel']
    },
    {
        title: 'The sword of destiny',
        pageCount: 384,
        after: ['Andrzej','Sapkowski'],
        genre: 'Fantasy'
    },
    {
        title: 'Elven blood',
        pageCount: 480,
        after: 'Andrzej Sapkowski',
        genre: 'Fantasy'
    }]
// console.log(books)
// -знайти наібльшу книжку.
// let cpageCount = books[0];
// for (let book of books) {
//     if (book.pageCount > cpageCount.pageCount){
//         cpageCount = book;
//     }
// }console.log(cpageCount)
// - знайти книжку/ки з найбільшою кількістю жанрів
// let cgenre = books[0]
// for (let book of books) {
//    if (book.genre > cgenre.genre) {
//        cgenre = book;
//    }
// }console.log(cgenre)
// - знайти книжку/ки з найдовшою назвою
// let ctitle = books[0]
// for (let book of books){
//     if (book.title > cgenre.title){
//         ctitle = book
//     }
// }console.log(ctitle)
// - знайти книжку/ки які писали 2 автори
let cafter = books[0]

// - знайти книжку/ки які писав 1 автор
