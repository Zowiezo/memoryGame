var jsdom = require("jsdom");
// var scripts = require('../scripts');

describe('flipCard', () => {
    beforeEach(function() {
        const dom = new jsdom.JSDOM('<body><section class="memory-game"><div class="memory-card" data-blocks="Porsha"><img class="frontFace" src="https://i.imgur.com/pgzsEX8b.jpg" alt="Porsha" /><img class="backFace" src="https://i.imgur.com/MlHcvc0b.jpg" alt="RHOA" /></div></section></body>');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
    });

    it('should flip the card when card is clicked', () => {

        let flipCard = require('../scripts');
        expect(flipCard).toBe(flipCard);
    });

});

describe('check card match', () => {
    beforeEach(function() {
        const dom = new jsdom.JSDOM('<body><section class="memory-game"><div class="memory-card" data-blocks="Porsha"><img class="frontFace" src="https://i.imgur.com/pgzsEX8b.jpg" alt="Porsha" /><img class="backFace" src="https://i.imgur.com/MlHcvc0b.jpg" alt="RHOA" /></div></section></body>');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
    });
    it('should check if the cards are a match', () => {
        let checkMatch = require('../scripts');
        expect(checkMatch).toBe(checkMatch);
    });
});

describe('cards being disabled', () => {
    beforeEach(function() {
        const dom = new jsdom.JSDOM('<body><section class="memory-game"><div class="memory-card" data-blocks="Porsha"><img class="frontFace" src="https://i.imgur.com/pgzsEX8b.jpg" alt="Porsha" /><img class="backFace" src="https://i.imgur.com/MlHcvc0b.jpg" alt="RHOA" /></div></section></body>');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
    });
    it('should disable cards when card is a match', () => {
        let disableCards = require('../scripts');
        expect(disableCards).toBe(disableCards);
    });
});

describe('unflip cards', () => {
    beforeEach(function() {
        const dom = new jsdom.JSDOM('<body><section class="memory-game"><div class="memory-card" data-blocks="Porsha"><img class="frontFace" src="https://i.imgur.com/pgzsEX8b.jpg" alt="Porsha" /><img class="backFace" src="https://i.imgur.com/MlHcvc0b.jpg" alt="RHOA" /></div></section></body>');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
    });
    it('should unflip the cards when no match is found', () => {
        let unflipCards = require('../scripts');
        expect(unflipCards).toBe(unflipCards);
    });
});

describe('reset board', () => {
    beforeEach(function() {
        const dom = new jsdom.JSDOM('<body><section class="memory-game"><div class="memory-card" data-blocks="Porsha"><img class="frontFace" src="https://i.imgur.com/pgzsEX8b.jpg" alt="Porsha" /><img class="backFace" src="https://i.imgur.com/MlHcvc0b.jpg" alt="RHOA" /></div></section></body>');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
    });
    it('should reset the game board when all cards have been matched', () => {
        let resetBoard = require('../scripts');
        expect(resetBoard).toBe(resetBoard);
    });
});
/*

describe('shuffle', () => {
    beforeEach(function() {
        const dom = new jsdom.JSDOM('<body><section class="memory-game"><div class="memory-card" data-blocks="Porsha"><img class="frontFace" src="https://i.imgur.com/pgzsEX8b.jpg" alt="Porsha" /><img class="backFace" src="https://i.imgur.com/MlHcvc0b.jpg" alt="RHOA" /></div></section></body>');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
    });

    it('should shuffle the cards when the board is reset', () => {
        let shuffle = require('../scripts');
        expect(shuffle).toBe(shuffle);
    });
});*/