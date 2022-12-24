// - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1, 'Margot', 'Robbie', 'margotr@gmail.com', 6139866),
    new User(2, 'Arnold', 'Schwarzenegger', 'arnolds@state.ca.gov', 3965917,),
    new User(3, 'Henry', 'Cavill', 'Mr.Cavill@henry-cavill.net', 9321115),
    new User(4, 'Freya', 'Allan', 'freyaallan241@gmail.com', 2525852),
    new User(5, 'Anya', 'Chalotra', 'anyachalotra@gmail.com', 35353566),
    new User(6, 'Joseph', 'Batey', 'joeybatey@gmail.com', 4242412),
    new User(7, 'MyAnna', 'Buring', ' myannaburing@gmail.com', 55556648),
    new User(8, 'Anna', 'Shaffer', 'annashaffer@gmail.com', 45464646),
    new User(9, 'Emma', 'Appleton', 'emmaappleton@gmail.com', 45464645),
    new User(10, 'Rebecca', 'Hansen', 'rebeccahansen@gmail.com', 463456465),
];
console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => b.id - a.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
