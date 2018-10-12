const path = require('path'),
    // HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, argv) {
    console.log(argv.mode);
    if (!argv.mode) {
        argv.mode = 'development';
    }
    console.log(argv.mode);
    return {
        mode: argv.mode,
        context: path.join(__dirname, 'src/'),
        entry: {
            'app/app.module': './app/app.module.js'
        },
        output: {
            //chunkFilename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: './'
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss']
        },
        watch: (argv.mode === 'development') ? true : false,
        module: {
            rules: [{
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                },
                {
                    test: /\.tsx?$/,
                    use: ['ts-loader'],
                    //include: path.join(__dirname, '/src/')
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        (argv.mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                options: {},
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }]
                },
                // {
                //     test: /\.(png|jpg|jpeg|gif)$/i,
                //     use: [
                //       {
                //         loader: 'url-loader',
                //         options: {
                //           limit: 8192
                //         }
                //       }
                //     ]
                //   },
                  {
                    test:  /\.(woff|woff2|eot|ttf|svg)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                //chunkFilename: "css/[id].bundle.css",
                //publicPath: "./"
            }),

            // new HtmlWebpackPlugin({
            //     title: 'Custom template',
            //     // Load a custom template (lodash by default see the FAQ for details)
            //     //template: './dist/index.html',
            //     hash: true

            // })
        ],
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            compress: true,
            //open: true,
            port: 9000
        },
        devtool: (argv.mode === 'development') ? 'inline-cheap-source-map' : 'source-map'
    };
};