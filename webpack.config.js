const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        app: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:4].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {

                    }
                }
            }
        ]
    }
}