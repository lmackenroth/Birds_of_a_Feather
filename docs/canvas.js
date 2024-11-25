"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p5_1 = require("p5");
//import { Birds } from './project';
var gradiant_1 = require("../src/gradiant");
function project(p5) {
    //this will hold all of my bird instances
    //const birds: Birds[] = [];
    var gradiant;
    p5.setup = function () {
        //figure out how to make it adjust to the of the screen dynamically
        p5.createCanvas(1000, 500);
        gradiant = new gradiant_1.default(p5);
    };
    p5.draw = function () {
        gradiant.render(); // Render gradient background
    };
}
new p5_1.default(project);
