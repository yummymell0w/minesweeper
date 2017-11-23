'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Create the Board Class
var Board = exports.Board = function () {
    function Board(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Board);

        this._numberOfRows = numberOfRows;
        this._numberOfColumns = numberOfColumns;
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    //Add a playerBoard() Getter Method


    _createClass(Board, [{
        key: 'flipTile',


        //Add flipTile() to the Board Class. Add flipTile() - allows user to flp a tile
        value: function flipTile(rowIndex, columnIndex) {
            if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
                console.log('This tile has already been flipped!');
            } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
                this._playerBoard[rowIndex][columnIndex] = 'B'; //we should place a bomb at those same row and column indices on the playerBoard.
            } else {
                this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
            }
            this._numberOfTiles--;
        }
    }, {
        key: 'getNumberOfNeighborBombs',


        //Add getNumberOfNeighborBombs() to the Board Class. Displaying the number of bombs adjacent to the flipped tile
        value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
            var _this = this;

            var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
            var numberOfRows = this._bombBoard.length;
            var numberOfColumns = this._bombBoard[0].length;
            var numberOfBombs = 0;
            neighborOffsets.forEach(function (offset) {
                var neighborRowIndex = rowIndex + offset[0];
                var neighborColumnIndex = columnIndex + offset[1];
                if (0 <= neighborRowIndex && neighborRowIndex < numberOfRows && 0 <= neighborColumnIndex && neighborColumnIndex < numberOfColumns) {
                    if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                        numberOfBombs++;
                    }
                }
            });
            return numberOfBombs;
        }
    }, {
        key: 'hasSafeTiles',


        //Check for Safe Tiles
        value: function hasSafeTiles(numberOfTiles, numberOfBombs) {
            return this._numberOfTiles !== this._numberOfBombs;
        }

        //An Updated printBoard() Function

    }, {
        key: 'print',
        value: function print() {
            console.log(this._playerBoard.map(function (row) {
                return row.join(' | ');
            }).join('\n'));
        }
    }, {
        key: 'playerBoard',
        get: function get() {
            return this._playerBoard;
        }
    }], [{
        key: 'generatePlayerBoard',


        //Dynamically Generate a Player Board
        value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
            var board = [];
            for (var i = 0; i < numberOfRows; i++) {
                var rows = [];
                for (var j = 0; j < numberOfColumns; j++) {
                    rows.push(' ');
                }
                board.push(rows);
            }
            return board;
        }
    }, {
        key: 'generateBombBoard',


        //Dynamically Generate a Bomb Board
        value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
            var board = [];
            for (var i = 0; i < numberOfRows; i++) {
                var rows = [];
                for (var j = 0; j < numberOfColumns; j++) {
                    rows.push(null);
                }
                board.push(rows);
            }
            //Randomly Place Bombs on the Bomb Board
            var numberOfBombsPlaced = 0;
            //An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
            while (numberOfBombsPlaced < numberOfBombs) {
                var randomRowIndex = Math.floor(Math.random() * numberOfRows);
                var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
                //Fix generateBombBoard()
                if (randomRowIndex !== 'B' && randomColumnIndex !== 'B') {
                    board[randomRowIndex][randomColumnIndex] = 'B';
                    numberOfBombsPlaced++;
                }
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
            }
            return board;
        }
    }]);

    return Board;
}();
//# sourceMappingURL=board.js.map