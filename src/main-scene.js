import * as phina from 'phina.js';
import { CONFIG } from './config';

phina.define('Obj', {
  superClass: 'RectangleShape',

  init(option) {
    const rectSize = Random.randint(5, 12);

    this.superInit({
      fill: 'rgba(200, 30, 30, 0.50)',
      stroke: 'transparent',
      width: rectSize,
      height: rectSize,
    });

    this.vel = {
      r: option.r,
      theta: option.theta,
    }
    this.vel.x = this.vel.r * Math.sin(this.vel.theta);
    this.vel.y = -this.vel.r * Math.cos(this.vel.theta);

    this.setPosition = function(x, y) {
      Obj.prototype.setPosition.call(this, x, y);
      this._x = this.x;
      this._y = this.y;
    };  
  },

  update() {
    this._x = this._x + this.vel.x;
    this._y = this._y + this.vel.y;
    this.x = Math.floor(this._x);
    this.y = Math.floor(this._y);

    this.rotation += 8
  }
});

phina.define('MainScene', {
  superClass: 'PixelatedScene',

  init: function() {
    this.superInit({
      backgroundColor: 'rgb(20,20,20)',
    });

    this.spriteFont = SpriteFont({
      image: 'font1',
      text: '',
      charWidth: 4,
      charHeight: 6,
    })
      .addChildTo(this)
      .setPosition(1, 1);

    this.rects = DisplayElement().addChildTo(this);
  },

  update: function() {
    this.cnt = (this.cnt || 0) + 1;
    this.spriteFont.text = this.rects.children.length + '';

    for (let i=0; i<4; i++)
      Obj({ r: Random.randfloat(0.5, 3), theta: Random.randfloat(0, 2 * 3.14) })
        .addChildTo(this.rects)
        .setPosition(Random.randint(0, CONFIG.width), Random.randint(0, CONFIG.height));
    
    this.rects.children.eraseIfAll(function(elem) {
      if (elem.x < 0 || elem.y < 0 || elem.x > CONFIG.width || elem.y > CONFIG.height) {
        return true;
      }
    });
  },

  onclick: function() {
    this.exit();
  },
});
