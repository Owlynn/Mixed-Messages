// List of possible animals (with "the" in front)
const animals = [
  "the ostrich",
  "the cat",
  "the llama",
  "the dog",
  "the hamster",
  "the turtle",
  "the parrot",
  "the panda",
  "the fox",
  "the kangaroo"
];

// List of possible verbs
const verbs = [
  "eats",
  "knocks over",
  "stares at",
  "chases",
  "juggles",
  "hides",
  "throws",
  "collects",
  "balances",
  "dreams about"
];

// List of possible items / objects
const items = [
  "earthworms",
  "a glass of water",
  "rainbows",
  "a pile of socks",
  "a shiny rock",
  "three bananas",
  "a giant sandwich",
  "a tiny umbrella",
  "a stack of books",
  "a mysterious box"
];

// Return one random element from any array
const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

// Build one full random sentence
const generateMessage = () => {
  const animal = getRandomElement(animals);
  const verb = getRandomElement(verbs);
  const item = getRandomElement(items);

  return `${animal} ${verb} ${item}`;
};

// If running in the browser, connect the button and the output area
if (typeof document !== "undefined") {
  const button = document.getElementById("generate-btn");
  const output = document.getElementById("message-output");

  if (button && output) {
    button.addEventListener("click", () => {
      const message = generateMessage();
      output.textContent = message;
      output.classList.remove("empty");
    });
  }
}

// If running with Node.js (no document), log one random message
if (typeof document === "undefined") {
  console.log(generateMessage());
}