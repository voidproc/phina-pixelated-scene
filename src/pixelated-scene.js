import * as phina from 'phina.js';
import { CONFIG } from './config';

phina.define('PixelatedScene', {
  superClass: 'DisplayScene',

  init: function(option) {
    this.superInit({
      width: CONFIG.width * CONFIG.scale,
      height: CONFIG.height * CONFIG.scale,
    });

    this.display = CanvasLayer({
      width: CONFIG.width,
      height: CONFIG.height,
    }).addChildTo(this);

    this.option = option;
    
    const disableImageSmoothing = context => {
      context.imageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.mozImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
    };
    disableImageSmoothing(this.canvas.context);
    disableImageSmoothing(this.display.canvas.context);
  },
  
  _render: function() {
    this.canvas.clearColor(this.option.backgroundColor || 'white');
    this.canvas.context.drawImage(
      this.display.canvas.domElement,
      0, 0, CONFIG.width, CONFIG.height,
      0, 0, CONFIG.width * CONFIG.scale, CONFIG.height * CONFIG.scale);
  },
});
