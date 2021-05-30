const squares = document.querySelectorAll('.square')
const gerald = document.querySelector('.gerald')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10000
let timeId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('gerald')
    })

    let randomSquare = squares[Math.floor(Math.random() * 12)]
    randomSquare.classList.add('gerald')

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

function moveGerald() {
    timerId = setInterval(randomSquare, 500)
}

moveGerald()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
   
    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('Time is out and unfortunately, Gerald keeps on smiling.')
    }
   
   }
   
let countDownTimerId = setInterval(countDown, 1000)