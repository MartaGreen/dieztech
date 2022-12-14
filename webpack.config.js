const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require("path");

const generatePath = (filename, ext) =>
  path.resolve(__dirname, "src/pages", filename, `${filename}.${ext}`);
const HtmlWebpackPluginExt = "pug";
const entryExt = "js";

const plugins = [
  new HtmlWebpackPlugin({
    title: "Главная",
    template: generatePath("index", HtmlWebpackPluginExt),
    filename: "index.html",
    chunks: ["shared", "index"],
  }),

  new SpriteLoaderPlugin(),
];

module.exports = {
  entry: {
    shared: path.resolve(__dirname, "src/shared", "shared.js"),
    index: generatePath("index", entryExt),
  },
  output: { publicPath: "", filename: "[name].[hash].js", clean: true },

  plugins: plugins,

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              extract: true,
              publicPath: "/icons/",
              spriteFilename: "sprites.svg",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    static: { directory: path.resolve(__dirname, "dist") },
    port: 3000,
    open: true,
    onListening: (server) => {
      if (!server) throw new Error("webpack-dev-server is not defined");

      const port = server.server.address().port;
      console.log(`Server listening on ${port}`);
    },
    watchFiles: path.resolve(__dirname, "src"),
  },
};
