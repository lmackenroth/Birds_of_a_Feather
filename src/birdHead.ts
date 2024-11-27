//import { colorfulBirds } from "./bird";
import { body } from "./birdBody";
import P5Lib from 'p5';


export class head extends body {
    //p5
    //i need to set the veticies here
    /*public circles = { strokeColor: P5Lib.Color,
        fillColor: P5Lib.Color
      }[] = [];*/

    //contructor
    constructor(p5: P5Lib) {
        super(p5);
        this.p5 = p5;
        console.log('triangles initialized');
    }

    override draw(): void {
        
    }

    AddCricle(): void {


    }

}