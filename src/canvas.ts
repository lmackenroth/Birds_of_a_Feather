import P5Lib from 'p5';
//import { Birds } from './project';
import gradiants from './gradiant';
import { body } from './birdBody';

function project(p5: P5Lib) {
    //this will hold all of my bird instances
    //const birds: Birds[] = [];
    let gradiant: gradiants;
    let birdBody: body;

    p5.setup = () => {
        //figure out how to make it adjust to the of the screen dynamically
        p5.createCanvas(1000, 500);
        gradiant = new gradiants(p5);
        birdBody = new body(p5)
    };
    p5.draw = () => {
        gradiant.render(); // Render gradient background
        birdBody.draw();
    };

    p5.mousePressed = () => {
        birdBody.AddTriangle();

        birdBody.setColors()

    };

}

new P5Lib(project);