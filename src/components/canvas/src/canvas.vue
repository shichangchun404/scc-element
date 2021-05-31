<template>
  <div class="scc-canvas">
    <div class="select-box hide"  @click="showDialog()">
      <div class="select-box-icon"></div>
      <div class="select-box-text">文档反馈</div>
    </div>
    <div class="canvas-edit-box">
      <div class="dialogbg"></div>
      <div id="canvasBox" class="dialog"></div>
      <div class="botton-box">
        <button @click="closeDialog()">取消</button>
        <button @click="listen4Rectangle()">矩形工具</button>
        <button @click="listen4Text()">写入文字</button>
        <button @click="cancel()">撤回</button>
        <button @click="convertCanvasToImage()">保存提交</button>
      </div>

      <textarea id="textarea" class="textarea hide"></textarea>
      <div id="hoverRectangle" class="hoverRectangle hide"></div>
    </div>
  </div>
</template>

<script>
// import html2canvas from 'html2canvas';
export default {
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
    },
  },
  data () {
    return {
      globalcanvas: {},
      ctx: {},
      imgData: [], // 记录每一步操作内容
      selectObj:{},
      canvasBox:{},
      hoverRectangle:{},
      textarea:{},
      textareaX: 0,
      textareaY: 0,
      windowScrollTop: 0,
      startPosition: {x:0,y:0},
      endPosition: {x:0,y:0},
      startClientPoint:{x:0,y:0},
      endClientPoint: {x:0,y:0},
      isShowTextarea: false,
      isMouseDown: false, // 鼠标在canvas上长按住
    }
  },
  mounted () {
    this.selectObj = document.getElementById(this.contentId)
    this.canvasBox = document.getElementById('canvasBox')
    this.textarea = document.getElementById('textarea')
    this.hoverRectangle = document.getElementById('hoverRectangle')
    this.listenSelectContent()
    this.listenDocumentClick()
    this.listen4Rectangle()
    this.listenWindowScroll()
    this.listenHoverRectangle()
    this.drawImageInCanvas()
  },
  methods: {
    /*
    * 监听选择文旦内容
    */
    listenSelectContent(){
      let _this = this
      this.selectObj.onmouseup = function(e){
        var event = window.event || e;
        var position = {'x': e.pageX,'y': e.pageY}
        var target = event.srcElement ? event.srcElement : event.target;
        if (/input|textarea/i.test(target.tagName) && /firefox/i.test(navigator.userAgent)) {
            //Firefox在文本框内选择文字
            var staIndex=target.selectionStart;
            var endIndex=target.selectionEnd;
            if(staIndex!=endIndex){
              var sText=target.value.substring(staIndex,endIndex);
              _this.showTip(sText,target, position);
            }
        } else { //获取选中文字
          var sText = document.selection == undefined ? document.getSelection().toString():document.selection.createRange().text;
          if (sText != "") { // 将参数传入回调函数fn
            _this.showTip(sText, target, position);
          }
        }
      }
      this.selectObj.onmousedown = function(e){ //1清空dialog内容 2隐藏dialog弹窗
        _this.canvasBox.innerHTML = ''
        _this.closeDialog()
      }
    },

    /**
     * 矩形工具-监听画布鼠标时间
     */ 
    listen4Rectangle() {
      var _this = this
      this.canvasBox.onmousedown  = function(e){
        _this.isMouseDown = true
        _this.startPosition = {'x': e.offsetX,'y': e.offsetY}
        _this.startClientPoint = {'x': e.clientX,'y': e.clientY}
      }
      this.canvasBox.onmousemove = function(e) {
        if (_this.isMouseDown) {
          _this.endPosition = {'x': e.offsetX,'y': e.offsetY}
          _this.endClientPoint = {'x': e.clientX,'y': e.clientY}
          _this.printHoverRectangle(_this.startClientPoint, _this.endClientPoint)
        }
      }
    },

    /**
     * 点击动态矩形 隐藏本身
     */ 
    listenHoverRectangle () {
      let _this = this
      this.hoverRectangle.onclick = function(){
        _this.hideHoverRectangle()
        _this.isMouseDown = false
        _this.printRect(_this.startPosition, _this.endPosition)
      }
    },

    /**
     * 选择插入文字-监听画布鼠标事件
     */
    listen4Text(){
      let _this = this
      this.canvasBox.onmousedown  = function(e){}
      this.canvasBox.onmouseup = function(e){
        if (_this.isShowTextarea) {
          var text = _this.textarea.value
          _this.fillText(text, _this.textareaX, _this.textareaY)
          _this.setStyle('.textarea{display: none;}')
          _this.textarea.value = ''
          _this.isShowTextarea = false
        } else {
          _this.textareaX = e.offsetX
          _this.textareaY = e.offsetY
          _this.showTextarea(e.clientX,e.clientY)
        }
      }
      this.canvasBox.onmousemove = function(e) {}

    },

    /**
     * 监听页面滚动
     */
    listenWindowScroll() {
      let _this = this
      window.addEventListener("scroll", windowScroll);
      function windowScroll(e) {
        _this.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }    
    },

    /**
     * 展示文字输入框
     */
    showTextarea(x,y) {
      this.isShowTextarea = true
      var css = `.textarea{left: ${x}px; top: ${y}px;display: block;}`
      this.setStyle(css)
    },

    /**
     * 弹出框tip
     */
    showTip(txt,target,position){
      //this.getCanvasFromHtml()
      this.drawImageInCanvas()
      var css = `.select-box{left: ${position.x}px; top: ${position.y}px;display: block;}`
      this.setStyle(css)
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
    drawImageInCanvas(){
      var _this = this
			let img = new Image();
      img.src = this.baseImageUrl
      img.setAttribute("crossOrigin",'Anonymous')
			img.onload = function(){
        // 创建一个新的 canvas 元素
        let mycanvas = document.createElement("canvas");
        mycanvas.width = img.width
        mycanvas.height = img.height
        _this.canvasBox.appendChild(mycanvas)
        _this.globalcanvas = mycanvas
		    _this.ctx = _this.globalcanvas.getContext("2d");
				_this.ctx.drawImage(img,0,0);
        _this.canvas_copy()
			}
    },

    /**
     * 监听页面点击 取消tip弹窗
     */ 
    listenDocumentClick(){
      let _this = this
      document.onclick=function(e){
        var event = window.event || e;
        var target = event.srcElement ? event.srcElement : event.target;
        var sText = ''
        if (/input|textarea/i.test(target.tagName) && /firefox/i.test(navigator.userAgent)) {
          //Firefox在文本框内选择文字
          var staIndex=target.selectionStart;
          var endIndex=target.selectionEnd;
          if(staIndex!=endIndex){
            sText=target.value.substring(staIndex,endIndex);
          }
        } else {
          //获取选中文字
          sText = document.selection == undefined ? document.getSelection().toString():document.selection.createRange().text;
        }
        if (sText) {
          return
        }
        _this.setStyle(`.select-box{display: none;}`)
      }
    },

    /**
     * canvas转图片
     */
    convertCanvasToImage() {
      let imageSrc = this.globalcanvas.toDataURL("image/png")
      this.dataURLtoFile(imageSrc)
    },

    /**
     *  设置style
     */
    setStyle(css){
      var css2 = `.scc-canvas ${css}`
      var style = document.createElement("style");
      style.type = "text/css";
      try{
        　style.appendChild(document.createTextNode(css2));
      }catch(ex){
      　　style.styleSheet.cssText = css2; //针对IE
      }
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(style);
    },

    /**
     * 绘制矩形区域
     */
    printRect(start,end){
      this.ctx.fillStyle = this.fillStyle;
      this.ctx.fillRect(start.x, start.y-this.windowScrollTop, end.x-start.x, end.y-start.y);
      this.canvas_copy()
    },

    /**
     * 动态矩形
     */ 
    printHoverRectangle(start,end){ 
      var style = ''
      if (start.x<end.x) {
        if (start.y<end.y) {
          style = `.hoverRectangle{display: block;left: ${start.x}px;top: ${start.y}px;width: ${Math.abs(end.x-start.x)}px;height: ${Math.abs(end.y-start.y)}px;}`
        } else {
          style = `.hoverRectangle{display: block;left: ${start.x}px;top: ${end.y}px;width: ${Math.abs(end.x-start.x)}px;height: ${Math.abs(end.y-start.y)}px;}`
        } 
      } else {
        if (start.y<end.y) {
          style = `.hoverRectangle{display: block;left: ${end.x}px;top: ${start.y}px;width: ${Math.abs(end.x-start.x)}px;height: ${Math.abs(end.y-start.y)}px;}`
        } else {
          style = `.hoverRectangle{display: block;left: ${end.x}px;top: ${end.y}px;width: ${Math.abs(end.x-start.x)}px;height: ${Math.abs(end.y-start.y)}px;}`
        }
      }
      this.setStyle(style)
    },

    /**
     * 隐藏动态矩形
     */ 
    hideHoverRectangle(){
      var style = `.hoverRectangle{display: none;left: 0px;top: 0px;width: 0px;height:0px;}`
      this.setStyle(style)
    },

    /**
     * 绘制文字
     */ 
    fillText(text,x,y) {
      this.ctx.font = 'bold 16px arial';
      this.ctx.fillStyle = 'red'
      this.ctx.fillText(text, x, y-this.windowScrollTop);
      this.canvas_copy()
    },

    /**
     * 将每一步记录复制存储起来
     */
    canvas_copy(){
      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;
      this.imgData.push(this.ctx.getImageData(0, 0, width, height))
    },

    /**
     * 撤回 取出imgData记录的上一张
     */ 
    cancel(){
      if (this.imgData.length>1) {
        this.imgData.pop()
        this.ctx.putImageData(this.imgData[this.imgData.length-1],0,0);
      } else {
        console.log('已经是第一步了')
      }
    },

    /**
     * 展示蒙层 并禁止body滚动 否则canvas绘制定位有问题
     */ 
    showDialog() {
      this.setStyle(`.canvas-edit-box{display: block;}`)
      document.body.style.overflow='hidden'
    },

    /**
     * 取消蒙层 放开body滚动
     */ 
    closeDialog () {
      this.setStyle(`.canvas-edit-box{display: none;}`)
      document.body.style.overflow='auto'
    },

    /**
     * 将base64转成file
     */
    dataURLtoFile(dataurl) {
      var filename = `screenshot_${new Date().getTime()}.png`
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      var file = new File([u8arr], filename, {type:mime})
      this.$emit("getImgFile", file, dataurl)
    }
  }
}
</script>