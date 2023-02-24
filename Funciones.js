function asd() {
  console.log("true");
}
asd();

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);
});

function* indicePares() {
  let i = 0;
  while (true) {
    i++;
    if (i === 10) {
      return i;
    }
    yield i * 2;
  }
}
const gen = indicePares();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);