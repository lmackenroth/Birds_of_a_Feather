//i need to split this up into more classes, it would be easier to look at I think

import { colorfulBirds } from './bird';
import P5Lib from 'p5';

export class body implements colorfulBirds {
    //i need to draw triangles that will essentially act as the birds body
    //I want it to draw the triangle where I click my mouse
    //I want the fill and stroke to be different colors
    public p5: P5Lib;
    public triangles: { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number; 
        strokeColor: P5Lib.Color;
        fillColor: P5Lib.Color;
      }[] = [];
    //p5


    //contructor
    constructor(p5: P5Lib) {
        //setting p5 const
        this.p5 = p5;
        console.log('triangles initialized');
    }

    //draw the triangles
    draw(): void {
        
        //each triangel will have 3 pairs of verticies
        this.triangles.forEach((triangle) => {
            this.p5.stroke(triangle.strokeColor);
            this.p5.fill(triangle.fillColor);
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
       
       //i want to try something with this later
       //maybe expand with colors of different body parts? 

    }
    AddTriangle(): void {
        const x = this.p5.mouseX;
        const y = this.p5.mouseY;
        //to get some size variation!
        const size = this.p5.random(20, 10);
        //i want the birds to "lean" so i am setting an angle
        //const slouch = this.p5.random(-size / 2, size / 2);



        //in order to get the leaning and sizes, we have to do math to calculate each vertex
        const x1 = x - size/2;
        const y1 = y - size;

        const x2 = x + size/2;
        const y2 = y + size;

        const x3 = x + 3 * (size/2);
        const y3 = y + size;

        const fillColor = this.p5.color(
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            200
        );
        
        const strokeColor = this.p5.color(
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            120
        );

        this.triangles.push({
            x1, x2, x3, y1, y2, y3,
            fillColor,
            strokeColor,
        });

    }

}
