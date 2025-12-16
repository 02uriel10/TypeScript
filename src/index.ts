let text: string = "Hello";  //inferir explicito
let text2 = "TypeScript";   // inferir no explicito
text="1";
function printCoord(pt:{ x: number; y: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 200 });
