// YOUR CODE HERE
// part 1 colors
// to connect HTML elements
const radioForm = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

radioForm.addEventListener("change", (e) => {
    const color = e.target.value;

    if (color === "blue") {
        radioOutput.innerHTML = "You picked blue! 💙";
    } else if (color === "green") {
        radioOutput.innerHTML = "You picked green! 💚";
    } else if (color === "pink") {
        radioOutput.innerHTML = "You picked pink! 🩷";
    } else if (color === "black") {
        radioOutput.innerHTML = "You picked black! 🖤";
    }
});

//part 2 guess number

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const secretNumber = getRandomInt();

numInput.addEventListener("input", () => {
  const guess = Number(numInput.value);

  if (guess < secretNumber) {
    numOutput.innerHTML = "Too low, try again!";
  } else if (guess > secretNumber) {
    numOutput.innerHTML = "Too high, try again!";
  } else {
    numOutput.innerHTML = "Correct!";
  }
});

//part 3 continent
const textInput = document.querySelector("#text-input");
const srOutput = document.querySelector("#sr-continent-alert");

const continents = [
  "north america",
  "south america",
  "europe",
  "asia",
  "africa",
  "australia",
  "antarctica"
];

const continentImages = document.querySelectorAll("#text-output img");
continentImages.forEach(img => img.classList.add("hidden"));

textInput.addEventListener("input", () => {
  const value = textInput.value.toLowerCase().trim();

  if (continents.includes(value)) {
    const id = value.replace(" ", "-");
    const img = document.querySelector(`#${id}`);

    if (img) {
      img.classList.remove("hidden");
      srOutput.innerHTML = `${value} found!`;
    }
  }
});

//part 4 - bg color

const colorPicker = document.querySelector("#color");
const checkbox = document.querySelector("#human");
const form = document.querySelector("#back_color");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!checkbox.checked) {
    alert("Please confirm you are not a robot.");
    return;
  }

  const color = colorPicker.value;
  document.body.style.backgroundColor = color;

  if (is_dark(color)) {
    document.body.style.color = "white";
  } else {
    document.body.style.color = "black";
  }
});

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.