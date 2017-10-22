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
    //An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced ++;
    }
    return board;
};
//An Updated printBoard() Function
const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};
//Create Both Boards
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
//Print Both Boards
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
