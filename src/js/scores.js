import flipCards from './flipCards';
export default function() {
    let scores = 0;
    let moves = 0;
    let clicks = 0;
    let selected_item = null;


    let gridItemElms = document.querySelectorAll('.grid-item');
    gridItemElms.forEach(gridItemElm => {
        gridItemElm.addEventListener('click', (e) => {
            flipCards(gridItemElm);
            setTimeout(() => flipCards(gridItemElm), 2000);

            let imgId = gridItemElm.getAttribute('data-imgId');
            if(clicks == 0) {
                selected_item = imgId;
                clicks++;
            }
            else if(clicks == 1) {
                if(imgId == selected_item) {
                    scores++;
                    
                    let targetCards = document.querySelectorAll(`[data-imgId="${selected_item}"]`);
                    setTimeout(() => {
                        targetCards.forEach(targetCard => removeCard(targetCard));

                        if(scores == 6) {
                            alert('You win :)');
                        }
                    }, 1000);
                }
             
                clicks = 0;
                selected_item = null;
                moves++;
            }

            document.getElementById('scores-layout').innerText = scores;
            document.getElementById('moves-layout').innerText = moves;
        });
    });


    function removeCard(card) {
        card.classList.remove('black-cover');
        card.addEventListener('click', null);
        card.innerHTML = "";
    }
}