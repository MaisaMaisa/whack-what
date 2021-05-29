const squares = document.querySelectorAll('.square')
const architecture = document.querySelector('.architecture')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
// let currentTime = 60
// let timeId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('architecture')
    })

    let randomSquare = squares[Math.floor(Math.random() *57)]
    randomSquare.classList.add('architecture')

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

function moveArchitecture() {
    timerId = setInterval(randomSquare, 1000)
}

moveArchitecture()

// function countDown() {
//     currentTime--
//     timeLeft.textContent = currentTime
   
//     if (currentTime == 0) {
//       clearInterval(countDownTimerId)
//       clearInterval(timerId)
//       alert('GAME OVER! Your final score is ' + result)
//     }
   
//    }
   
// let countDownTimerId = setInterval(countDown, 1000)