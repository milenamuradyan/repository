var m = 35;
var n = 35;
var matrix = [
    // [0, 0, 0, 0, 0],
    // [1, 0, 3, 0, 0],
    // [0, 1, 0, 0, 0],
    // [0, 0, 1, 0, 4],
    // [1, 1, 0, 5, 0],
    // [1, 1, 2, 0, 0],
    // [1, 1, 0, 0, 0]
];

var side =15;

function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 3, 4, 5]);

        }
         

    }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = new GrassEater(x, y, 2);
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = new Carnivore(x, y, 3);
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = new BlackDemon(x, y, 4);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = new WhiteDemon(x, y, 5);
            }

        }
    }

}



function draw() {




    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            rect(x * side, y * side, side, side);
            if (matrix[y][x].index == 1) {
                fill("green");

            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");

                matrix[y][x].acted = false;
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");

            }
            else if (matrix[y][x].index == 3) {
                fill("red");

                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 4) {
                fill("black");
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 5) {
                fill("#fff");

                matrix[y][x].acted = false;
            }

        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();

            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat();

            }

            else if (matrix[y][x].index == 4) {
                matrix[y][x].kill();

            }
            else if (matrix[y][x].index == 5) {
                matrix[y][x].eat();



            }
        }
    }

}







