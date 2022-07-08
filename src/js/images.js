const getImagesList = require('./generateImagesList');
const config = require('./config');

const IMAGES_COUNT = 19;
const REQUIRED_IMAGES = 6;
let randomImageIndex = Math.round(Math.random() * IMAGES_COUNT);

module.exports = function() {
    return {
        images: getImagesList(randomImageIndex, REQUIRED_IMAGES),

        generateHtmlGrid: function() {
            let gridItems = ``;
            for (let i = 0; i < this.images.length; i++) {
                gridItems+= `
                    <div class="grid-item black-cover" data-imgId="${this.images[i]}">
                        <img src="${config.prefixURL()}/assets/images/${this.images[i]}.jpg" />
                        <p class="centralize-text">Img</p>
                    </div>
                `;
            }
    
            return gridItems;
        }
    }
}