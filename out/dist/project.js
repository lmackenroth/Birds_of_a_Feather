import P5Lib from 'p5';
function project(p5) {
    p5.setup = () => {
        p5.createCanvas(1000, 500);
    };
    p5.draw = () => {
        p5.background(0);
        p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
    };
}
new P5Lib(project);
//# sourceMappingURL=project.js.map