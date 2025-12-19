//Propagacion de tipos en TypeScript
let obj1: object = { id: 1, name: 'Juan' }
let obj2: object = { lastName: 'Guerra' }
let obj3 = {edad: 1, ...obj1, ...obj2 }
console.log("obj3: " +JSON.stringify(obj3)) // { edad: 1, id: 1, name: 'Juan', lastName: 'Guerra' }
// Propagacion en arreglos
let arreglo1: number[] = [1,2,3]
let arreglo2: number[] = [4,5,6]
let arreglo3: number[] = [...arreglo1, ...arreglo2]
console.log("arreglo3: " +arreglo3) // [1,2,3,4,5,6]
//Tuplas
let tupla1: [number, string, boolean] = [1, 'Hola', true]
let tupla2: [number, string, boolean] = [2, 'Adiós', false]
let tupla3: [number, string, boolean, number, string, boolean] = [...tupla1, ...tupla2]
console.log("tupla3: " +tupla3) // [1, 'Hola', true, 2, 'Adiós', false]
//Desestructuración de objetos
let persona = { id: 1, nombre: 'Juan', edad: 30 }
let { id, nombre, edad } = persona
console.log("id: " +id+ ", nombre: " +nombre+ ", edad: " +edad) // id: 1, nombre: Juan, edad: 30