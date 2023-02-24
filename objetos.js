const datos = {
  nombre: "Alejandro",
  apellido: "Vergara",
  edad: "18",
  altura: "1.72",
  eresDesarrollador: true,
};

const edad_duplicada = datos.edad;

const lista_2 = [datos];
console.log(...lista_2);

const amigos = [
  { nombre: "Juanes", edad: "19" },
  { nombre: "JuanDavid", edad: "22" },
];
console.log(...amigos);

console.log(amigos.sort((a, b) => b.edad - a.edad));
