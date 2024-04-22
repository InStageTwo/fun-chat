const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/i,
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                      noEmit: false,
                    },
                  },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts','.js','.css'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode
        ? require('./webpack.prod.config')
        : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
