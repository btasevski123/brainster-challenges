
let lenght = +prompt("Enter the lenght od a cube");

function Cube(a) {

    this.cubeArea = function () {
        return Math.floor((a * a) * 6);
    };
    this.cubePerimeter = function () {
        return Math.floor(a * 12);
    };
}


const newCube = new Cube(lenght);

console.log(`The area of cube is ${newCube.cubeArea()}.`);

console.log(`The perimetar of cube is ${newCube.cubePerimeter()}.`);


// this is extra code because of design.
const div = document.createElement("div");
const pArea = document.createElement("p");
const pPerimetar = document.createElement("p");

pArea.textContent = `The area of cube is ${newCube.cubeArea()}.`;
pPerimetar.textContent = `The perimetar of cube is ${newCube.cubePerimeter()}.`;


document.body.append(div);
div.append(pArea, pPerimetar);