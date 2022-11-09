// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const element_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(element_1[0])
console.log(element_1[1])
console.log(element_1[2])
console.log(element_1[3])
console.log(element_1[4])
console.log(element_1[5])
console.log(element_1[6])
console.log(element_1[7])
console.log(element_1[8])
console.log(element_1[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const books = [
    {
        title: 'Last wish',
        pageCount: 640,
        genre: 'Fantasy'
    },
    {
        title: 'The sword of destiny',
        pageCount: 384,
        genre: 'Fantasy'
    },
    {
        title: 'Elven blood',
        pageCount: 480,
        genre: 'Fantasy'
    }
]
console.log(books)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
const books_1 = [
    {
        title: 'A time of contempt',
        pageCount: 464,
        genre: 'fantasy',
        after: [{
            name: 'Andrzej',
            username: 'Sapkowski',
            password: 1995
        }]
    },
    {
        title: 'Baptism of fire',
        pageCount: 480,
        genre: 'fantasy',
        after: [{
            name: 'Andrzej',
            username: 'Sapkowski',
            password: 1997
        }]
    },
    {
        title: 'Swallow\`s Tower',
        pageCount: 448,
        genre: 'fantasy',
        after: [{
            name: 'Andrzej',
            username: 'Sapkowski',
            password: 1997
        }]
    }
]
console.log(books_1)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x1x'
    },
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x2x'
    },
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x3x'
    },
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x4x'
    },
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x5x'
    },
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x6x'
    },
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x7x'
    },
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x8x'
    },
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x9x'
    },
    {
        name: 'Vanya',
        username: 'bob',
        password: 'x10'
    }
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9]["password"])


