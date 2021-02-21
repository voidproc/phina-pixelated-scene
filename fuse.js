const path = require('path');
const { fusebox } = require('fuse-box');

const fuse = fusebox({
  target: 'browser',
  entry: 'src/index.js',
  webIndex: {
    template: 'src/index.html',
  },
  cache: true,
  devServer: true,
});

fuse.runDev({
  bundles: {
    rootDir: 'dist',
    app: 'js/app.js',
  }
});
