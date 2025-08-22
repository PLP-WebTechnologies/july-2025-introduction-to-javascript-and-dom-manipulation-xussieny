

// Part 1: Variable declarations and conditionals


// Example variable declarations
const age = 25;
let name = "hussien";
var city = "Dessie"; // While 'var' is still technically valid, 'let' and 'const' are preferred.

// Example conditional statement (if/else)
const checkAgeButton = document.getElementById('check-age-button');
const resultText = document.getElementById('result-text');

checkAgeButton.addEventListener('click', function() {
    if (age >= 18) {
        resultText.textContent = "You are an adult.";
    } else {
        resultText.textContent = "You are a minor.";
    }
});


// Part 2: Custom functions

// Function 1: Greet the user
function greetUser(userName) {
    return `Hello, ${userName}! Welcome.`;
}

// Function 2: Calculate the square of a number
function calculateSquare(number) {
    return number * number;
}


// Event Listener for the greetUser function
const greetButton = document.getElementById('greet-button');
const greetingOutput = document.getElementById('greeting-output');

greetButton.addEventListener('click', function() {
    const greeting = greetUser("User"); // call the greetUser function.
    greetingOutput.textContent = greeting;
});


// Part 3: Loop examples


const loopOutput = document.getElementById('loop-output');

// Loop 1: For loop - printing numbers 1 to 5
let forLoopText = "<b>For Loop:</b><br>";
for (let i = 1; i <= 5; i++) {
    forLoopText += i + "<br>";
}
loopOutput.innerHTML += forLoopText;

// Loop 2: While loop - printing even numbers up to 10
let whileLoopText = "<b>While Loop:</b><br>";
let count = 2;
while (count <= 10) {
    whileLoopText += count + "<br>";
    count += 2;
}
loopOutput.innerHTML += whileLoopText;


// Part 4: DOM interactions


const nameInput = document.getElementById('name-input');
const sayHelloButton = document.getElementById('say-hello-button');
const helloMessage = document.getElementById('hello-message');

// DOM Interaction 1: Add a click event to a button

sayHelloButton.addEventListener('click', function() {
    const userName = nameInput.value;
    if (userName.trim() !== "") {
        helloMessage.textContent = `Hello, ${userName}!`;
    } else {
        helloMessage.textContent = "Please enter your name.";
    }
});

// DOM Interaction 3: Add a CSS class or style to an element
helloMessage.style.color = "blue"; // Initial color - can be changed by event or other means
