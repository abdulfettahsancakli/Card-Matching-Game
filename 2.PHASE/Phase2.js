

// PHASE 2 

function Game() {

    const cards = document.querySelectorAll('.card');

    let hasFlippedCard = false;  // CLOSURES
    let lockBoard = false;    // CLOSURES
    let firstCard, secondCard;    // CLOSURES

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        console.log(this.id);
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;

            return;
        }

        hasFlippedCard = false;
        secondCard = this;

        console.log(firstCard.children[0].alt)
        console.log(secondCard.children[0].alt)

        if (firstCard.children[0].alt === secondCard.children[0].alt) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard)
        }
        else {
            lockBoard = false;
        }
    }

    (function shuffle() {
        Mix();
    })();

    //cards.forEach(card => card.addEventListener('click', console.log(this)))
    cards.forEach(card => card.addEventListener('click', flipCard))


    async function Mix() {
        console.log('mix')
        const cards = document.querySelectorAll('.card');
        var array = [];

        function RepeatCheck(params) {

        }
        var repeatarray = [];
        function shuffle() {

            cards.forEach(card => {

                while (1) {
                    let randomPosition = Math.floor(Math.random() * 16);

                    if (repeatarray.includes(randomPosition) === false) {
                        repeatarray.push(randomPosition);
                        array.push({ id: randomPosition, src: card.children[0].alt });
                        card.style.order = randomPosition;
                        break;
                    }

                }

            });

        }
        await shuffle();
        array.sort(function (a, b) {
            return a.id - b.id;
        });
        console.log(array);
        var kontrol = await 0;
        var array2 = await [
            [{ id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }],
            [{ id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }],
            [{ id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }],
            [{ id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }]
        ];

        function forfunc() {
            for (let index1 = 0; index1 < 4; index1++) {
                for (let index2 = 0; index2 < 4; index2++) {
                    array2[index1][index2] = array[kontrol];
                    kontrol = kontrol + 1;
                }

            }
        }
        await forfunc();
        await console.log(array2);
    }
}






Game();  