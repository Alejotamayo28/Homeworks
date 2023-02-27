const logger = require(`./logger`);

logger.info("Hola, esto es un mensaje informativo");
logger.debug("Esto es un mensaje de debug");
logger.warn("Esto es un mensaje de advertencia");
logger.error("Hola, esto es un error");

function tarea(user) {
  const mainUser = "Alejandro";
  if (user === mainUser) {
    console.log("Eres el main User");
  } else {
throw new Error()  }
}
module.exports = {
  tarea: tarea,
};
