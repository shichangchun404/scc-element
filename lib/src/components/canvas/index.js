import SccCanvas from './src/canvas';

/* istanbul ignore next */
SccCanvas.install = function(Vue) {
  Vue.component(SccCanvas.name, SccCanvas);
};

export default SccCanvas;