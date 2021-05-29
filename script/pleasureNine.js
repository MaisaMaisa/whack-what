const squares = document.querySelectorAll('.square')
const structure = document.querySelector('.structure')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timeId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('structure')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('structure')

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

function moveStructure() {
    timerId = setInterval(randomSquare, 500)
}

moveStructure()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
   
    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('We are sorry to inform you that your time is out. If numbers make people happy, yours is: ' + result)
    }
   
   }
   
let countDownTimerId = setInterval(countDown, 1000)