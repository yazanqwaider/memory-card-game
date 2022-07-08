const generateImagesList = require('../src/js/images');

test('generate images', () => {
    expect(generateImagesList().images).toHaveLength(6 * 2);
});

