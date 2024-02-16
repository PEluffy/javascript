//Arrays
const students = ["Piyush", "john", "jane"];

//Array foreach method
students.forEach((val) => console.log(val));

//map method that return a new array
const numbers = [0, 1, 2, 3, 40, 4, 6];
console.log(numbers.map((val) => val * 2));

//return number if number exist
console.log(numbers.find((n) => n == 4));

//return index if number exist
console.log(numbers.findIndex((n) => n == 4));

//return boolean
console.log(numbers.includes(40));

//return array providing indicess or index
console.log(numbers.slice(2, 4));

//challanges

//1. sort the array in ascending order

numbers.sort((a, b) => a - b); //doing b-a will sort in decending order
console.log(numbers);

//2. filter out the numbers which are divisible by 2

console.log(numbers.filter((n) => n % 2 == 0));

//3. reduce the array to single value
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("sum of all elements is: ", sum);
