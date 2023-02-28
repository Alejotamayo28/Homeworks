class Estudiante {
  constructor(nombre, lenguajes1) {
    this.nombre = nombre;
    const lenguajes = ["Javascript", "HTML", "CSS"];
    this.lenguajes = lenguajes1
  }
  obtenDatos() {
    console.log(
      `Tu nombre es: ${this.nombre} y tu lenguaje es ${this.lenguajes}`
    );
  }
}

const persona = new Estudiante("Alejandro","Javascript");
console.log(persona);
