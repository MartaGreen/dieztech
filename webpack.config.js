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
  output: { filename: "[name].[hash].js", clean: true },

  plugins: plugins,

  module: {
    rules: [
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
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              clean: true,
              outputPath: "/images",
            },
          },
        ],
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
