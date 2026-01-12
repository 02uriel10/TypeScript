const suma: (a: number, b: number) => number = (num1: number, num2: number): number => {
    return num1 + num2;
}
console.log("Suma: " + suma(5, 10)); // Suma: 15
//Callbacks
const myCallback = function (text: string) {
    console.log("Callback ejecutado: " + text);
}
function functCallback(text:string, callback: (text:string) => void) {
    console.log("Funcion con callback: " + text);
    callback(text);
}
functCallback("Hello from callback", myCallback);