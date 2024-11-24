import p5 from 'p5'; // Import p5 library
import { Birds } from './project'; // Import Birds interface or related functionality
import Gradiants from './gradiant'; // Import Gradiants class

function project(p5) {
    // This will hold all of my bird instances
    const birds = [];
    let gradiant;

    p5.setup = () => {
        // Make the canvas adjust dynamically (modify dimensions as needed)
        p5.createCanvas(1000, 500);
        gradiant = new Gradiants(p5);
    };

    p5.draw = () => {
        gradiant.render(); // Render gradient background
    };
}

new p5(project);
