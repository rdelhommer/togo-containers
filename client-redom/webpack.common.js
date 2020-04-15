module.exports = {
  config: {
    entry: './src/main.ts',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
  
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: ['src', 'node_modules']
    },
  },

  tsRule: { test: /\.ts?$/, loader: "awesome-typescript-loader" },
  htmlRule: { test: /\.html$/, use: 'html-loader' },
  imgRule: { test: /\.(gif|jpg|cur|png|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader?name=images/[name].[ext]' },

  // NOTE: What does this do?
  jsPre: { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },


  shellPluginOnBuildExitClean: [
    'echo "Delete current server public"',
    'rm -rf ../server/dist',
  ],
  shellPluginOnBuildExitCommon: [
    'echo "Copy dist to server public..."',
    'mkdir -p ../server/dist/public/react',
    'cp -r dist/. ../server/dist/public',
    'echo "DONE"'
  ]
}