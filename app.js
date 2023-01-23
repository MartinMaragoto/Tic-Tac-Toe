const gameData = [

[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
]
let currentRound = 1
let editedPlayer = 0
let activePlayer = 0
let gameIsOVer= false
//objeto que almacena info de los jugadores
const players = [
    {

        name: '',
        symbol: 'X'
    },

    {

        name: '',
        symbol: 'O'
    }
]


//Botones
let editButton1= document.getElementById ('edit-player-1-btn')
let editButton2= document.getElementById ('edit-player-2-btn')


let cancelButton= document.getElementById ('cancel')
let confirmButton= document.getElementById ('confirm')


//Ventana emergente
let modal= document.getElementById ('config-overlay')
let backdrop= document.getElementById ('backdrop')
let configOutputError= document.getElementById ('config-errors')


//input
let formElement= document.querySelector ('form')
let modalInput= document.getElementById ('playername')

//NEW GAME

let newGameButton = document.getElementById ('new-game-button')
let gameGridElement= document.getElementById ('game-board')
let gameAreaElement = document.getElementById ('active-game')
const gameFieldElements = document.querySelectorAll ('#game-board li')

//its your turn and the winner is...

let itsYourTurn= document.getElementById ('active-player-name')
//Game over

const gameOverElement = document.getElementById ('game-over')

//EVENT LISTENER de la VENTANA EMERGENTE
editButton1.addEventListener('click', editPlayer1Name)
editButton2.addEventListener('click', editPlayer2Name)

cancelButton.addEventListener('click',cancelPlayerNameEdit)
confirmButton.addEventListener('click',confirmPlayerNameEdit)
backdrop.addEventListener ('click', cancelPlayerNameEdit)
formElement.addEventListener('submit', savePlayerConfig)

//EVENT LISTENER de NEW GAME
newGameButton.addEventListener ('click', StartNewGame)

for (const gameFieldElement of gameFieldElements ) {
    gameFieldElement.addEventListener ('click',selectGameField )

}
