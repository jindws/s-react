const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[hash:3].js",
    },
    devtool: 'eval-cheap-module-source-map',
    module:{
        rules: [
            {
                test:/\.js[x]$/,
                include:path.resolve(__dirname,'./src'),//只在src生效-推荐
                use: {
                    loader:'babel-loader',//webpack与babel沟通的桥梁
                }
            },
        ]
    },
    devServer: {
        contentBase:path.resolve(__dirname,'/build'),
        port:3000,
        open:true,
        hot:true,//开启HMR
        hotOnly:true,//不自动刷新浏览器
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'title',//ejs语法  <title><%=htmlWebpackPlugin.options.title%></title>
        template: './index.html',
        filename: 'index.html',
        inject: 'body',//true head false [js/css.. in html place]
        minify: {//压缩html
            removeComment:true,//移除HTML中的注释
            collapseWhitespace:true,//删除空白符和换行符
            minifyCss:true,//压缩内联css
        },
    })],
    resolve:{
        modules:[path.resolve(__dirname,'./node_modules')],
        extensions: ['.js','.jsx'],
        alias:{
            //起别名
            "@pages":path.resolve(__dirname,'./src/pages')
        },
    },
}