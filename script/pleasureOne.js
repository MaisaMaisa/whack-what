const squares = document.querySelectorAll('.square')
const facebook = document.querySelector('.facebook')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 666
let timeId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('facebook')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('facebook')

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

function moveFacebook() {
    timerId = setInterval(randomSquare, 6000)
}

moveFacebook()

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