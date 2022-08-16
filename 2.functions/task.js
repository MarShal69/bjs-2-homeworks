// // Задание 1
arr1 = [];
for (let i = -100; i < 101; i++) {
  arr1.push(i);
}
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    };
    if (arr[i] < min) {
      min = arr[i];
    };
    sum += arr[i];
    avg = + ((sum / arr.length).toFixed(2));
  }
  return { min: min, max: max, avg: avg };
}
// console.log(getArrayParams([1, 2, 2]));

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};
// console.log(worker([1, 15, 5]));
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    };
  };
  return max;
};
console.log(makeWork([[10, 10, 11], [20, 10]], worker2));

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = Infinity;
  let max = -Infinity;
  let diff;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    };
    if (arr[i] < min) {
      min = arr[i];
    };
    diff = Math.abs(max - min);
  };
  return diff;
}
