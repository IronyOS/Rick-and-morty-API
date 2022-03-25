import { characters } from "../data/data.js";


window.addEventListener('DOMContentLoaded', () => {

    //Se duplica la Data 

    let charactersB = Object.values(characters);
    let charactersC = characters.concat(charactersB);

    //Se baraja las cards, para orden aleatorio

    charactersC.sort(() => 0.5 - Math.random());

    let puntos = document.getElementById('puntaje');
    let rest = document.getElementById('vidas');

    puntos.textContent = "0 $";
    rest.textContent = "3";

    //Se crea el tablero
    const grid = document.querySelector('.grid');
    let cardElegida = [];
    let cardElegidaId = [];
    const cardsGanadas = [];
    const vidas = [1, 2, 3];

    function crearTablero() {

        for (let i = 0; i < charactersC.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', '../img/image1.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', voltearCarta)
            grid.appendChild(card);
        }

    }

    // funcion que compara las cartas

    function par() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardElegidaId[0];
        const optionTwoId = cardElegidaId[1];

        if (optionOneId == optionTwoId) {

            //Se activa cuando le das a la misma carta

            cards[optionOneId].setAttribute('src', '../img/image1.png')
            cards[optionTwoId].setAttribute('src', '../img/image1.png')
            alert('Hey! estas dandole click a la misma carta')
        }

        else if (cardElegida[0] === cardElegida[1]) {

            //Determina si las cards son iguales

            alert('Encontraste un par, ¡genial!')
            cards[optionOneId].setAttribute('src', '../img/image1.png')
            cards[optionTwoId].setAttribute('src', '../img/image1.png')
            cards[optionOneId].removeEventListener('click', voltearCarta)
            cards[optionTwoId].removeEventListener('click', voltearCarta)
            cardsGanadas.push(cardElegida, "1");



        }

        else {

            //Determina si las cards son diferentes

            alert('intenta de nuevo');
            cards[optionOneId].setAttribute('src', '../img/image1.png')
            cards[optionTwoId].setAttribute('src', '../img/image1.png')
            vidas.pop()




        }

        cardElegida = []
        cardElegidaId = []
        rest.textContent = vidas.length;
        puntos.textContent = cardsGanadas.length + " $";

        if (vidas.length === 0) {

            window.location.reload();
            alert("has perdido todas tus vidas");
        }

    }


    //funcion que voltea la carta

    function voltearCarta() {

        let cardId = this.getAttribute('data-id');
        cardElegida.push(charactersC[cardId].name)
        cardElegidaId.push(cardId)


        this.setAttribute('src', charactersC[cardId].image)

        if (cardElegidaId.length == 2) {
            setTimeout(par, 500)
        }

    }
    crearTablero()
})

