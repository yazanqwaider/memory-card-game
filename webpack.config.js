const path = require('path');

module.exports = {
    mode: "development",
    entry: [
        './src/js/app.js',
        './src/sass/app.sass'
    ],
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist/js'),
    },

    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: { outputPath: '../css/', name: '[name].min.css'}
                },
                "sass-loader",
            ],
          },
        ],
    },
}