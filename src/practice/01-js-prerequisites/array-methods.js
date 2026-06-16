
const students = [
  { name: "Student1",   marks: 92, subject: "Math" },
  { name: "St2",     marks: 74, subject: "Science" },
  { name: "St3", marks: 85, subject: "Math" },
  { name: "St4",   marks: 61, subject: "English" },
  { name: "St5",   marks: 55, subject: "English" },
];


const names = students.map(student => student.name);
console.log("Names:", names);


const gradeLabels = students.map(student => {
  const grade = student.marks >= 80 ? "Pass" : "Needs Work";
  return `${student.name}: ${grade}`;
});
console.log("Grade labels:", gradeLabels);
// got output ['Student1: Pass', 'St2: Needs Work', 'St3: Pass', ...]

const passedStudents = students.filter(s => s.marks >= 75);
console.log("Passed students:", passedStudents);
// got outputt - Student1, St2, St3

const mathStudents = students.filter(s => s.subject === "Math");
console.log("Math students:", mathStudents);
// got output  - Student1, St3


const topMathNames = students
  .filter(s => s.subject === "Math" && s.marks > 80)
    .map(s => s.name);
console.log("Top Math student names:", topMathNames); 
// got output  - ['Student1', 'St3']


//REMEMBERR -  filter returns array, find returns element or undefined

const firstPass = students.find(s => s.marks >= 75);
console.log("First student who passed:", firstPass);


const findStu2 = students.find(s => s.name === "St2");
console.log("Found student:", findStu2); // { name: 'St2', marks: 74, subject: 'Science' }

const notFound = students.find(s => s.name === "St6");
console.log("Not found:", notFound); // output-undefined //because its not there



const totalMarks = students.reduce((acc, student) => {
  return acc + student.marks;
}, 0); 
console.log("Total marks:", totalMarks); // 455

// Average marks
const avgMarks = totalMarks / students.length;
console.log("Average marks:", avgMarks.toFixed(2)); // 75.83


// Find the average marks of students who passed Math
const avgPassingMathMarks = students
  .filter(s => s.subject === "Math" && s.marks >= 75) 
  .map(s => s.marks)                                   
  .reduce((sum, mark, idx, arr) => {
    
    return sum + mark / arr.length;                    
  }, 0);

console.log("Avg passing Math marks:", avgPassingMathMarks.toFixed(2)); // 88.50


const anyFailed = students.some(s => s.marks < 60);
console.log("Any failures?", anyFailed); // true 

const allPassed = students.every(s => s.marks >= 60);
console.log("All passed 60?", allPassed); // false

