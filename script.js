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

const generateMessage = (animal, verb, item) => {
    return `${animal} ${verb} ${item}`;
}

console.log(generateMessage(animals[Math.floor(Math.random() * animals.length)], verbs[Math.floor(Math.random() * verbs.length)], items[Math.floor(Math.random() * items.length)]));