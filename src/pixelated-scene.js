import * as phina from 'phina.js';
import { CONFIG } from './config';

phina.define('PixelatedScene', {
  superClass: 'DisplayScene',

  init(option) {
    if (!option) {
      option = {};
    }
    if (!option.width) {
      option.width = CONFIG.width;
    }
    if (!option.height) {
      option.height = CONFIG.height;
    }
    if (!option.scale) {
      option.scale = CONFIG.scale;
    }
    if (!option.backgroundColor) {
      option.backgroundColor = 'white';
    }

    this.superInit({
      width: option.width * option.scale,
      height: option.height * option.scale,
    });

    this.display = CanvasLayer({
      width: option.width,
      height: option.height,
    });

    this.option = option;
    this.backgroundColor = option.backgroundColor;
    
    const disableImageSmoothing = context => {
      context.imageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.mozImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
    };
    disableImageSmoothing(this.canvas.context);
    disableImageSmoothing(this.display.canvas.context);
  },
  
  _render() {
    this.display.renderer.render(this);

    const opt = this.option;
    this.canvas.context.drawImage(
      this.display.canvas.domElement,
      0, 0, opt.width, opt.height,
      0, 0, opt.width * opt.scale, opt.height * opt.scale);
  },

});
