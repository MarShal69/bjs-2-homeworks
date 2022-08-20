function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
  return result; // boolean
};
// console.log(compareArrays([10, 20, -3], [10, 20, -3]))

function advancedFilter(arr) {
  let resultArr = arr.filter(element => element > 0).filter(element => element % 3 === 0).map((element) => element * 10);;
  return resultArr; // array
};
// console.log(advancedFilter([4,3,5]))