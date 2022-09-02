//Задача 1

function parseCount(quantity) {
    if (isNaN(Number.parseInt(quantity))) {
        throw new Error("Невалидное значение")
    }
    return Number.parseInt(quantity);
};

// console.log(parseCount("123"));
// console.log(parseCount("012"));
// console.log(parseCount('kkk'));

function validateCount(quantityOfGoods) {
    try {
        return parseCount(quantityOfGoods);
    } catch (error) {
        return error;
    };
};

// console.log(validateCount("085"));

// Задача 2

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        };
        this.a = a;
        this.b = b;
        this.c = c
    };

    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    };

    getArea() {
        let a = this.getPerimeter() / 2;
        let S = +(Math.sqrt(a * (a - this.a) * (a - this.b) * (a - this.c))).toFixed(3);
        return S
    };
};

// let t1 = new Triangle(2, 5, 5);
// console.log(t1);
// console.log(t1.getPerimeter());
// console.log(t1.getArea());

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (error) {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует",

        };
    };
}

// console.log(new Triangle(50, 60, 100));