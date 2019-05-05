class WhiteDemon {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.acted = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }


    move() {

        var newCell = random(this.chooseCell(0));
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.acted = true;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();
                }

            }

        }
    }
    move_() {


        var newCell1 = random(this.chooseCell(1));
        if (this.acted == false) {

            if (newCell1) {
                var newX = newCell1[0];
                var newY = newCell1[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = new Grass(this.x, this.y, 1);
                this.x = newX;
                this.y = newY;
                this.acted = true;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();
                }

            }
        }
    }
    eat() {

        var newCell2 = random(this.chooseCell(2));
        var newCell3 = random(this.chooseCell(3));

        if (this.acted == false) {


            if (newCell2) {
                var newX = newCell2[0];
                var newY = newCell2[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.acted = true;
                this.energy++;
                if (this.energy >= 10) {
                    this.mul();
                    this.energy = 8;
                }

            }
            else if (newCell3) {
                var newX = newCell3[0];
                var newY = newCell3[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = this.index;
                this.x = newX;
                this.y = newY;
                this.acted = true;
                this.energy++;
                if (this.energy >= 10) {
                    this.mul();
                    this.move();
                    this.energy = 8;
                }

            }
            else {
                this.move();
                this.move_();
            }

        }
    }

    die() {
        matrix[this.y][this.x] = 0;
    }

    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new WhiteDemon(newX, newY, 5);


        }
    }

}
