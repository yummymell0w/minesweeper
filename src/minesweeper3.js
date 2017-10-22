/*
const printBoard = board => {
    console.log('Current Board:');
    console.log(board[0].join('|'));
    console.log(board[1].join('|'));
    console.log(board[2].join('|'));
};
let board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];
printBoard(board);
board[0][1] = 1;
board[2][2] = 'B';
printBoard(board);
*/

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


