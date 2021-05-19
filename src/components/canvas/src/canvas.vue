<template>
  <div class="scc-Canvas">
    <div class="select-widFeedback hide" style="color:yellow; position: absolute; z-index: 3;" @click="showDialog()">
      <div class="select-widFeedback-icon"></div>
      <div class="select-widFeedback-text" data-spm-anchor-id="a2c4g.11186623.0.i54.37466d72FONjUY">文档反馈</div>
    </div>
    <div class="canvas-edit-box">
      <div class="dialogbg"></div>
      <div id="dialog" class="dialog"></div>
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
    <div id="imgBox"></div>
  </div>
</template>

<script>
export default {
  name: 'SccCanvas',
  data () {
    return {
      globalcanvas: {},
      ctx: {},
      imgData: [], // 记录每一步操作内容
      selectObj:{},
      canvasBox:{},
      imgBox:{},
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
      isMouseDown: false, // 鼠标在canvas上长安
      fillStyle: 'rgba(192, 80, 77, 0.5)'
    }
  },
  mounted () {
    this.selectObj = document.getElementById('content')
    this.canvasBox = document.getElementById('dialog')
    this.imgBox = document.getElementById('imgBox')
    this.textarea = document.getElementById('textarea')
    this.hoverRectangle = document.getElementById('hoverRectangle')

    this.listenSelectContent()
    this.listenDocumentClick()
    this.listen4Rectangle()
    this.listenWindowScroll()
    this.listenHoverRectangle()
  },
  methods: {
    /*
    * 监听选择文旦内容
    */
    listenSelectContent(){
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
              this.showTip(sText,target, position);
            }
        } else { //获取选中文字
          var sText = document.selection == undefined ? document.getSelection().toString():document.selection.createRange().text;
          if (sText != "") { // 将参数传入回调函数fn
            this.showTip(sText, target, position);
          }
        }
      }
      this.selectObj.onmousedown = function(e){ //1清空dialog内容 2隐藏dialog弹窗
        this.canvasBox.innerHTML = ''
        closeDialog()
      }
    },

    /**
     * 矩形工具-监听画布鼠标时间
     */ 
    listen4Rectangle() {
      this.canvasBox.onmousedown  = function(e){
        this.isMouseDown = true
        this.startPosition = {'x': e.offsetX,'y': e.offsetY}
        this.startClientPoint = {'x': e.clientX,'y': e.clientY}
      }
      this.canvasBox.onmousemove = function(e) {
        if (this.isMouseDown) {
          this.endPosition = {'x': e.offsetX,'y': e.offsetY}
          this.endClientPoint = {'x': e.clientX,'y': e.clientY}
          this.printHoverRectangle(this.startClientPoint, this.endClientPoint)
        }
      }
    },

    /**
     * 点击动态矩形 隐藏本身
     */ 
    listenHoverRectangle () {
      this.hoverRectangle.onclick = function(){
        this.hideHoverRectangle()
        this.isMouseDown = false
        this.printRect(this.startPosition, this.endPosition)
      }
    },

    /**
     * 选择插入文字-监听画布鼠标事件
     */
    listen4Text(){
      this.canvasBox.onmousedown  = function(e){}
      this.canvasBox.onmouseup = function(e){
        if (this.isShowTextarea) {
          var text = this.textarea.value
          this.fillText(text, this.textareaX, this.textareaY)
          this.setStyle('.textarea{display: none;}')
          this.textarea.value = ''
          this.isShowTextarea = false
        } else {
          this.textareaX = e.offsetX
          this.textareaY = e.offsetY
          showTextarea(e.clientX,e.clientY)
        }
      }
      this.canvasBox.onmousemove = function(e) {}

    },

    /**
     * 监听页面滚动
     */
    listenWindowScroll() {
      window.addEventListener("scroll", windowScroll);
      function windowScroll(e) {
        this.windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
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
      this.getCanvasFromHtml()
      var css = `.select-widFeedback{left: ${position.x}px; top: ${position.y}px;display: block;}`
      this.setStyle(css)
    },

    /**
     * html2canvas 生成页面截图
     */
    getCanvasFromHtml(){
      html2canvas(document.body).then(function(canvas) {
        this.globalcanvas = canvas
        this.canvasBox.appendChild(canvas)
        this.ctx = this.globalcanvas.getContext("2d");
        canvas_copy()
      });
    },

    /**
     * 监听页面点击 取消tip弹窗
     */ 
    listenDocumentClick(){
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
        this.setStyle(`.select-widFeedback{display: none;}`)
      }
    },

    /**
     * canvas转图片
     */
    convertCanvasToImage(canvas) {
      var image = new Image();
      image.src = this.globalcanvas.toDataURL("image/png");
      this.imgBox.appendChild(image)
    },

    /**
     *  设置style
     */
    setStyle(css){
      var style = document.createElement("style");
      style.type = "text/css";
      try{
        　style.appendChild(document.createTextNode(css));
      }catch(ex){
      　　style.styleSheet.cssText = css; //针对IE
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
      var style = `.hoverRectangle{display: block;left: ${start.x}px;top: ${start.y}px;width: ${end.x-start.x}px;height: ${end.y-start.y}px;}`
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
      if (imgData.length>1) {
        this.imgData.pop()
        this.ctx.putImageData(this.imgData[this.mgData.length-1],0,0);
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
    }
  }
}
</script>