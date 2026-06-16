
const user = {
  name: "priya",
  age: 21,
  email: "priya@college.edu",
  role: "student",
};

// old way
// const name = user.name;
// const age = user.age;

// new way
const { name, age, email } = user;
console.log(name);  // priya
console.log(age);   // 21
console.log(email); // priya@college.edu


// renaming while destructuring
const { name: studentName, role: studentRole } = user;
console.log(studentName); // priya
console.log(studentRole); // student


// default value if key doesnt exist
const { city = "unknown" } = user;
console.log(city); // unknown


// array destructuring
const colors = ["red", "green", "blue"];

const [c1, c2] = colors;
console.log(c1); // red
console.log(c2); // green

// skip elements
const [, , c3] = colors;
console.log(c3); // blue


let a = 10;
let b = 20;//swapp
[a, b] = [b, a];
console.log(a, b); // 20 10


// destructuring in function params
function printUser({ name, email, role = "user" }) {
  console.log(`${name} - ${email} - ${role}`);
}

printUser(user);
// got output - priya - priya@college.edu - student

printUser({ name: "rahul", email: "rahul@college.edu" });
// got output - rahul - rahul@college.edu - user   (default role used)


// todo destructuring
const todos = [
  { id: 1, text: "do arrows.js", done: true },
  { id: 2, text: "do Counter.jsx", done: false },
];

todos.map(({ id, text, done }) => {
  console.log(id, text, done);
});
// got output -
// 1 do arrows.js true
// 2 do Counter.jsx false


// nested destructuring
const course = {
  title: "React Basics",
  instructor: { name: "dr mehta" },
};

const { title, instructor: { name: instrName } } = course;
console.log(title);     // React Basics
console.log(instrName); // dr mehta
// NOTE - instructor is not a variable after this, only instrName is


// rest operator
const { name: uName, ...rest } = user;
console.log(uName); // priya
console.log(rest);  // { age: 21, email: ..., role: ... }
