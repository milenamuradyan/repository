class BlackDemon {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
        this.acted = false;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinatesKill() {
        this.directionsKill = [];
        for (var i = this.y; i < matrix.length; i++) {
            this.directions.push([this.x, i]);
        }
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
    chooseCellKill(num) {
        this.getNewCordinatesKill();
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
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));
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
    kill() {

        if (this.acted == false) {
            var karmirner = this.chooseCellKill(5);
            if (karmirner.length > 0) {
                for (var i in karmirner) {
                    var x = karmirner[i][0];
                    var y = karmirner[i][1];
                    matrix[y][x] = 0;
                    this.acted = true;
                }
            }
            else {
                this.move();
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
            matrix[newY][newX] = new BlackDemon(newX, newY, 4);
        }
    }


}