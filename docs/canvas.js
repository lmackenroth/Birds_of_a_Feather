// changed to make it ES modules

function project(p5) {
    // This will hold all of my bird instances
    // const birds = [];
    let gradiant;
    console.log('we made it')

    p5.setup = () => {
        // Adjust to the size of the screen dynamically
        p5.createCanvas(1000, 500);
        console.log('making canvas')
        gradiant = new Gradiant(p5);
    };

    p5.draw = () => {
        gradiant.render(); // Render gradient background
    };
}

// Initialize the p5 instance
new p5(project);
