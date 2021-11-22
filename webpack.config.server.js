const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'server',
    entry: {
        server: path.resolve(__dirname, 'src/server/index.ts'),
    },
    mode: process.env.NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: {
                configFile: 'tsconfig.server.json',
            },
            exclude: '/node_moules/'
          }
        ]
    },
    externals: [ nodeExternals() ],
    plugins: [
        
    ],
}