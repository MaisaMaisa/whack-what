const squares = document.querySelectorAll('.square')
const creature = document.querySelector('.creature')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10
let timeId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('creature')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('creature')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveCreature() {
    timerId = setInterval(randomSquare, 50)
}

moveCreature()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
   
    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('Here in the studio, we hope you killed none of the sea creatures. But if you managed, you killed ' + result + ' of them.')
    }
   
   }
   
let countDownTimerId = setInterval(countDown, 1000)