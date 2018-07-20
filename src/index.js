import * as phina from 'phina.js';
phina.globalize();

import { CONFIG } from './config';
CONFIG.setScale((() => {
  const match = document.location.search.match(/[\?&]scale=([1-8])/);
  if (match) {
    return Number(match[1]);
  }
  return CONFIG.defaultScale;
})());

import { ASSETS } from './assets';
import { SCENES } from './scenes';
import './pixelated-scene';
import './sprite-font';
import './title-scene';
import './main-scene';

phina.main(function() {
  var app = GameApp({
    title: CONFIG.appTitle,
    width: CONFIG.width * CONFIG.scale,
    height: CONFIG.height * CONFIG.scale,
    fit: false,
    fps: CONFIG.fps,
    assets: ASSETS,
    scenes: SCENES,
    autoPause: false,
    pixelated: true,
    startLabel: 'title-custom',
    query: '#display',
  });
  //app.enableStats();
  app.run();
});
