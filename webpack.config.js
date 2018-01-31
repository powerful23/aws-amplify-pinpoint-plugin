const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'amplify-pinpoint-plugin': './src/index.ts',
        'amplify-pinpoint-plugin.min': './src/index.ts'
    },
    externals: {
        "aws-sdk": 'aws-sdk'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        library: 'amplify-pinpoint-plugin',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                query: {
                    declaration: false
                }
             }
        ]
    }
};
