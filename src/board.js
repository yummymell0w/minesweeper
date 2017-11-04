//Create the Board Class
export class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfRows = numberOfRows;
        this._numberOfColumns = numberOfColumns;
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

//Add a playerBoard() Getter Method
    get playerBoard() {
        return this._playerBoard;
    }

    //Add flipTile() to the Board Class. Add flipTile() - allows user to flp a tile
    flipTile(rowIndex, columnIndex) {
        if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
            console.log('This tile has already been flipped!');
        } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B'; //we should place a bomb at those same row and column indices on the playerBoard.
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles--;
    };

    //Add getNumberOfNeighborBombs() to the Board Class. Displaying the number of bombs adjacent to the flipped tile
    getNumberOfNeighborBombs(rowIndex, columnIndex) {
        const neighborOffsets = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        let numberOfBombs = 0;
        neighborOffsets.forEach(offset => {
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];
            if (0 <= neighborRowIndex && neighborRowIndex < numberOfRows &&
                0 <= neighborColumnIndex && neighborColumnIndex < numberOfColumns) {
                if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                    numberOfBombs++;
                }
            }
        });
        return numberOfBombs;
    };

    //Check for Safe Tiles
    hasSafeTiles(numberOfTiles, numberOfBombs) {
        return this._numberOfTiles !== this._numberOfBombs;
    }

    //An Updated printBoard() Function
    print() {
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
    };

    //Dynamically Generate a Player Board
    static generatePlayerBoard(numberOfRows, numberOfColumns) {
        let board = [];
        for (let i = 0; i < numberOfRows; i++) {
            let rows = [];
            for (let j = 0; j < numberOfColumns; j++) {
                rows.push(' ');
            }
            board.push(rows);
        }
        return board;
    };

    //Dynamically Generate a Bomb Board
    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
        let board = [];
        for (let i = 0; i < numberOfRows; i++) {
            let rows = [];
            for (let j = 0; j < numberOfColumns; j++) {
                rows.push(null);
            }
            board.push(rows);
        }
        //Randomly Place Bombs on the Bomb Board
        let numberOfBombsPlaced = 0;
        //An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
        while (numberOfBombsPlaced < numberOfBombs) {
            let randomRowIndex = Math.floor(Math.random() * numberOfRows);
            let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
            //Fix generateBombBoard()
            if (randomRowIndex !== 'B' && randomColumnIndex !== 'B') {
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
            }
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }
        return board;
    };
}

const g = new Game(5,6,11);
g.playMove(3,4);