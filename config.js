function editPlayer1Name(event) {
editedPlayer = +event.target.dataset.playerid   
modal.style.display='block'
backdrop.style.display= 'block'
modalInput.textContent=''


}
function editPlayer2Name(event) {
    editedPlayer = +event.target.dataset.playerid  
    modal.style.display= 'block'
    backdrop.style.display= 'block'
    modalInput.textContent=''
    
    
    }
    
function cancelPlayerNameEdit() {

    modal.style.display='none'
    backdrop.style.display='none'
    formElement.firstElementChild.classList.remove('error')
    configOutputError.textContent=''
    modalInput.textContent=''

}

function confirmPlayerNameEdit() {

    modal.style.display='none'
    backdrop.style.display='none'
    formElement.firstElementChild.classList.remove('error')
    configOutputError.textContent=''
    modalInput.textContent=''

}

function savePlayerConfig (event){

    event.preventDefault()
    const formData = new FormData (event.target)
    const enteredPlayerName = formData.get ('username').trim()
    
    if (!enteredPlayerName) {

        event.target.firstElementChild.classList.add('error')
        configOutputError.textContent= 'Please enter a valid name'
        return
    } 

    const updatedPlayerDataElement1 = document.getElementById ('player-' + editedPlayer + '-data')
    updatedPlayerDataElement1.children[1].textContent = enteredPlayerName

    if (editedPlayer === 1) {

        players[0].name = enteredPlayerName
    } else {
        players[1].name = enteredPlayerName
    }
    
}




