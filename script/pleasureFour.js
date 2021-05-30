const squares = document.querySelectorAll('.square')
const architecture = document.querySelector('.architecture')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('architecture')
    })

    let randomSquare = squares[Math.floor(Math.random() *50)]
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