const lista = ["Arroz", "Cafe", "Limon", "Carne", "Frijoles"];

lista.unshift("Aceite_de_Girasol");
console.log(...lista);

lista.unshift();
console.log(...lista);

console.log(...lista.splice(1));

const peliculas = [
  { nombre: "PacificRIm", director: "Guillermo", fecha: 2013 },
  { nombre: "Lalaland", director: "Damien", fecha: 2016 },
  { nombre: "Titanic", director: "James", fecha: 1997 },
];
// -------------------------
let pelicula_posterior = peliculas.filter((objeto) => objeto.fecha <= 2010);
console.log(...pelicula_posterior);

// ---------------------------
const newArray = peliculas.map((element) => `${element.director}`);
console.log(...newArray);

const newArray1 = peliculas.map((element) => `${element.nombre}`);
console.log(...newArray1);

console.log(...peliculas.map((element) => `${element.director}`));

console.log(...peliculas.map((elemnt) => `${elemnt.nombre}`));

// ----------------------------

console.log(...peliculas.map((elemnt)=>`${elemnt.nombre}, ${elemnt.director}`))

const tarea_antepenultima = peliculas.map(function(elemnt){
    return `${elemnt.nombre}: ${elemnt.director}`
})
console.log(tarea_antepenultima)

const propagacion = peliculas.map(function(element){
    return `${element.director}: ${element.nombre}. `
})
console.log(...propagacion)