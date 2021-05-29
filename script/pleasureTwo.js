const squares = document.querySelectorAll('.square')
const confidence = document.querySelector('.confidence')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10000
let timeId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('confidence')
    })

    let randomSquare = squares[Math.floor(Math.random() * 55)]
    randomSquare.classList.add('confidence')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveConfidence() {
    timerId = setInterval(randomSquare, 1000)
}

moveConfidence()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
   
    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('GAME OVER! Your final score is ' + result)
    }
   
   }
   
let countDownTimerId = setInterval(countDown, 1000)