module.exports = {
  config: {
    entry: './src/main.tsx',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
  
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
  
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
  
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
  },
  
  shellPluginOnBuildExitClean: [
    'echo "Delete current server public"',
    'rm -rf ../server/dist',
  ],
  shellPluginOnBuildExitCommon: [
    'echo "Copy react dependencies to dist..."',
    'mkdir -p ./dist/react',
    'cp ./node_modules/react/umd/react.development.js ./dist/react/react.js',
    'cp ./node_modules/react-dom/umd/react-dom.development.js ./dist/react/react-dom.js',
    'echo "Copy images to dist..."',
    'mkdir -p ./dist/images',
    'cp -r ./images/. ./dist/images',
    'cp ./node_modules/react-dom/umd/react-dom.development.js ./dist/react/react-dom.js',
    'echo "Copy dist to server public..."',
    'mkdir -p ../server/dist/public/react',
    'cp -r dist/. ../server/dist/public',
    'echo "DONE"'
  ]
}