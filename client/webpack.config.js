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
};