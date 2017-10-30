//Create Both Boards
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
//Print Both Boards
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
// Use flipTile() - call flipTile function
flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);





//An Updated printBoard() Function
const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};