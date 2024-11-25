

import { colorfulBirds } from './bird';
import P5Lib from 'p5';

export class body implements colorfulBirds{
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

      }

      move(): void {
          
      }
      //set random colors for triangles
      setColors(): void {
        //set the stroke
        this.strokeColor = this.p5.color(
            this.p5.random(0,255),
            this.p5.random(0,255),
            this.p5.random(0,255)
        )
        //set the fill
        this.fillColor = this.p5.color(
            this.p5.random(0,255),
            this.p5.random(0,255),
            this.p5.random(0,255)
        )
          
      }
    
}
