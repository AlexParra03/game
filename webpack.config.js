const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'client/src/game.ts'),
    output: {
        filename: 'client/assets/code/game.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    externals: [
        // Don't bundle pixi.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable PIXI.
        { "pixi.js": "PIXI" }
    ]
};