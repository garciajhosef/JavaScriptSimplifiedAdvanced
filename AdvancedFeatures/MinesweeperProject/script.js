// 1. Populate a board with tiles/mines
import {
    TILE_STATUSES,
    createBoard,
    revealTile,
    markTile,
    checkWin,
    checkLose,
} from "./minesweeper.js";

const defaultSettings = {
    columns: 10,
    rows: 7,
    mines: 2,
};
const boardElement = document.querySelector(".board");
const minesCounter = document.querySelector("[data-mines-counter]");
const messageText = document.querySelector(".subtext");

boardElement.style.setProperty("--columns-size", defaultSettings.columns);
boardElement.style.setProperty("--rows-size", defaultSettings.rows);
const board = createBoard(defaultSettings);

populateBoard();
minesCounter.textContent = defaultSettings.mines;

function populateBoard() {
    board.forEach((row) => {
        row.forEach((tile) => {
            boardElement.append(tile.tileElement);
            tile.tileElement.addEventListener("click", () => {
                revealTile(board, tile);
                gameEnd();
            });
            tile.tileElement.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                markTile(tile);
                leftMines();
            });
        });
    });
}

function leftMines() {
    const countMines = board.reduce((counter, row) => {
        return (
            counter +
            row.filter((tile) => tile.status === TILE_STATUSES.MARKED).length
        );
    }, 0);

    minesCounter.textContent = defaultSettings.mines - countMines;
}

function gameEnd() {
    const win = checkWin(board);
    const lose = checkLose(board);

    if (win || lose) {
        boardElement.addEventListener("click", stopProp, { capture: true });
        boardElement.addEventListener("contextmenu", stopProp, {
            capture: true,
        });
    }

    if (win) {
        messageText.textContent = "You Win";
    }
    if (lose) {
        messageText.textContent = "You Lose";
        board.forEach((row) => {
            row.forEach((tile) => {
                if (tile.status === TILE_STATUSES.MARKED) markTile(tile);
                if (tile.mine) revealTile(board, tile);
            });
        });
    }
}

function stopProp(e) {
    e.stopImmediatePropagation();
}
