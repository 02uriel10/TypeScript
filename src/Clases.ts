interface IPrint{
    print: ()=> void;
}

class Persona{
    id:number | undefined;
    print():void{
        console.log(`Imprimiendo......` + this.id);
}
}
class Gerente{
    id:number | undefined;
    print():void{
        console.log(`Gerente imprimiendo......` );
}
}
const persona= new Persona();
persona.id=123;
persona.print();
function imprimir(obj: IPrint){
    obj.print();
}
const gerente= new Gerente()
imprimir(persona);
imprimir(gerente);

