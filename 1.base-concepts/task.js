"use strict";

function solveEquation(a, b, c) {
  let arr;
  arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  }

  return arr; // array

};

console.log(solveEquation(1, 5, 4));





function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {

    // количество месяцев для кредита
    let numberOfMonth = Math.trunc((Date.parse(date) - Date.now()) / (1000 * 60 * 60 * 24 * 30));

    // тело кредита
    let s = amount - contribution;

    // процентная ставка
    let percentPart = percent / 12 / 100;

    // ежемесячная оплата
    let totalAmountMonth = s * (percentPart + (percentPart / (((1 + percentPart) ** numberOfMonth) - 1)));

    // общий платёж
    totalAmount = (totalAmountMonth * numberOfMonth).toFixed(2);

    return + totalAmount;
  }

}

