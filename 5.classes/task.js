//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null
    };
    fix() {
        return this.state *= 1.5;
    };
    set state(state) {
        if (state < 0) {
            this._state = 0
        } else if (state > 100) {
            this._state = 100
        } else {
            this._state = state
        };
    };
    get state() {
        return this._state;
    };
};
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    };
};
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book"
    };
};
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel"
    };
};
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    };
};
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective"
    };
};

//Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    };

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        };
    };
    
   findBookBy = (type, value) => this.books.find((book) => book[type] === value) || null;

    giveBookByName (bookName) {
        let bookFound = this.findBookBy("name", bookName);
        // console.log('found=', bookFound);
        this.books.splice(this.books.indexOf(this.findBookBy("name", bookName)), 1);
        return bookFound;
    };   
};
        
    // Примеры 
    
const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);

library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);

console.log("Количество книг до выдачи: " + library.books.length);
console.log(library.giveBookByName("Пикник на обочине"));
console.log("Количество книг после выдачи: " + library.books.length);






