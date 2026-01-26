abstract class EmpleadoBase{
    id:number;
    nombre:string;
    constructor(id: number, nombre: string){
        this.id=id;
        this.nombre=nombre;
    }
    abstract trabajar(text:string): void;
    abstract entrada(hora:string): void;
}
class Empleado extends EmpleadoBase{
    entrada(hora: string): void {
        throw new Error("Method not implemented.");
    }
    constructor (name:string)
    {
        super(1,name);
    }
    trabajar(text: string): void {
        console.log(text)
    }
}
class Administrador extends EmpleadoBase{
    entrada(hora: string): void {
        throw new Error("Method not implemented.");
    }
    trabajar(text: string): void {
        console.log("Hola desde Administrador")
    }

}
let empleado = new Empleado("Mike");