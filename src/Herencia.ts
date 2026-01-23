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
    private id:number
    protected name:string
    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }
    print(text:string):void{
        console.log("Imprimiendo desde BaseClass"+text)
    }
    printId(){
        console.log(this.id);
    }
}
class MyClass extends BaseClass{
    
    constructor(id:number,name:string){
        super(id,name);
        this.name=name;

    }

    printName(){
        console.log("Jelipe ");
    }
    

    print(text: string): void{
        console.log("Imprimiendo desde MyClass"+text)
        super.print(text);
    }
}
const myClass: MyClass=new MyClass(1,"Ana");

myClass.printName();
myClass.printId();
//Metodos Protegidos