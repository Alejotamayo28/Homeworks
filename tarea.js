const operacion = require("./index");
const user = "Vergara";

try {
  operacion.tarea(user);
} catch (error) {
  console.log(`No eres el usuario principal`);
}
