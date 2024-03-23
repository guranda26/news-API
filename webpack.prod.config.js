// Inside webpack.prod.config.js, which is imported conditionally
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [new MiniCssExtractPlugin(), new CompressionPlugin()],
};
