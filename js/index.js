const Button = document.getElementById('start')
const CardsContainer = document.getElementById('CardsContainer')
Button.onclick = function(){
    Button.classList.add('display')
    CardsContainer.classList.add('CardsContainer')
} 

const Pedra = document.getElementById('PedraContainer')
const Papel = document.getElementById('PapelContainer')
const Tesoura = document.getElementById('TesouraContainer')
Pedra.onclick = function (){
    CardsContainer.classList.remove('CardsContainer')
    let Battle = document.createElement('div')
    Battle.classList.add('CardsContainer')
    document.body.appendChild(Battle)
    Battle.appendChild(Pedra)

    let Result = document.createElement('div')
    Result.classList.add('cardsBattle')
    Battle.appendChild(Result)

    Pedra.classList.remove('cards')
    Pedra.classList.add('cardsBattle')
    Papel.classList.remove('cards')
    Papel.classList.add('cardsBattle')
    Tesoura.classList.remove('cards')
    Tesoura.classList.add('cardsBattle')
    let PedraClone = Pedra.cloneNode(true)
    let PapelClone = Papel.cloneNode(true)
    let TesouraClone = Tesoura.cloneNode(true)
    

    let cardsArray = [PedraClone,PapelClone,TesouraClone]
    let number = Math.floor(Math.random()*(3 - 0))
    let Computer = cardsArray[number]
    Battle.appendChild(Computer)

    if (Computer === cardsArray[0]) {
        Result.textContent = 'Empate' 
    }
    if (Computer === cardsArray[1]) {
        Result.textContent = 'Você Perdeu'
    }
    if (Computer === cardsArray[2]) {
       Result.textContent = 'Você Venceu'        
    }

    let ButtonJogarNovamente = document.createElement('button')
    ButtonJogarNovamente.classList.add('Button')
    ButtonJogarNovamente.textContent = 'Jogar Novamente'
    document.body.appendChild(ButtonJogarNovamente)
    ButtonJogarNovamente.onclick = function(){
        window.location.reload()
    }
}
Papel.onclick = function (){
    CardsContainer.classList.remove('CardsContainer')
    let Battle = document.createElement('div')
    Battle.classList.add('CardsContainer')
    document.body.appendChild(Battle)
    Battle.appendChild(Papel)

    let Result = document.createElement('div')
    Result.classList.add('cardsBattle')
    Battle.appendChild(Result)

    Pedra.classList.remove('cards')
    Pedra.classList.add('cardsBattle')
    Papel.classList.remove('cards')
    Papel.classList.add('cardsBattle')
    Tesoura.classList.remove('cards')
    Tesoura.classList.add('cardsBattle')
    let PedraClone = Pedra.cloneNode(true)
    let PapelClone = Papel.cloneNode(true)
    let TesouraClone = Tesoura.cloneNode(true)
    

    let cardsArray = [PedraClone,PapelClone,TesouraClone]
    let number = Math.floor(Math.random()*(3 - 0))
    let Computer = cardsArray[number]
    Battle.appendChild(Computer)

    if (Computer === cardsArray[1]) {
        Result.textContent = 'Empate' 
    }
    if (Computer === cardsArray[2]) {
        Result.textContent = 'Você Perdeu'
    }
    if (Computer === cardsArray[0]) {
       Result.textContent = 'Você Venceu'        
    }

    let ButtonJogarNovamente = document.createElement('button')
    ButtonJogarNovamente.classList.add('Button')
    ButtonJogarNovamente.textContent = 'Jogar Novamente'
    document.body.appendChild(ButtonJogarNovamente)
    ButtonJogarNovamente.onclick = function(){
        window.location.reload()
    }
}
Tesoura.onclick = function (){
    CardsContainer.classList.remove('CardsContainer')
    let Battle = document.createElement('div')
    Battle.classList.add('CardsContainer')
    document.body.appendChild(Battle)
    Battle.appendChild(Tesoura)

    let Result = document.createElement('div')
    Result.classList.add('cardsBattle')
    Battle.appendChild(Result)

    Pedra.classList.remove('cards')
    Pedra.classList.add('cardsBattle')
    Papel.classList.remove('cards')
    Papel.classList.add('cardsBattle')
    Tesoura.classList.remove('cards')
    Tesoura.classList.add('cardsBattle')
    let PedraClone = Pedra.cloneNode(true)
    let PapelClone = Papel.cloneNode(true)
    let TesouraClone = Tesoura.cloneNode(true)
    

    let cardsArray = [PedraClone,PapelClone,TesouraClone]
    let number = Math.floor(Math.random()*(3 - 0))
    let Computer = cardsArray[number]
    Battle.appendChild(Computer)

    if (Computer === cardsArray[2]) {
        Result.textContent = 'Empate' 
    }
    if (Computer === cardsArray[0]) {
        Result.textContent = 'Você Perdeu'
    }
    if (Computer === cardsArray[1]) {
       Result.textContent = 'Você Venceu'        
    }

    let ButtonJogarNovamente = document.createElement('button')
    ButtonJogarNovamente.classList.add('Button')
    ButtonJogarNovamente.textContent = 'Jogar Novamente'
    document.body.appendChild(ButtonJogarNovamente)
    ButtonJogarNovamente.onclick = function(){
        window.location.reload()
    }
}