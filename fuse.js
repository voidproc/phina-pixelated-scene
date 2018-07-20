const { FuseBox, Sparky, UglifyESPlugin } = require('fuse-box');

const rootDir = 'dist/';

Sparky.context({
  getConfig() {
    return FuseBox.init({
      homeDir: 'src',
      output: `${rootDir}js/$name.js`,
      useTypescriptCompiler : true,
      sourceMaps: !this.isProduction,
      cache: !this.isProduction,
      plugins: [
        this.isProduction && UglifyESPlugin(),
      ],
    });
  }
});

Sparky.task('default', async context => {
  const fuse = context.getConfig();
  
  fuse
    .bundle('app')
    .instructions('> index.js')
    .watch()
    .hmr({ reload: true });

  fuse.dev({
    port: 4444,
    httpServer: true,
    root: rootDir,
  });
  
  return await fuse.run({
    chokidar: {
      usePolling: true,
    }
  });
});

Sparky.task('dist', async context => {
  context.isProduction = true;
  const fuse = context.getConfig();

  fuse
    .bundle('app')
    .instructions('> index.js');

  return await fuse.run()
});
