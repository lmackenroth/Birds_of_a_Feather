//i need to split this up into more classes, it would be easier to look at I think

import { colorfulBirds } from './bird';
import P5Lib from 'p5';

export class body implements colorfulBirds {
    //i need to draw triangles that will essentially act as the birds body
    //I want it to draw the triangle where I click my mouse
    //I want the fill and stroke to be different colors
    private p5: P5Lib;
    private strokeColor: P5Lib.Color;
    private fillColor: P5Lib.Color;
    private triangles: { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number }[] = [];
    //p5


    //contructor
    constructor(p5: P5Lib) {
        //setting p5 const
        this.p5 = p5;
        // sets fill color: white
        this.fillColor = p5.color(255, 255, 255);
        //sets border color: black
        this.strokeColor = p5.color(0, 0, 0); // Default stroke color: black
        console.log('triangles initialized');
    }

    //draw the triangles
    draw(): void {
        this.p5.stroke(this.strokeColor);
        this.p5.fill(this.fillColor);
        //each triangel will have 3 pairs of verticies
        this.triangles.forEach((triangle) => {
            //set up each vetex pair
            this.p5.triangle(
                triangle.x1, triangle.y1,
                triangle.x2, triangle.y2,
                triangle.x3, triangle.y3
            );
        });

    }

    move(): void {
        //later they'll move

    }
    //set random colors for triangles
    setColors(): void {
        //set the stroke
        this.strokeColor = this.p5.color(
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            this.p5.random(0, 255)
        );
        //set the fill
        this.fillColor = this.p5.color(
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            this.p5.random(0, 255)
        );

    }
    AddTriangle(): void {
        const x = this.p5.mouseX;
        const y = this.p5.mouseY;
        //i want the birds to "lean" so i am setting an angle
        const angle = this.p5.radians(30);
        //to get some size variation!
        const size = this.p5.random(20, 50);

        //in order to get the angle and sizes, we have to do math
        const x1 = x; // Top vertex
        const y1 = y - size;

        const x2 = x - size * this.p5.cos(angle); // Bottom-left vertex
        const y2 = y + size * this.p5.sin(angle);

        const x3 = x + size * this.p5.cos(angle); // Bottom-right vertex
        const y3 = y + size * this.p5.sin(angle);
        this.triangles.push({
            x1,x2,x3,y1,y2,y3
        });

    }

}
