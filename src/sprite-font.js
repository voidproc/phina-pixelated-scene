import * as phina from 'phina.js';

phina.define('SpriteFont', {
  superClass: 'DisplayElement',

  init(option) {
    this.superInit();
    this.image = AssetManager.get('image', option.image);
    this.width = this.image.domElement.width;
    this.height = this.image.domElement.height;
    this.text = option.text || '';
    this.charWidth = option.charWidth;
    this.charHeight = option.charHeight;
    this.scale = option.scale || 1;
  },

  draw(canvas) {
    const charW = this.charWidth;
    const charH = this.charHeight;
    const scale = this.scale;
    const maxCharsX = Math.floor(this.width / charW);
    let drawX = this.x;
    let drawY = this.y;

    for (let i=0; i<this.text.length; i++) {
      const index = this.text[i].charCodeAt(0) - 32;
      const x = index % maxCharsX;
      const y = Math.floor(index / maxCharsX);

      canvas.context.drawImage(
        this.image.domElement,
        x * charW, y * charH, charW, charH,
        drawX, drawY, charW * scale, charH * scale);

      drawX += charW * scale;
    }
  },

});
