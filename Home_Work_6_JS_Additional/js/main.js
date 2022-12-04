// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let str_1 = 'наслаждение'
const str_arr = (str,n) => {
    const arr = [];
    for (let i = 0; i <= str.length; i+=n) {
        arr.push(str.slice(i,i + n))
    }
    return arr
}
console.log(str_arr(str_1,3))
//===========================================================================================================================|
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
     let str_2 = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
const delete_characters = (str, length) => str.substring(0,length)
console.log(delete_characters(str_2,7))
//===========================================================================================================================|
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//   При цьому всі символи рядка необхідно перевести у верхній регістр.
     let str_3 = "HTML JavaScript PHP";
const insert_dash = (str) => str.replaceAll(' ','-').toUpperCase()
console.log(insert_dash(str_3))
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//===========================================================================================================================|
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str_4 = 'java'
const insert_up = (str) => str.substring(0,1).toUpperCase() + str.substring(1,str.length)
console.log(insert_up(str_4))
//===========================================================================================================================|
// - Дано список імен.
 let n1 = 'Harry..Potter'
 let n2 = 'Ron---Whisley'
 let n3 = 'Hermione__Granger'
const insert_ter = (str) => str.replaceAll(/[-_.]/g,' ').split(' ').filter(value => value).join(' ')
console.log(insert_ter(n1))
console.log(insert_ter(n2))
console.log(insert_ter(n3))
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//===========================================================================================================================|
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr_1 = []
const f_arr_rn = () => {
    let arr_random = []
    for (let i = 0; i < 100; i++) {
        arr_random.push(Math.ceil(Math.random()*100))
    }return arr_random
}
console.log(f_arr_rn(arr_1))
let x = f_arr_rn(arr_1)
//===========================================================================================================================|
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   Відсортувати його за допомоги sort
console.log(x.sort());
//===========================================================================================================================|
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let result = (arr) => arr.filter(elem => elem % 2 === 0 && elem % 10 !== 0);
 console.log(result(x))
//===========================================================================================================================|
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str_5 = 'каждый охотник желает знать';
const capitalize = (str) => str.substring(0,1).toUpperCase() + str.substring(1,str.length)
console.log(capitalize(str_5));
//===========================================================================================================================|
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе
// :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

// Протестувати на значеннях
let str_6 = 'someemail@gmail.com'
let str_7 = 'someeMAIL@gmail.com'
let str_8 = 'someeMAIL@i.ua'
let str_9 = 'some.email@gmail.com'
const email = (str) => {
    const index_ravluk = str.indexOf('@')
    const index_krapka = str.indexOf('.')
    return index_ravluk >= 2 && index_krapka >= index_ravluk + 2;
}
console.log(email(str_6));
console.log(email(str_7));
console.log(email(str_8));
console.log(email(str_9));

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом,з регулярками будете потім бавитись.
//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
//=========================================================================================================================|
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
     let symb = "о";
     let str_10 = "Астрономия это наука о небесных объектах";
const count = (str, stringsearch) =>str.length - str.replaceAll(stringsearch,'').length
console.log(count(str_10, symb));
// document.writeln(count(str, symb)) // 5
//=========================================================================================================================|
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
     let str_11 = "Сила тяжести приложена к центру масс тела";
let cutString = (str,n) => str.split(' ').slice(0,n).join(' ')
console.log(cutString(str_11, 5));
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//=========================================================================================================================|
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [{
    title: 'Last wish',
    pageCount: 640,
    after: ['Andrzej Sapkowski'],
    genre: ['Fantasy','adventure novel']
    },
    {
        title: 'The sword of destiny',
        pageCount: 384,
        after: ['Andrzej','Sapkowski'],
        genre: ['Fantasy']
    },
    {
        title: 'Elven blood',
        pageCount: 480,
        after: ['Andrzej Sapkowski'],
        genre: ['Fantasy']
    }]
// -знайти наібльшу книжку.
console.log(books.sort((a, b) => b.pageCount - a.pageCount)[0]);
// - знайти книжку/ки з найбільшою кількістю жанрів
console.log(books.sort((a, b) => b.genre - a.genre)[0]);
// - знайти книжку/ки з найдовшою назвою
console.log(books.sort((a, b) => b["title"].length - a["title"].length)[0]);
// - знайти книжку/ки які писали 2 автори
console.log(books.filter(value => value.after.length === 2));
// - знайти книжку/ки які писав 1 автор
console.log(books.filter(value => value.after.length === 1));
// - вісортувати книжки по кількості сторінок по зростанню
console.log(books.sort((a, b) => a.pageCount - b.pageCount));
