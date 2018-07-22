phina.define('PixelatedScene', {
  superClass: 'DisplayScene',

  init: function(option) {
    this.superInit({
      width: option.width * option.scale,
      height: option.height * option.scale,
    });

    this.display = CanvasLayer({
      width: option.width,
      height: option.height,
    }).addChildTo(this);

    this.option = option;
    this.backgroundColor = option.backgroundColor;

    var disableImageSmoothing = function(context) {
      context.imageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.mozImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
    };
    disableImageSmoothing(this.canvas.context);
    disableImageSmoothing(this.display.canvas.context);
  },
  
  _render: function() {
    this.display.renderer.render(this);

    var opt = this.option;
    this.canvas.context.drawImage(
      this.display.canvas.domElement,
      0, 0, opt.width, opt.height,
      0, 0, opt.width * opt.scale, opt.height * opt.scale);
  },
});
