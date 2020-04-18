const glob = require("glob");
const path = require("path");
const entries = {};
const srcDir = "./src/pages";
glob.sync("**/*.tsx", {
    cwd: srcDir
}).map(function (key) {
    // {key:value}の連想配列を生成
    // { **/*.js : './src/**/*.js' }という形式のobjectになる
    entries[`${key}.bundle.js`] = path.resolve(srcDir, key);
});

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, 'public/js'),
        publicPath: '/js/',
        filename: '[name]'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {loader: 'ts-loader'}
                ]
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open: true,
        host: '0.0.0.0',
        disableHostCheck: true,
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
};