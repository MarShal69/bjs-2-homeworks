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
    this.findBookBy("name", bookName);
    // console.log(this.findBookBy("name", bookName));
    this.books.splice(this.books.indexOf(this.findBookBy("name", bookName)), 1);
    }   
 
    
        }
        
      
    
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






// // Задача 3

// class Student {
//     constructor(name, gender, age) {
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
       
//     };
//     setSubject(subjectName) {
//         this.subject = subjectName;
//     };

//     setSubjects(subjectsName, [...marks]) {
//         if (this.subjects === undefined) {
//             this.subjects = [subjectsName [...marks]];
//         } else {
//             this.subjectsName.push(subjectsName);
//         };

//            }; 

//            addMarkss (subjects, ...marks) {
//             if (this.marks === undefined) {
//                 this.subjects.marks = [...marks];
//             } else {
//                 this.subjects.marks.push(...marks);
//             };
//         };
                  

//     addMark(mark) {
//         if (this.marks === undefined) {
//             this.marks = [mark];
//         } else {
//             this.marks.push(mark);
//         };
//     };
//     addMarks (...marks) {
//         if (this.marks === undefined) {
//             this.marks = [...marks];
//         } else {
//             this.marks.push(...marks);
//         };
//     };
//     getAverage () {
//         return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
//     };
//     exclude (reason) {
//         delete this.subject;
//         delete this.marks;
//         this.excluded = reason;
//     };

//     };



// let student1 = new Student("Tony", "male", 37);
// let student2 = new Student("Buzz", "female", 35);
// console.log(student1);
// console.log(student2);

// student1.setSubject("Algebra");
// console.log(student1);
// student2.setSubject("Geometry");
// console.log(student2);

// student1.addMark(5);
// student1.addMark(4);
// student1.addMark(5);
// console.log(student1);
// console.log(student1.getAverage());

// student2.addMark(2);
// student2.addMark(3);
// student2.addMark(2);
// console.log(student2);
// console.log(student2.getAverage());
// student2.exclude('low grades')
// console.log(student2);
// student2.addMarks(2, 3, 2);

 
// const student3 = new Student("Олег Никифоров");
// console.log(student3);
// student3.setSubjects("Geometry")
// console.log(student3);
// student3.setSubjects("himia")
// console.log(student3);

// student3.addMarkss("himia", 2,3,3) 
// console.log(student3);
