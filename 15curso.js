let nombre = "Alejandro"
let apellido = "Vergara Tamayo"
console.log(`${nombre} ${apellido}`)

let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let NombreEstudiante_length = nombre.length
console.log(NombreEstudiante_length)

let Primera_letra_nomber = nombre[0]
console.log(nombre.lastIndexOf("o"))

console.log(estudiante.split(" ").join(""))
let estudiante_sin_espacios = estudiante.replace(/\s+/g, '')
console.log(estudiante_sin_espacios)

let nombre1 = false
let estudiante1 = `${nombre} ${apellido}`

if(estudiante1.includes(nombre)){
    nombre1 = true
}else{
    nombre1 = false
}
console.log(nombre1)