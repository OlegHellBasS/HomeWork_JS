// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str_1 = 'hello world'+ ' ' + 'lorem ipsum'+ ' ' + 'javascript is cool'
console.log(str_1.length);
//--------------------------------------------------------------------------------------------------------------------|
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str_1.toUpperCase());
//--------------------------------------------------------------------------------------------------------------------|
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(str_1.toLowerCase());
//--------------------------------------------------------------------------------------------------------------------|
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());
//--------------------------------------------------------------------------------------------------------------------|
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
     let split = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToarray = (str) => str.split(' ')
console.log(stringToarray(split));
//--------------------------------------------------------------------------------------------------------------------|
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
const numbers = [10,8,-7,55,987,-1011,0,1050,0];
console.log(numbers.map(value => value + ''));
//--------------------------------------------------------------------------------------------------------------------|
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
     const nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
const sortNums = nums.sort((a,b) => {return a - b;});
console.log(sortNums);
//--------------------------------------------------------------------------------------------------------------------|
// sortNums(nums,'descending') // [21,11,3]
const sortNums2 = nums.sort((a,b) => {return b - a;});
console.log(sortNums2);
//--------------------------------------------------------------------------------------------------------------------|
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);
//--------------------------------------------------------------------------------------------------------------------|
// -- відсортувати його за спаданням за monthDuration
const sortarr_1 = coursesAndDurationArray.sort((a,b) => {
    return b.monthDuration - a.monthDuration;});
console.log(sortarr_1);
//--------------------------------------------------------------------------------------------------------------------|
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
//--------------------------------------------------------------------------------------------------------------------|
// описати колоду карт
const card = []
const index = [0]
const createCard = (cardSuid, color) => {

    const qwe = ['ace', 'jack', 'queen', 'king']
    for (let i = 6; i <= 14; i++) {
        i <= 10 ? card.push({cardSuid: cardSuid, color: color, value: `${i}`}) :
            card.push({cardSuid: cardSuid, color: color, value: qwe[i - 11]})
    }
    index[0]++
    if (index[0] === 1) {
        card.push({value: 'joker', color: 'red'})
        createCard('heart', 'red')
    } else if (index[0] === 2) {
        card.push({value: 'joker', color: 'black'})
        createCard('spade', 'black')
    } else if (index[0] === 3) {
        createCard('clubs', 'black')
    }
}
createCard('diamond', 'red')
console.log(card);
//-------------------------------------------------------------------------------------------------------------------|
// - знайти піковий туз
console.log(card.find(value => value.value === 'ace' && value.cardSuid === 'spade'));
//-------------------------------------------------------------------------------------------------------------------|
// - всі шістки
console.log(card.filter(value => value.value === '6'));
//-------------------------------------------------------------------------------------------------------------------|
// - всі червоні карти
console.log(card.filter(value => value.color === 'red'));
//-------------------------------------------------------------------------------------------------------------------|
// - всі буби
console.log(card.filter(value => value.cardSuid === 'diamond'));
//-------------------------------------------------------------------------------------------------------------------|
// - всі трефи від 9 та більше
console.log(card.filter(value => value.value >= '9' || value.value === '10')
    .filter(value => value.cardSuid === 'clubs'));
//-------------------------------------------------------------------------------------------------------------------|
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const sortcards = card.reduce((acamulator, card) => {
    if (card.cardSuid === 'spade') {
        acamulator.spades.push(card)
    }
    if (card.cardSuid === 'diamond') {
        acamulator.diamonds.push(card)
    }
    if (card.cardSuid === 'heart') {
        acamulator.hearts.push(card)
    }
    if (card.cardSuid === 'clubs') {
        acamulator.clubs.push(card)
    }
    return acamulator
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(sortcards);