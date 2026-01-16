interface IdName{
    id: number;
    name: string;
}
interface DescValue{
    desc: string;
    value: number;
}
function PrintDescOrName(obj: IdName | DescValue): void {
    if ('id' in obj) {
        console.log(`Nombre: ${obj.name}`);
    } else {
        console.log(`Descripción: ${obj.desc}`);
    }
}
console.log(PrintDescOrName({name: "Alice", id: 1 }));
console.log(PrintDescOrName({value: 100, desc: "Un artículo de ejemplo" }));
type PropiedadNombreOId = keyof IdName

function getPropiedad(key: PropiedadNombreOId, obj: IdName) {
console.log(key + ": " + obj[key]);
}
getPropiedad("name", {id: 10, name: "Bob"});
getPropiedad("id", {id: 20, name: "Charlie"});