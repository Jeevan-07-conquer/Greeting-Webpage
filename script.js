const colorButton = document.getElementById("colorButton");
const greetButton = document.getElementById("greetButton");
const calcForm = document.getElementById("calcForm");
const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const resultText = document.getElementById("result");

const buttonColors = ["#d946ef", "#22d3ee", "#f59e0b", "#10b981", "#fb7185"];
let colorIndex = 0;

function getTimeGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning! Welcome to this internship JavaScript demo.";
  }

  if (hour < 18) {
    return "Good afternoon! Welcome to this internship JavaScript demo.";
  }

  return "Good evening! Welcome to this internship JavaScript demo.";
}

function showGreetingAlert() {
  alert(getTimeGreeting());
}

colorButton.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % buttonColors.length;
  colorButton.style.background = buttonColors[colorIndex];
  colorButton.style.color = "#ffffff";
});

greetButton.addEventListener("click", showGreetingAlert);

calcForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const first = Number(firstNumberInput.value);
  const second = Number(secondNumberInput.value);
  const sum = first + second;

  resultText.textContent = `Result: ${first} + ${second} = ${sum}`;
});

window.addEventListener("load", () => {
  setTimeout(showGreetingAlert, 250);
});
