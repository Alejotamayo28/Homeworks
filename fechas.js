const date = new Date();
console.log(date);

const nacimiento = new Date(2005, 0, 28);
console.log(nacimiento);

comprobante = true;
if (date.getTime() > nacimiento.getTime()) {
  comprobante = true;
} else {
  comprobante = false;
}
console.log(comprobante);

const dia = nacimiento.getDate()
console.log(dia)

const mes = nacimiento.getMonth()
console.log(mes)

const anyo = nacimiento.getFullYear()
console.log(anyo)