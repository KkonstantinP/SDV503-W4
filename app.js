//declaration function
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 6)); // Output: 9

// expression function
const addNumbersExpression = function(a, b) {
    return a + b;
};
console.log(addNumbersExpression(3, 6)); 
// arrow function
const addNumbersArrow = (a, b) => a + b;
console.log(addNumbersArrow(3, 6)); // Output: 9


const greetingSDV503 = (message) => {
    return `${message}`;
};
console.log(greetingSDV503("Welcome to SDV503!")); 

const greetingStudent = (student) => `Welcome to SDV503, ${student}!`;
console.log(greetingStudent("Alice")); // Output: Welcome to SDV503, Alice!

//Arrow es6 function

const mathOperations = (a, b) => {
    console.log("a and b are: ", a, b);
    console.log(`The addition of a and b is: ${a + b}`);
    console.log(`The subtraction of a and b is: ${a - b}`);
    console.log(`The multiplication of a and b is: ${a * b}`);
    console.log(`The division of a and b is: ${a / b}`);
};
mathOperations(10, 5);
