const Button = document.getElementById('start')
const CardsContainer = document.getElementById('CardsContainer')
Button.onclick = function () {
    Button.classList.add('display')
    CardsContainer.classList.add('CardsContainer')
}

const Pedra = document.getElementById('PedraContainer')
const Papel = document.getElementById('PapelContainer')
const Tesoura = document.getElementById('TesouraContainer')
const PedraClone = Pedra.cloneNode(true)
PedraClone.classList.remove('cards')
const PapelClone = Papel.cloneNode(true)
PapelClone.classList.remove('cards')
const TesouraClone = Tesoura.cloneNode(true)
TesouraClone.classList.remove('cards')

const cardsArray = [PedraClone, PapelClone, TesouraClone]
let Computer = 0

function Battle(card) {
    CardsContainer.classList.remove('CardsContainer')
    let Battle = document.createElement('div')
    Battle.classList.add('CardsContainer')
    document.body.appendChild(Battle)
    Battle.appendChild(card)

    CardsContainer.classList.add('cardsBattle')
    Battle.appendChild(CardsContainer)

    Pedra.classList.remove('cards')
    Pedra.classList.add('cardsBattle')
    Papel.classList.remove('cards')
    Papel.classList.add('cardsBattle')
    Tesoura.classList.remove('cards')
    Tesoura.classList.add('cardsBattle')

    let number = Math.floor(Math.random() * (3 - 0))
    Computer = cardsArray[number]
    Battle.appendChild(Computer)
}

function playAgain() {
    let ButtonJogarNovamente = document.createElement('button')
    ButtonJogarNovamente.classList.add('Button')
    ButtonJogarNovamente.textContent = 'Jogar Novamente'
    document.body.appendChild(ButtonJogarNovamente)
    ButtonJogarNovamente.onclick = function () {
        window.location.reload()
    }
}

const cards = document.querySelectorAll('.cards')

cards.forEach(element => {
    element.addEventListener('click', WinCondition)
})

function WinCondition(event) {
    const card = event.target
    
    Battle(card)

    if (card.id == 'pedra') {
        if (Computer === cardsArray[0]) {
            CardsContainer.textContent = 'Empate'
        }
        if (Computer === cardsArray[1]) {
            CardsContainer.textContent = 'Você Perdeu'
        }
        if (Computer === cardsArray[2]) {
            CardsContainer.textContent = 'Você Venceu'
            let fogos = document.getElementById('fogos')
            fogos.classList.remove('display')
        }
    }

    if (card.id == 'papel') {
        if (Computer === cardsArray[1]) {
            CardsContainer.textContent = 'Empate'
        }
        if (Computer === cardsArray[2]) {
            CardsContainer.textContent = 'Você Perdeu'
        }
        if (Computer === cardsArray[0]) {
            CardsContainer.textContent = 'Você Venceu'
            let fogos = document.getElementById('fogos')
            fogos.classList.remove('display')
        }
    }

    if (card.id == 'tesoura') {
        if (Computer === cardsArray[2]) {
            CardsContainer.textContent = 'Empate'
        }
        if (Computer === cardsArray[0]) {
            CardsContainer.textContent = 'Você Perdeu'
        }
        if (Computer === cardsArray[1]) {
            CardsContainer.textContent = 'Você Venceu'
            let fogos = document.getElementById('fogos')
            fogos.classList.remove('display')
        }
    }

    playAgain()
}