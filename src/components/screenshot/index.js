import SccScreenshot from './src/screenshot';

/* istanbul ignore next */
SccCanvas.install = function(Vue) {
  Vue.component(SccScreenshot.name, SccScreenshot);
};

export default SccScreenshot;