const cards = document.querySelectorAll('.memory-card');
let flippedCard = false;
let board = false;
let cardOne, cardTwo;

function flipCard() {
    if (board) return;
    if (this === cardOne) return; // equal value and equal type
    this.classList.add('flip'); // classList.add adding flip class to element
    if (!flippedCard) {
        // ! Placed in front of a boolean value(flippedCard) 
        //it will reverse the value(flippedCard), making it true
        flippedCard = true;
        cardOne = this;
        return;
    }
    cardTwo = this;
    checkMatch();
}

checkMatch = () => {
    //function checkMatch() {
    let match = cardOne.dataset.blocks === cardTwo.dataset.blocks;

    match ? disableCards() : unflipCards(); // checks if card is a match or not, if match disable cards if not unflipcards 
};
//dataset.blocks is to the information on my html about each of the blocks
// dataset to track values on a div representing the imgs on the blocks 
//This access is available both in HTML and within the DOM. 
// It is a map of DOMString, one entry for each custom data attribute.  


/*
   if (cardOne === cardTwo){
   disableCards;
   } else {
   unflipCards
   };
   */

disableCards = () => {
    // function disableCards() {
    cardOne.removeEventListener('click', flipCard); // removeEventListerner removes the clicking on the flipped card
    cardTwo.removeEventListener('click', flipCard);
    resetBoard();
};

unflipCards = () => {
    //function unflipCards() {
    board = true;
    setTimeout(() => {
        cardOne.classList.remove('flip'); // classList.remove removes flip class to element
        cardTwo.classList.remove('flip');
        resetBoard();
    }, 900);
};

resetBoard = () => { //reset the board when cards are flipped and no match
    // function resetBoard() {
    [flippedCard, board] = [false, false];
    [cardOne, cardTwo] = [null, null];
};

//(shuffle = () => {                                                     //forEach...for (i = 0; i < cards.length; i++)
(function shuffle() {
    cards.forEach(card => {
        let randomPlace = Math.floor(Math.random() * 12);
        card.style.order = randomPlace;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard)); //add event click to flip the card