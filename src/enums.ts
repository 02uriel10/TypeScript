enum DoorState{
    Open,
    Closed
}
function printDoorState(state: DoorState){
    console.log("Valor del ennum: " + state);
    switch(state){
        case DoorState.Open:
            console.log("The door is open");
            break;
        case DoorState.Closed:
            console.log("The door is closed");
            break;
    }
}
printDoorState(DoorState.Open);
printDoorState(DoorState.Closed);
// Expresiones condicionales
const numero: number= 10;
const mensaje: string = numero > 10 ? "El número es mayor a 10" : "El número es menor o igual a 10";
console.log(mensaje);