const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");
const CopyWebPack = require('copy-webpack-plugin');
 
module.exports = {
 
    mode: 'development',

    output : {
        clean : true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/, 
                use : ['style-loader' , 'css-loader']
            },
            {
                test : /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test : /\.(png|jpg?e|gif)$/i,
                loader: 'file-loader', 
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder : false
        }),
        new CopyWebPack({
            patterns : [
                {
                    from : 'src/assets/', to: 'assets/'
                }
            ]
        })
    ]
 
 
}