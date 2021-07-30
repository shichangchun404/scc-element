module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/canvas/src/canvas.vue?vue&type=template&id=5f0db81a&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "scc-canvas" }, [
    _c(
      "div",
      {
        staticClass: "select-box hide",
        on: {
          click: function($event) {
            return _vm.showDialog()
          }
        }
      },
      [
        _c("div", { staticClass: "select-box-icon" }),
        _c("div", { staticClass: "select-box-text" }, [_vm._v("文档反馈")])
      ]
    ),
    _c("div", { staticClass: "canvas-edit-box" }, [
      _c("div", { staticClass: "dialogbg" }),
      _c("div", { staticClass: "dialog", attrs: { id: "canvasBox" } }),
      _c("div", { staticClass: "botton-box" }, [
        _c(
          "button",
          {
            on: {
              click: function($event) {
                return _vm.closeDialog()
              }
            }
          },
          [_vm._v("取消")]
        ),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                return _vm.listen4Rectangle()
              }
            }
          },
          [_vm._v("矩形工具")]
        ),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                return _vm.listen4Text()
              }
            }
          },
          [_vm._v("写入文字")]
        ),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                return _vm.cancel()
              }
            }
          },
          [_vm._v("撤回")]
        ),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                return _vm.convertCanvasToImage()
              }
            }
          },
          [_vm._v("保存提交")]
        )
      ]),
      _c("textarea", {
        staticClass: "textarea hide",
        attrs: { id: "textarea" }
      }),
      _c("div", {
        staticClass: "hoverRectangle hide",
        attrs: { id: "hoverRectangle" }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/canvas/src/canvas.vue?vue&type=template&id=5f0db81a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/canvas/src/canvas.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import html2canvas from 'html2canvas';
/* harmony default export */ var canvasvue_type_script_lang_js_ = ({
  name: 'SccCanvas',
  props: {
    contentId: {
      type: String,
      required: true
    },
    fillStyle: {
      type: String,
      default: 'rgba(255,106,0,.5)'
    },
    baseImageUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      globalcanvas: {},
      ctx: {},
      imgData: [], // 记录每一步操作内容
      selectObj: {},
      canvasBox: {},
      hoverRectangle: {},
      textarea: {},
      textareaX: 0,
      textareaY: 0,
      windowScrollTop: 0,
      startPosition: { x: 0, y: 0 },
      endPosition: { x: 0, y: 0 },
      startClientPoint: { x: 0, y: 0 },
      endClientPoint: { x: 0, y: 0 },
      isShowTextarea: false,
      isMouseDown: false // 鼠标在canvas上长按住
    };
  },
  mounted() {
    this.selectObj = document.getElementById(this.contentId);
    this.canvasBox = document.getElementById('canvasBox');
    this.textarea = document.getElementById('textarea');
    this.hoverRectangle = document.getElementById('hoverRectangle');
    this.listenSelectContent();
    this.listenDocumentClick();
    this.listen4Rectangle();
    this.listenWindowScroll();
    this.listenHoverRectangle();
    this.drawImageInCanvas();
  },
  methods: {
    /*
    * 监听选择文旦内容
    */
    listenSelectContent() {
      let _this = this;
      this.selectObj.onmouseup = function (e) {
        var event = window.event || e;
        var position = { 'x': e.pageX, 'y': e.pageY };
        var target = event.srcElement ? event.srcElement : event.target;
        if (/input|textarea/i.test(target.tagName) && /firefox/i.test(navigator.userAgent)) {
          //Firefox在文本框内选择文字
          var staIndex = target.selectionStart;
          var endIndex = target.selectionEnd;
          if (staIndex != endIndex) {
            var sText = target.value.substring(staIndex, endIndex);
            _this.showTip(sText, target, position);
          }
        } else {
          //获取选中文字
          var sText = document.selection == undefined ? document.getSelection().toString() : document.selection.createRange().text;
          if (sText != "") {
            // 将参数传入回调函数fn
            _this.showTip(sText, target, position);
          }
        }
      };
      this.selectObj.onmousedown = function (e) {
        //1清空dialog内容 2隐藏dialog弹窗
        _this.canvasBox.innerHTML = '';
        _this.closeDialog();
      };
    },

    /**
     * 矩形工具-监听画布鼠标时间
     */
    listen4Rectangle() {
      var _this = this;
      this.canvasBox.onmousedown = function (e) {
        _this.isMouseDown = true;
        _this.startPosition = { 'x': e.offsetX, 'y': e.offsetY };
        _this.startClientPoint = { 'x': e.clientX, 'y': e.clientY };
      };
      this.canvasBox.onmousemove = function (e) {
        if (_this.isMouseDown) {
          _this.endPosition = { 'x': e.offsetX, 'y': e.offsetY };
          _this.endClientPoint = { 'x': e.clientX, 'y': e.clientY };
          _this.printHoverRectangle(_this.startClientPoint, _this.endClientPoint);
        }
      };
    },

    /**
     * 点击动态矩形 隐藏本身
     */
    listenHoverRectangle() {
      let _this = this;
      this.hoverRectangle.onclick = function () {
        _this.hideHoverRectangle();
        _this.isMouseDown = false;
        _this.printRect(_this.startPosition, _this.endPosition);
      };
    },

    /**
     * 选择插入文字-监听画布鼠标事件
     */
    listen4Text() {
      let _this = this;
      this.canvasBox.onmousedown = function (e) {};
      this.canvasBox.onmouseup = function (e) {
        if (_this.isShowTextarea) {
          var text = _this.textarea.value;
          _this.fillText(text, _this.textareaX, _this.textareaY);
          _this.setStyle('.textarea{display: none;}');
          _this.textarea.value = '';
          _this.isShowTextarea = false;
        } else {
          _this.textareaX = e.offsetX;
          _this.textareaY = e.offsetY;
          _this.showTextarea(e.clientX, e.clientY);
        }
      };
      this.canvasBox.onmousemove = function (e) {};
    },

    /**
     * 监听页面滚动
     */
    listenWindowScroll() {
      let _this = this;
      window.addEventListener("scroll", windowScroll);
      function windowScroll(e) {
        _this.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }
    },

    /**
     * 展示文字输入框
     */
    showTextarea(x, y) {
      this.isShowTextarea = true;
      var css = `.textarea{left: ${x}px; top: ${y}px;display: block;}`;
      this.setStyle(css);
    },

    /**
     * 弹出框tip
     */
    showTip(txt, target, position) {
      //this.getCanvasFromHtml()
      this.drawImageInCanvas();
      var css = `.select-box{left: ${position.x}px; top: ${position.y}px;display: block;}`;
      this.setStyle(css);
    },

    /**
     * html2canvas 生成页面截图 存在图片跨域问题
     */
    // getCanvasFromHtml(){
    //   var _this = this
    //   var options = {allowTaint:true}
    //   html2canvas(document.body, options).then(function(canvas) {
    //     _this.globalcanvas = canvas
    //     _this.canvasBox.appendChild(canvas)
    //     _this.ctx = _this.globalcanvas.getContext("2d");
    //     _this.canvas_copy()
    //   });
    // },

    /**
     * 从服务端拿截图，绘制到canvas
    */
    drawImageInCanvas() {
      var _this = this;
      let img = new Image();
      img.src = this.baseImageUrl;
      img.setAttribute("crossOrigin", 'Anonymous');
      img.onload = function () {
        // 创建一个新的 canvas 元素
        let mycanvas = document.createElement("canvas");
        mycanvas.width = img.width;
        mycanvas.height = img.height;
        _this.canvasBox.appendChild(mycanvas);
        _this.globalcanvas = mycanvas;
        _this.ctx = _this.globalcanvas.getContext("2d");
        _this.ctx.drawImage(img, 0, 0);
        _this.canvas_copy();
      };
    },

    /**
     * 监听页面点击 取消tip弹窗
     */
    listenDocumentClick() {
      let _this = this;
      document.onclick = function (e) {
        var event = window.event || e;
        var target = event.srcElement ? event.srcElement : event.target;
        var sText = '';
        if (/input|textarea/i.test(target.tagName) && /firefox/i.test(navigator.userAgent)) {
          //Firefox在文本框内选择文字
          var staIndex = target.selectionStart;
          var endIndex = target.selectionEnd;
          if (staIndex != endIndex) {
            sText = target.value.substring(staIndex, endIndex);
          }
        } else {
          //获取选中文字
          sText = document.selection == undefined ? document.getSelection().toString() : document.selection.createRange().text;
        }
        if (sText) {
          return;
        }
        _this.setStyle(`.select-box{display: none;}`);
      };
    },

    /**
     * canvas转图片
     */
    convertCanvasToImage() {
      let imageSrc = this.globalcanvas.toDataURL("image/png");
      this.dataURLtoFile(imageSrc);
    },

    /**
     *  设置style
     */
    setStyle(css) {
      var css2 = `.scc-canvas ${css}`;
      var style = document.createElement("style");
      style.type = "text/css";
      try {
        style.appendChild(document.createTextNode(css2));
      } catch (ex) {
        style.styleSheet.cssText = css2; //针对IE
      }
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(style);
    },

    /**
     * 绘制矩形区域
     */
    printRect(start, end) {
      this.ctx.fillStyle = this.fillStyle;
      this.ctx.fillRect(start.x, start.y - this.windowScrollTop, end.x - start.x, end.y - start.y);
      this.canvas_copy();
    },

    /**
     * 动态矩形
     */
    printHoverRectangle(start, end) {
      var style = '';
      if (start.x < end.x) {
        if (start.y < end.y) {
          style = `.hoverRectangle{display: block;left: ${start.x}px;top: ${start.y}px;width: ${Math.abs(end.x - start.x)}px;height: ${Math.abs(end.y - start.y)}px;}`;
        } else {
          style = `.hoverRectangle{display: block;left: ${start.x}px;top: ${end.y}px;width: ${Math.abs(end.x - start.x)}px;height: ${Math.abs(end.y - start.y)}px;}`;
        }
      } else {
        if (start.y < end.y) {
          style = `.hoverRectangle{display: block;left: ${end.x}px;top: ${start.y}px;width: ${Math.abs(end.x - start.x)}px;height: ${Math.abs(end.y - start.y)}px;}`;
        } else {
          style = `.hoverRectangle{display: block;left: ${end.x}px;top: ${end.y}px;width: ${Math.abs(end.x - start.x)}px;height: ${Math.abs(end.y - start.y)}px;}`;
        }
      }
      this.setStyle(style);
    },

    /**
     * 隐藏动态矩形
     */
    hideHoverRectangle() {
      var style = `.hoverRectangle{display: none;left: 0px;top: 0px;width: 0px;height:0px;}`;
      this.setStyle(style);
    },

    /**
     * 绘制文字
     */
    fillText(text, x, y) {
      this.ctx.font = 'bold 16px arial';
      this.ctx.fillStyle = 'red';
      this.ctx.fillText(text, x, y - this.windowScrollTop);
      this.canvas_copy();
    },

    /**
     * 将每一步记录复制存储起来
     */
    canvas_copy() {
      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;
      this.imgData.push(this.ctx.getImageData(0, 0, width, height));
    },

    /**
     * 撤回 取出imgData记录的上一张
     */
    cancel() {
      if (this.imgData.length > 1) {
        this.imgData.pop();
        this.ctx.putImageData(this.imgData[this.imgData.length - 1], 0, 0);
      } else {
        console.log('已经是第一步了');
      }
    },

    /**
     * 展示蒙层 并禁止body滚动 否则canvas绘制定位有问题
     */
    showDialog() {
      this.setStyle(`.canvas-edit-box{display: block;}`);
      document.body.style.overflow = 'hidden';
    },

    /**
     * 取消蒙层 放开body滚动
     */
    closeDialog() {
      this.setStyle(`.canvas-edit-box{display: none;}`);
      document.body.style.overflow = 'auto';
    },

    /**
     * 将base64转成file
     */
    dataURLtoFile(dataurl) {
      var filename = `screenshot_${new Date().getTime()}.png`;
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      var file = new File([u8arr], filename, { type: mime });
      this.$emit("getImgFile", file, dataurl);
    }
  }
});
// CONCATENATED MODULE: ./src/components/canvas/src/canvas.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_canvasvue_type_script_lang_js_ = (canvasvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/canvas/src/canvas.vue





/* normalize component */

var component = normalizeComponent(
  src_canvasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/canvas/src/canvas.vue"
/* harmony default export */ var canvas = (component.exports);
// CONCATENATED MODULE: ./src/components/canvas/index.js


/* istanbul ignore next */
canvas.install = function (Vue) {
  Vue.component(canvas.name, canvas);
};

/* harmony default export */ var components_canvas = (canvas);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/col/src/col.vue?vue&type=template&id=3260bc66&
var colvue_type_template_id_3260bc66_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "scc-col" }, [
    _vm._v("\n  " + _vm._s(_vm.msg) + "\n  "),
    _c("p", { staticClass: "scc-col-p1" }, [_vm._v("111")]),
    _c("p", { staticClass: "scc-col-p2" }, [_vm._v("222")])
  ])
}
var colvue_type_template_id_3260bc66_staticRenderFns = []
colvue_type_template_id_3260bc66_render._withStripped = true


// CONCATENATED MODULE: ./src/components/col/src/col.vue?vue&type=template&id=3260bc66&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/col/src/col.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var colvue_type_script_lang_js_ = ({
  name: 'SccCol',
  data() {
    return {
      msg: 'i am scc col'
    };
  }
});
// CONCATENATED MODULE: ./src/components/col/src/col.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_colvue_type_script_lang_js_ = (colvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/col/src/col.vue





/* normalize component */

var col_component = normalizeComponent(
  src_colvue_type_script_lang_js_,
  colvue_type_template_id_3260bc66_render,
  colvue_type_template_id_3260bc66_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var col_api; }
col_component.options.__file = "src/components/col/src/col.vue"
/* harmony default export */ var col = (col_component.exports);
// CONCATENATED MODULE: ./src/components/col/index.js


/* istanbul ignore next */
col.install = function (Vue) {
  Vue.component(col.name, col);
};

/* harmony default export */ var components_col = (col);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/row/src/row.vue?vue&type=template&id=60148dcc&
var rowvue_type_template_id_60148dcc_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "scc-row" }, [
    _vm._v("\n  " + _vm._s(_vm.msg) + "\n   "),
    _c("p", { staticClass: "scc-row-p1" }, [_vm._v("111")]),
    _c("p", { staticClass: "scc-row-p2" }, [_vm._v("222")])
  ])
}
var rowvue_type_template_id_60148dcc_staticRenderFns = []
rowvue_type_template_id_60148dcc_render._withStripped = true


// CONCATENATED MODULE: ./src/components/row/src/row.vue?vue&type=template&id=60148dcc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/row/src/row.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var rowvue_type_script_lang_js_ = ({
  name: 'SccRow',
  data() {
    return {
      msg: 'i am scc row'
    };
  }
});
// CONCATENATED MODULE: ./src/components/row/src/row.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_rowvue_type_script_lang_js_ = (rowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/row/src/row.vue





/* normalize component */

var row_component = normalizeComponent(
  src_rowvue_type_script_lang_js_,
  rowvue_type_template_id_60148dcc_render,
  rowvue_type_template_id_60148dcc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var row_api; }
row_component.options.__file = "src/components/row/src/row.vue"
/* harmony default export */ var row = (row_component.exports);
// CONCATENATED MODULE: ./src/components/row/index.js


/* istanbul ignore next */
row.install = function (Vue) {
  Vue.component(row.name, row);
};

/* harmony default export */ var components_row = (row);
// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/bin/build-entry.js' */





const components = [components_canvas, components_col, components_row];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: '1.3.26',
  install,
  sccCanvas: components_canvas,
  sccCol: components_col,
  sccRow: components_row
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ])["default"];