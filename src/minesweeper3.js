//Dynamically Generate a Player Board
const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
    let board = [];
    for (let i = 0; i < numberOfRows; i++) {
        let rows = [];
        for (let j = 0; j < numberOfColumns; j++) {
            rows.push(' ');
        }
        board.push(rows);
    } return board;
};
//Dynamically Generate a Bomb Board
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
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
    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[numberOfRows][numberOfColumns] = 'B';
    }




    return board;
};


