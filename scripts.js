// game container
// generate matrix of tiles
// each file associated with an object in array
// on tile click:
// check if tile is mined
// if not mined, display number of bordering mines
// if mined, display all tiles and lose game
// if all unmined tiles are discovered and no mines are clicked, win game

let body = document.querySelector(".body");

let gameParameterButton = document.createElement("button");
gameParameterButton.classList.add("button");
gameParameterButton.textContent = "New Game!";
body.appendChild(gameParameterButton);

gameParameterButton.addEventListener("click", () => {
    let boardWidth = Number(prompt("How wide should the game be?"));
    let boardHeight = Number(prompt("How tall should the game be?"));
    createBoard(boardWidth, boardHeight);
})

function createBoard (boardWidth, boardHeight) {

    if (boardExists() == true) {
        deleteBoard();
    }

    generateGameContainer();

    generateBoardHTML(boardWidth, boardHeight);
    let boardMatrix = initialiseBoardMatrix(boardWidth, boardHeight);

}

function generateGameContainer () {

    let gameContainer = document.createElement("div");
    gameContainer.classList.add("game-container");
    gameContainer.classList.add("card")
    body.appendChild(gameContainer);

    let scoreContainer = document.createElement("div");
    scoreContainer.classList.add("score-container");
    scoreContainer.classList.add("card");
    body.appendChild(scoreContainer);

}

function generateBoardHTML (boardHeight, boardWidth) {

    let gameContainer = document.querySelector(".game-container");

    for (let rowIndex = 0; rowIndex < boardHeight; rowIndex++) {

        let boardRow = document.createElement("div");
        boardRow.classList.add("row");
        gameContainer.appendChild(boardRow);

    }

    let boardRows = document.getElementsByClassName("row");

    for (let rowIndex = 0; rowIndex < boardHeight; rowIndex++) {

        for (let columnIndex = 0; columnIndex < boardWidth; columnIndex++) {

            let boardItem = document.createElement("div");
            boardItem.classList.add("board-item");
            boardRows[rowIndex].appendChild(boardItem);

        }
    }
}

function boardExists () {
    let exists = document.querySelector(".game-container");
    if (exists == null) {
        return false
    } else {
        return true
    }
}

function deleteBoard () {
    let gameContainer = document.querySelector(".game-container");
    let scoreContainer = document.querySelector(".score-container");
    gameContainer.innerHTML = "";
    scoreContainer.innerHTML = "";
    gameContainer.remove();
    scoreContainer.remove();
}

function initialiseBoardMatrix (boardHeight, boardWidth) {

    let boardMatrix = [];

    for (let i = 0; i < boardHeight; i++) {
        let currentRow = [];
        for (let x = 0; x < boardWidth; x++) {
            currentRow.push([]);
        }
        boardMatrix.push(currentRow);
    }

    return boardMatrix;
}