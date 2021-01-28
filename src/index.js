import SccCol from './components/col/index.js';
import SccRow from './components/row/index.js';

const components = [
  SccCol,
  SccRow
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
  version: '0.0.3',
  install,
  SccCol,
  SccRow
};

