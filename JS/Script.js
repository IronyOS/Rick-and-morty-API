import { characters } from "../data/data.js";

window.addEventListener('DOMContentLoaded', () => {
    

    const grid = document.querySelector('.grid');
    let cardElegida = [];
    let cardElegidaId = [];

    function crearTablero() {
        for (let i = 0; i < characters.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', '../img/image1.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', voltearCarta)
            grid.appendChild(card);
            }
        
    }

    function par(){
        let cards = document.querySelectorAll('img');
        const optionOneId = cardElegidaId[0];
        const optionTwoId = cardElegidaId[1];

        if(optionOneId==optionTwoId){
			cards[optionOneId].setAttribute('src', '../img/image1.png')
			cards[optionTwoId].setAttribute('src', '../img/image1.png')
			alert('Hey! estas dandole click a la misma carta')

		}
		else if(cardElegidaId[0].image === cardElegidaId[1].image){
			alert('Encontraste un par, ¡genial!')
			cards[optionOneId].setAttribute('src', '../img/image1.png')
			cards[optionTwoId].setAttribute('src', '../img/image1.png')
			cards[optionOneId].removeEventListener('click', voltearCarta)
			cards[optionTwoId].removeEventListener('click', voltearCarta)
			cardsWon.push(cardsChosen)
		}
		else{
			cards[optionOneId].setAttribute('src', '../img/image1.png')
			cards[optionTwoId].setAttribute('src', '../img/image1.png')
			alert('intenta de nuevo')
		}
		cardElegida=[]
		cardElegidaId = []
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length===cardArray.length/2){
			resultDisplay.textContent = "Felicidades, encontraste todos los pares."
		}
    }

    function voltearCarta(){
        let cardId = this.getAttribute('data-id');
        cardElegida.push(characters[cardId].name)
        cardElegidaId.push(cardId)
        
        
        this.setAttribute('src', characters[cardId].image)

        if(cardElegidaId.length == 2){
            setTimeout(par, 500)
        }
        
    }
    crearTablero()
})
