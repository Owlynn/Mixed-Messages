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

const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const generateMessage = () => {
  const animal = getRandomElement(animals);
  const verb = getRandomElement(verbs);
  const item = getRandomElement(items);

  return `${animal} ${verb} ${item}`;
};

// If running in the browser, wire up the button and output.
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

// If running with Node.js (no document), log one random message.
if (typeof document === "undefined") {
  console.log(generateMessage());
}