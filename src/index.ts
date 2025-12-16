let text: string = "Hello";  //inferir explicito
let text2 = "TypeScript";   // inferir no explicito
text="1";
function printCoord(pt:{ x: number; y: number}) {
    console.log("The coordinate's x value is " + pt.x); //pt es el acceso a la propiedad x, lo mismo para y
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 200 });

function print(){

}
//Tipado pato
//Indica que si un objeto tiene las propiedades necesarias, es valido, y si mas de un objeto tiene esas propiedades, son del mismo tipo
let persona= { nombre: 'Jose', edad: 15, print }; ;
persona = { nombre: "Juan", edad: 30, print };

var obj1= {id:1, name:"objeto1", booleano:true, print };
var obj2= {id:2, name:"objeto2" };
// en este ejemplo notamos que obj2 no tiene la propiedad booleano ni el metodo print, pero aun asi es valido
// porque las propiedades id y name son suficientes para que sea del mismo tipo que obj1, siendo que obj2 no tiene limitantes para tener mas propiedades o metodos
obj2= obj1;// valido
obj1= obj2;// no valido, obj2 no tiene las propiedades necesarias
console.log(obj1);
console.log(obj2);