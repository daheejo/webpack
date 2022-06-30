const path = require('path')
const myLoader = require('./myLoader')
const webpack = require('webpack')
const childProcess = require('child_process')

module.exports={
    mode:'development',
    entry:{
        main:path.resolve('./src/app.js')
    },
    output:{
        publicPath: '/dist/',
        filename:'[name].js',
        path:path.resolve('./dist')
    },

    module:{
        rules:[
            // {
            //     test:/\.js$/,
            //     use:[
            //         path.resolve('./myLoader.js')
            //     ]
            // }
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser:{
                    dataUrlCondition: {
                        maxSize: 20 * 1024 // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
                        }
                }
                
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin({
            banner:`
            Commit version: ${childProcess.execSync('git rev-parse --short HEAD')}
            Committer name: ${childProcess.execSync('git config user.name')}
            Commit Date: ${new Date().toLocaleString()}
            `
        })
    ]
}