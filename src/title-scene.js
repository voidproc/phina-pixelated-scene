import * as phina from 'phina.js';
import { CONFIG } from './config';

phina.define('TitleScene', {
  superClass: 'PixelatedScene',

  init: function() {
    this.superInit({
      backgroundColor: 'royalblue',
    });

    SpriteFont({
      image: 'font1',
      text: 'CLICK TO START',
      charWidth: 4,
      charHeight: 6,
      scale: 1,
    })
      .addChildTo(this)
      .setPosition(CONFIG.width / 2 - 4 * 14/2, CONFIG.height / 2 - 6 / 2);
  },

  onclick: function() {
    this.exit();
  },
});
