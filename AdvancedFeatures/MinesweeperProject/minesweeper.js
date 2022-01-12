//Logic
export const TILE_STATUSES = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
};

export function createBoard({ columns = 5, rows = 5, mines = 4 } = {}) {
    columns = columns > 0 ? columns : 5;
    rows = rows > 0 ? rows : 5;
    const board = [];
    const minesPositions = generateMinePositions(columns, rows, mines);

    for (let x = 0; x < rows; x++) {
        const row = [];
        for (let y = 0; y < columns; y++) {
            const tile = createTile(minesPositions, { x, y });
            row.push(tile);
        }
        board.push(row);
    }
    return board;
}

function createTile(minesPositions, { x, y } = {}) {
    const tileElement = document.createElement("div");
    tileElement.dataset.status = TILE_STATUSES.HIDDEN;
    const tile = {
        tileElement,
        x,
        y,
        mine: minesPositions.some((minePosition) =>
            matchPosition(minePosition, { x, y })
        ),
        get status() {
            return this.tileElement.dataset.status;
        },
        set status(value) {
            this.tileElement.dataset.status = value;
        },
    };
    return tile;
}

export function revealTile(board, tile) {
    if (tile.status !== TILE_STATUSES.HIDDEN) {
        return;
    }

    if (tile.mine) {
        tile.status = TILE_STATUSES.MINE;
        return;
    }

    tile.status = TILE_STATUSES.NUMBER;
    const adjacentTiles = nearbyTiles(board, tile);
    const mines = adjacentTiles.filter((t) => t.mine);
    if (mines.length === 0) {
        adjacentTiles.forEach(revealTile.bind(null, board));
    } else {
        tile.tileElement.textContent = mines.length;
    }
}

function revealMines(board) {
    board.forEach((row) => {
        row.forEach((tile) => {
            if (tile.mine) tile.status = TILE_STATUSES.MINE;
        });
    });
}

export function markTile(tile) {
    if (
        tile.status === TILE_STATUSES.NUMBER ||
        tile.status === TILE_STATUSES.MINE
    )
        return;
    if (tile.status === TILE_STATUSES.MARKED) {
        tile.status = TILE_STATUSES.HIDDEN;
    } else {
        tile.status = TILE_STATUSES.MARKED;
    }
}

export function checkWin(board) {
    return board.every((row) => {
        return row.every((tile) => {
            return (
                tile.status === TILE_STATUSES.NUMBER ||
                (tile.mine &&
                    (tile.status === TILE_STATUSES.HIDDEN ||
                        tile.status === TILE_STATUSES.MARKED))
            );
        });
    });
}

export function checkLose(board) {
    return board.some((row) => {
        return row.some((tile) => {
            return tile.status === TILE_STATUSES.MINE;
        });
    });
}

function generateMinePositions(columns, rows, mines) {
    const positions = [];
    while (mines > 0) {
        const newPosition = {
            x: generateRandomNumber(rows),
            y: generateRandomNumber(columns),
        };
        if (
            !positions.some((position) => matchPosition(position, newPosition))
        ) {
            positions.push(newPosition);
            mines--;
        }
    }
    return positions;
}

function matchPosition(positionA, positionB) {
    return positionA.x === positionB.x && positionA.y === positionB.y;
}

function generateRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function nearbyTiles(board, { x, y }) {
    const tiles = [];

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const tile = board[x + xOffset]?.[y + yOffset];
            if (tile) tiles.push(tile);
        }
    }

    return tiles;
}
