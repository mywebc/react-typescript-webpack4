const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    // 入口
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts','.tsx','.jsx','.js']
    },
    // 输出
    output: {
        // resolve为了统一系统分隔符，比如window系统在拼接字符串时分隔符为\,所以resolve是为了兼容各个系统的分隔符
        path: path.resolve(__dirname, "build/lib"), // 输出路径
        filename: "bundle.js", // 输出文件名（静态）
        library: 'demo', // 支持输出一个library，必须同时指定libraryTarget
        libraryTarget: 'umd' // umd是一种模块导入导出规范，兼容common.js,amd等
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // 以ts或者以tsx结尾
                loader: 'awesome-typescript-loader'

            }
        ]  
    },
}