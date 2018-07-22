# phina-pixelated-scene

Crisp pixelart style appearance in [phina.js](https://github.com/phinajs/phina.js) product.

## Description

See [pixelated-scene.js](https://raw.githubusercontent.com/voidproc/phina-pixelated-scene/rdm/readme/pixelated-scene.js) .

Use `PixelatedScene` instead of `DisplayScene` .

### Example

[Live example (Runstant.com)](http://runstant.com/voidproc/projects/ad6d270d)

![example](https://raw.githubusercontent.com/voidproc/phina-pixelated-scene/rdm/readme/example.gif)

```
phina.define('MainScene', {
  superClass: 'PixelatedScene',

  init: function (option) {
    this.superInit({
      width: 100, height: 100, backgroundColor: 'black'
    });

    this.rect = RectangleShape({
        width: 40, height: 40, stroke: 'transparent', fill: 'red'
      })
      .addChildTo(this)
      .setPosition(50, 50);
  },

  update: function () {
    this.rect.rotation += 2;
  }
});

phina.main(function () {
  var app = GameApp({
    startLabel: 'main',
    width: 100 * 4,
    height: 100 * 4,
    fit: false,
  });
  app.run();
});
```

## Example app usage

[Live example](https://voidproc.com/phina-pixelated-scene-example/)

![example2](https://raw.githubusercontent.com/voidproc/phina-pixelated-scene/rdm/readme/example2.gif)


### Install npm packages

```
$ npm install
```

or yarn available.

### Start server in development mode

```
$ npm run dev
```

### Generate files in production mode

```
$ npm run build
```

### 🐳 with Docker

```
$ docker-compose build
$ docker-compose run app npm install
$ docker-compose up
```
