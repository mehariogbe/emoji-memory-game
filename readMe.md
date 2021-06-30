#Emoji-memory-game
- Is a memory game played with emoji pictures.
-  you have to flip the pictures and find a match of the same picture.
-  In order to win you must match all the pictures in a given time.
-  this game has three levels  
        
       1- Easy level is played on 4 * 4 grid with 90 sec of time.
        
       2- Midium level is played on 4 * 4 grid with 60 sec of time. 
       
       3- Hard level is played on 5 * 5  grid with 60 sec of time.
       
##How the Game is built
 The Game is build by HTML, CSS, Javascript, jQuery and DOM manupilation.
 
####HTML 
Most of the HTML is build by div inside the body.
- div for every card and for every image.
- div for the info box
- div for the game 
- also div for the ending box
####CSS
- I have used CSS for every class, div, body ,ID, and html .

####JavaScript
 My approch to develop this game is a object oriented programing.
 
   - started by writing a function start; that is going to be called for the whole game.
  
   -  created a class MemoryGame for all the of the varables, properties and functions to be since this is an object oriented . and I created a constructor that takes two parameters.
 -    Inside the class MemoryGame i wrote a startGame function that starts the game.
 -   created a flipcard function that takes a card and addes the card to class visible in order to flip the card.
 -   created shuffleCards() to shuffle the card, getCardType() to get the value of the card and cardMatch() to match the same cards.
 -   created cardMisMatch() to remove the card from class visible inorder to flip back. and checksMatch() to check matched cards.
 -   created gameWon() and gameLost () to determine whether the game is finsished.
 -   created startCountDown() to the start the timer 

 ###Challenges:
 - The whole programing process of the game was challanging, especially when I decided to go with object oriented programing.
 - the most challanging part was `this` keyword , i had to use through the whole program.
 - the more function i was using the more confused i was 
 - And dealing with CSS.

 ### Also
 - I created three directories for the different levels and linked them to the first page .  


 
       