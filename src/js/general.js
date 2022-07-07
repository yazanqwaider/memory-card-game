window.onload = function() {
    let grid = new Array(4);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(grid.length);
    }


    let img_index = getRandomImageIndex();
    let count = 0;
    let images = [];
    while(count < 6) {
        images.push(img_index);
        img_index = (img_index > 6)? 1 : img_index + 1;
        count++;
    }

    images = [...images, ...images];
    images = shuffleImages(images)
    console.log(images);


    let gridItems = ``;
    for (let i = 0; i < images.length; i++) {
        gridItems+= `
            <div class="grid-item">
                <img src="/assets/images/${images[i]}.jpg" />
            </div>
        `;
    }

    document.querySelector('#cards-container').innerHTML = gridItems;


    function getRandomImageIndex() {
        return Math.round(Math.random() * 6);
    }

    function shuffleImages(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}