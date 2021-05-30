const squares = document.querySelectorAll('.square')
const eczema = document.querySelector('.eczema')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition

function areyousureFunction() {
    alert("Are you sure you want to try and whack Eczema?");
  }

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('eczema')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('eczema')

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

function moveEczema() {
    timerId = setInterval(randomSquare, 600)
}

moveEczema()