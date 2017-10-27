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
        //Fix generateBombBoard()
        if (randomRowIndex !== 'B' && randomColumnIndex !== 'B') {
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced ++;
    }
    return board;
};
//Add getNumberOfNeighborBombs() - displaying the number of bombs adjacent to the flipped tile
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = [
        [-1,-1],
        [-1,0],
        [-1,1],
        [0,-1],
        [0,1],
        [1,-1],
        [1,0],
        [1,1]
    ];
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnIndex + offset[1];
        if (0 <= neighborRowIndex && neighborRowIndex < numberOfRows &&
            0 <= neighborColumnIndex && neighborColumnIndex < numberOfColumns) {
            if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                numberOfBombs ++;
            }
        }
    });
    return numberOfBombs;
};
// Add flipTile() - allows user to flp a tile
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
    if (playerBoard[rowIndex][columnIndex] !== ' ') {
        return 'This tile has already been flipped!';
    } else if (bombBoard[rowIndex][columnIndex] === 'B') {
        playerBoard[rowIndex][columnIndex] = 'B'; //we should place a bomb at those same row and column indices on the playerBoard.
    } else {
       playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,rowIndex,columnIndex);
    }
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
// Use flipTile() - call flipTile function
flipTile(playerBoard,bombBoard,0,0);
console.log('Updated Player Board:');
printBoard(playerBoard);
