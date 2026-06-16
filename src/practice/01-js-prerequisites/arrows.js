// arrow function vs normal function

function greetNormal(name) {
  return "Hello " + name;
}

const greet = (name) => "Hello " + name;

console.log(greetNormal("Preethii")); // Hello Preethii
console.log(greet("Preethii")); // Hello Preethii


// single param - parens optional
const square = x => x * x;
console.log(square(4)); // 16


// no params - need ()
const sayHi = () => "hi!";
console.log(sayHi()); // hi!


// multi line - need return keyword
// forgot return first time, got undefined
// const multiply = (a, b) => {
//   a * b    wrong, no return
// }

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 4)); // 12

const students = [
  { name: "st1",  marks: 92},
  { name:"st2",   marks: 74},
  { name:"st3",  marks: 85 },
  { name: "st4",  marks: 61 },
];

const topStudents = students.filter(s => s.marks > 80);
console.log("top students:", topStudents);
// got output - st1, st3

const topNames = students
  .filter(s => s.marks > 80)
  .map(s => s.name.toUpperCase());
console.log("names uppercased:", topNames);
// got output - ['ST1', 'ST3']


const nums = [1, 2, 3, 4, 5, 6];
const evenDoubled = nums.filter(n => n % 2 === 0).map(n => n * 2);
console.log("even doubled:", evenDoubled); // [4, 8, 12]
