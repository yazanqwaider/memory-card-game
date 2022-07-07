module.exports = function() {
    let scores = 0;
    let moves = 0;
    let clicks = 0;
    let selected_item = null;


    let gridItemElms = document.querySelectorAll('.grid-item');
    gridItemElms.forEach(gridItemElm => {
        gridItemElm.addEventListener('click', (e) => {
            let imgId = gridItemElm.getAttribute('data-imgId');
            if(clicks == 0) {
                selected_item = imgId;
                clicks++;
            }
            else if(clicks == 1) {
                if(imgId == selected_item) 
                    scores++;
                
                clicks = 0;
                selected_item = null;
                moves++;
            }

            document.getElementById('scores-layout').innerText = scores;
        });
    });
}