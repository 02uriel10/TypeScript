interface Print{
    print: ()=> void;
}

class Persona implements Print{
    readonly suscribe: boolean
     constructor (private _id: number){
        this.suscribe= true
     }
     private privPrint():void{
        console.log("imprimiendo....")
     }

     get id(): number{
        console.log("Get being used")
        return this._id
     }

     print(): void{
         this.privPrint()
     }
     set id(id:number){
        console.log("Set being used")
        this._id=id
     }
    
}
class Gerente{
    id:number | undefined;
    print():void{
        console.log(`Gerente imprimiendo......` );
}
}
const persona= new Persona(10);

console.log(persona.suscribe)
persona.print();
persona.id=20
function imprimir(obj: Print){
    obj.print();
}
const gerente= new Gerente()
imprimir(persona);
imprimir(gerente);

//Funciones estaticas
class StaticClass{
    static print(){
        console.log(10)
    }
}
StaticClass.print()

class staticCount{
    static count=0;
    contar(){
        staticCount.count++;
    }
}
const primerInstancia= new staticCount()
const segundaInstancia= new staticCount()
console.log(staticCount.count);
primerInstancia.contar();
console.log(staticCount.count);
segundaInstancia.contar();
console.log(staticCount.count);
