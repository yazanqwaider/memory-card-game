module.exports = function(img_index, REQUIRED_IMAGES) {
    let count = 0;
    let images = [];
    while(count < REQUIRED_IMAGES) {
        images.push(img_index);
        img_index = (img_index > 6)? 1 : img_index + 1;
        count++;
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

    return shuffleImages([...images, ...images]);
}