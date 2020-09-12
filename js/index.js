const Button = document.getElementById('start')
const CardsContainer = document.getElementById('CardsContainer')
Button.onclick = function () {
    Button.classList.add('display')
    CardsContainer.classList.add('CardsContainer')
}

const cards = document.querySelectorAll('.cards')
cards.forEach(element => {
    element.addEventListener('click', WinCondition)
})

let result = document.createElement('Div')

let Computer = 0

function Computerplay (){
    let number = Math.floor(Math.random() * (3 - 0))
    Computer = cards[number].cloneNode(true)
}

function Battle(card) {
    CardsContainer.classList.remove('display')
    CardsContainer.innerHTML = ''
    CardsContainer.classList.add('cardsBattle')
    CardsContainer.appendChild(card)
    result.classList.add('cardsBattle')
    CardsContainer.appendChild(result)

    cards.forEach(element => {
        element.classList.remove('cards')
        element.classList.add('cardsBattle')
    })

    CardsContainer.appendChild(Computer)
}

function playAgain() {
    const ButtonJogarNovamente = document.createElement('button')
    ButtonJogarNovamente.classList.add('Button')
    ButtonJogarNovamente.textContent = 'Jogar Novamente'
    document.body.appendChild(ButtonJogarNovamente)
    ButtonJogarNovamente.onclick = function () {
        window.location.reload()
    }
}

function WinCondition(event) {
    Computerplay()

    const card = event.target
    
    Battle(card)

    if (card.id == 'pedra') {
        if (Computer.id === cards[0].id) {
            result.textContent = 'Empate'
        }
        if (Computer.id === cards[1].id) {
            result.textContent = 'Você Perdeu'
        }
        if (Computer.id === cards[2].id) {
            result.textContent = 'Você Venceu'
            let fogos = document.getElementById('fogos')
            fogos.classList.remove('display')
        }
    }

    if (card.id == 'papel') {
        if (Computer.id === cards[1].id) {
            result.textContent = 'Empate'
        }
        if (Computer.id === cards[2].id) {
            result.textContent = 'Você Perdeu'
        }
        if (Computer.id === cards[0].id) {
            result.textContent = 'Você Venceu'
            let fogos = document.getElementById('fogos')
            fogos.classList.remove('display')
        }
    }

    if (card.id == 'tesoura') {
        if (Computer.id === cards[2].id) {
            result.textContent = 'Empate'
        }
        if (Computer.id === cards[0].id) {
            result.textContent = 'Você Perdeu'
        }
        if (Computer.id === cards[1].id) {
            result.textContent = 'Você Venceu'
            let fogos = document.getElementById('fogos')
            fogos.classList.remove('display')
        }
    }

    playAgain()
}