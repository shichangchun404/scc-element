import SccCol from './src/col';

/* istanbul ignore next */
SccCol.install = function(Vue) {
  Vue.component(SccCol.name, SccCol);
};

export default SccCol;