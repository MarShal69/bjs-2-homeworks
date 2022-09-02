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



// Задача 3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    };

    // будет так
    //   this.marks = {
    //   "Алгебра": [2, 5, 4, 3, 2],
    //   "Геометрия": [2, 5, 4, 3, 2],
    // };

    addMark(mark, subject) {
        // оценка, предмет
        if (mark > 5 || mark < 1) {
            return "Ошибка, оценка должна быть числом от 1 до 5";
            // console.log ("Ошибка, оценка должна быть числом от 1 до 5");
            // завершаем
        }

        if (!this.marks[subject]) {
            // [subject], т.к обращаемся ни к конкретному имени (алгебра, геометрия) а будет и то и другое - зараннее не знаем
            // ! - если получим undeined, то инвертируем его в true
            this.marks[subject] = [];
        }
        // и пушим оценку
        this.marks[subject].push(mark);
    }


    // Средняя оценка
    getAverageBySubject(subject) {
        // усли нет этого предмета, то вернем "0", какой смысл считать тут оценки
        if (!this.marks[subject]) {
            return "Несуществующий предмет";
            // console.log("Несуществующий предмет");
        }

        // this.marks[subject] - наш массив оценок по какому-то предмету
        return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length;
        // console.log(this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length);
        // или
        // let  sum = 0;
        // for (let i = 0; i < this.marks[subject].length; i++) {
        // let sum += this.marks[subject][i];
        // }
        // return sum;

    }

    getAverage() {
        /*return Object.keys(this.marks).reduce(
          (acc, subject) => acc + this.getAverageBySubject(subject), 0
        ) / Object.keys(this.marks).length; */

        const subjects = Object.keys(this.marks);
        // subjects - массив предметов
        let sum = 0;
        for (let i = 0; i < subjects.length; i++) {
            sum += this.getAverageBySubject(subjects[i]);
        }
        return sum / subjects.length;
        // console.log(sum / subjects.length);
    }

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
        return "Исключен за попытку подделать оценки";
        // console.log("Исключен за попытку подделать оценки");
    };


}

const student = new Student("Олег Никифоров");
console.log(student);
student.addMark(5, "algebra");
console.log(student);
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
console.log(student);
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
console.log(student);
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");



