export class Module1{
    print(){
        localPrint("Print from Module 1");
    }
}
function localPrint(text:string){
    console.log("Local Print from Module 1");
}