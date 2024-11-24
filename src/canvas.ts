import P5Lib from 'p5';
import { Project } from './project';
import gradiants from './gradiant';

function project(p5: P5Lib) {
    //this will hold all of my bird instances
    const birds: Project[] = [];
    let gradiant: gradiants;

    p5.setup = () => {
        //figure out how to make it adjust to the of the screen dynamically
        p5.createCanvas(1000, 500);
        gradiant = new gradiants(p5);
    };
    p5.draw = () => {
        gradiant.render(); // Render gradient background
    };
}

new P5Lib(project);