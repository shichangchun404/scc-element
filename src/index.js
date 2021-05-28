import SccCol from './components/col/index.js';
import SccRow from './components/row/index.js';
import SccCanvas from './components/canvas/index.js';
import SccScreenshot from './components/screenshot/index.js';

const components = [
  SccCol,
  SccRow,
  SccCanvas,
  SccScreenshot
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.4',
  install,
  SccCol,
  SccRow,
  SccCanvas,
  SccScreenshot
};

