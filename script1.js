// console.log('HELLO ')
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEL = document.querySelector("#card-el")
//let sumEl = document.querySelector("#sum-el")

let player = {
 name : "Mugaira",
 chips : 200,
 tags : ["pro","achiver"],
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name  + " ["+ player.tags +"] " + " : $" + player.chips

function getRandomCard() {

 let randomNumber = Math.floor(Math.random() * 13) + 1

 if (randomNumber === 1) {
  return 11
 }
 else if (randomNumber > 10) {
  return 10
 }
 else {
  return randomNumber
 }

}


function startGame() {
 isAlive = true

 let firstCard = getRandomCard()
 let secondCard = getRandomCard()

 cards = [firstCard, secondCard]

 sum = firstCard + secondCard

 renderGame()
}

function renderGame() {

 cardEL.innerHTML = "Cards: "

 for (let i = 0; i < cards.length; i++) {

  cardEL.textContent += cards[i] + " "

 }
 if (sum <= 20) {

  message = "do you want do draw a new card"
 }

 else if (sum === 21) {

  message = "BLACKJACK"
  hasBlackJack = true

 }
 else {

  message = "out of game"
  isAlive = false

 }
 messageEl.textContent = message

 sumEl.textContent = "Sum: " + sum
}



function newCard() {
 message = "Drawing a new card from Deck"
 if(isAlive === true && hasBlackJack === false){

 let thirdCard = getRandomCard()

 cards.push(thirdCard)

 sum += thirdCard

 renderGame()
 }
}


//console.log(newCard)



