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
const PapelClone = Papel.cloneNode(true)
const TesouraClone = Tesoura.cloneNode(true)

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

Pedra.onclick = function () {
    Battle(Pedra)

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

    playAgain()
}
Papel.onclick = function () {
    Battle(Papel)

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

    playAgain()
}
Tesoura.onclick = function () {
    Battle(Tesoura)

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

    playAgain()
}