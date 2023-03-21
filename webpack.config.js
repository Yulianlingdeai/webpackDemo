// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 模板html生成或用template
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取css为单独文件用link插入
const { HotModuleReplacementPlugin } = require("webpack"); // 热更新
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除之前的文件
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin"); // 自己的压缩插件，可以并行压缩

const isProduction = process.env.NODE_ENV === "production";

// const stylesHandler = 'style-loader'

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name]-[hash:4].js",
        publicPath: "", // 打包时dist名字没用，上传dist里的内容，然后以http://xxx/publicPath访问到index.html，同理其他资源前都会有publicPath/
        // clean: true,
        assetModuleFilename: "images/[name][ext][query]" // 自定义assetModule文件名
    },
    devServer: {
        open: true,
        // contentBase: path.join(__dirname, './dist'),
        host: "localhost",
        port: "8787",
        compress: true,
        // proxy: {
        //   '/api': {
        //     // target: 'http://localhost:3000',
        //     target: 'https://app.yanmeijia.cn',
        //     // target: 'http://112.44.246.108:53000',
        //     changeOrigin: true, // 掩盖代理的主机头的来源，
        //     webSocketServer: 'ws',
        //     pathRewrite: {
        //       '^/api': ''
        //     },
        //     secure:false
        //   }
        // },
        // inline: true,
        hot: "only"
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                "**/*" // 删除dist路径下所有文件
                // `!package.json`,  // 不删除dist/package.json文件
            ]
        }),
        // 模板html生成或用template
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "webpackDemo",
            template: path.resolve(__dirname, "./index.html"),
            minify: false
        }),
        // 提取css为单独文件用link插入
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        new HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/, // 排除项，可以是数组形式
                loader: "babel-loader",
                options: {
                    plugins: ["@babel/plugin-transform-runtime"]
                }
            },
            { test: /\.ts$/, exclude: /node_modules/, use: ["ts-loader"] },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 为 CSS 内的图片、文件等外部资源指定一个自定义的公共路径
                            publicPath: "../"
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 为 CSS 内的图片、文件等外部资源指定一个自定义的公共路径
                            publicPath: "../"
                        }
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 10kb
                    }
                }
                // generator: {
                //   //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                //   //为 CSS 内的图片、文件等外部资源指定一个自定义的公共路径,这里优先级高
                //   filename: 'img/[name].[hash:6][ext]',
                //   publicPath: './'
                // }
            },
            {
                test: /\.html$/i,
                loader: "html-loader", // 一般来说用vue/cli不会用到
                options: {
                    minimize: false
                }
            }
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".ts", ".css", ".vue"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "src")
        }
    },
    externals: {
        vue: {
            root: "Vue",
            commonjs: "vue",
            commonjs2: "vue",
            amd: "vue"
        }
    },
    devtool: "source-map"
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
        config.cache = {
            type: "filesystem",
            buildDependencies: {
                config: [__filename]
            }
        };
    } else {
        config.mode = "development";
        config.cache = {
            type: "memory"
        };
        config.optimization = {
            minimizer: [
                new ParallelUglifyPlugin({
                    // 缓存路径
                    cacheDir: ".cache/",
                    // 压缩配置
                    uglifyJS: {
                        output: {
                            comments: false,
                            beautify: false
                        },
                        compress: {
                            drop_console: true,
                            collapse_vars: true,
                            reduce_vars: true
                        }
                    }
                })
            ]
        };
    }
    return config;
};
