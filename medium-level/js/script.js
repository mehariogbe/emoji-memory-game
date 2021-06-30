class MemoryGame {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('moves');
       

     
    }

    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardsToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        //  console.log(this.startGame);

        setTimeout(() => {
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);

        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;   
      
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        })

    }
    flipCard(card) {
       
        if(this.canFlipCard(card)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
             card.classList.add('visible');
            
             if(this.cardsToCheck)
             this.checksMatch(card);
             else
             this.cardsToCheck = card;
        }
    }
    checksMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardsToCheck))
            this.cardMatch(card, this.cardsToCheck);
        else
            this.cardMisMatch(card, this.cardsToCheck);

        this.cardsToCheck = null;    


    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        if(this.matchedCards.length === this.cardsArray.length)
        this.gameWon();
    }

    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
   
    startCountDown(){
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
            this.gameLost();

            
        }, 1000);
    }
    gameLost() {
        clearInterval(this.countDown);
        document.getElementById('looser').classList.add('show');
        // alert("you lost")


    }

    gameWon() {
        clearInterval(this.countDown);
        document.getElementById('winner').classList.add('show');
        // alert("you won")
    }
    shuffleCards() {
        for(let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random()* (i+1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;

        }
    }
    getCardType(card) {
       
         return card.getElementsByClassName('front-img')[0].src;
            
            //   console.log(getCardType);
    };
    
      canFlipCard(card) {
    //    return true;
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardsToCheck
     }
}

function ready() {
    let cards = Array.from(document.getElementsByClassName('card'));
    let endings = Array.from(document.getElementsByClassName('ending-text'));
    let game = new MemoryGame(60, cards);
   game.startGame();
   endings.forEach(ending => {
       ending.addEventListener('click', () => {
           ending.classList.remove('show');
           game.startGame();
       });
   })
    cards.forEach(card => {
        card.addEventListener('click', () => {
            
            game.flipCard(card);
            // console.log(cards)
            
           
        } );
        
    });
  
}
  ready();