const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    mode:'development',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        })
    ],
};