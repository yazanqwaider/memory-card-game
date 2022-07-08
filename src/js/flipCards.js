module.exports = function (card) {

    if(card.classList.contains('black-cover')) {
        card.classList.remove('black-cover');
        
    }
    else {
        card.classList.add('black-cover');
    }

}