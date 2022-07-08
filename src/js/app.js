const generateRandomImages = require('./images');
import trackGridMoves from './scores';

window.onload = function() {

    document.querySelector('#cards-container').innerHTML = generateRandomImages().generateHtmlGrid();

    trackGridMoves();
}