interface ID{
    id: number| string;
}
interface Age{
    age:number
}
interface IdName extends ID, Age{//Se considera mala practica implementar muchas interfaces en una sola clase, recomendable maximo 4
    name: string;
    //name:string|number; dara error dado que se trata de acortar y no de agregar mas
}
class user implements IdName{
    name: string="";
    id: number=0
    age: number=20
}
//Herencia de clases; las clases solo pueden heredar de una clase padre, mientras que las interfaces pueden heredar de muchas otras interfaces
class BaseClass{
    id:number=0
    constructor(id:number){
        this.id=id;
    }
    print(text:string):void{
        console.log("Imprimiendo desde BaseClass"+text)
    }
}
class MyClass extends BaseClass{
    name:string=""
    constructor(id:number,name:string){
        super(id);
        this.name=name;

    }
    print(text: string): void{
        console.log("Imprimiendo desde MyClass"+text)
        super.print(text);
    }
}
const myClass: MyClass=new MyClass(1,"Ana");
const baseClass: BaseClass=new BaseClass(1);
console.log(myClass.id);
console.log(myClass.name);
myClass.print("");
baseClass.print("");