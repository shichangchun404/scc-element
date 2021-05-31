# scc-element
### 基于vue的自定义组件

#### 组件1 scc-cnavas 用于用户截图当前页面，并具有简单标注功能。
> 全局引入方式
```bash
  import SccElement from 'scc-element'
  import 'scc-element/lib/theme/canvas.css'

  Vue.use(SccElement)
```

#### 组件属性与事件
|名称|类型|是否必需|默认值|描述|
|---|---|---|---|---|
|**contentId**|String|true|-- |需要截图的内容区域DOM的id|
|**baseImageUrl**|String|true|-- |服务端截图图片返回banse64格式字符串（客户端截图存在图片跨域问题，服务端返回url格式要设置图片跨域访问）|
|**fillStyle**|String|false|'rgba(255,106,0,.5)'|矩形工具填充颜色|
|**getImgFile**|Function|false|-- |获取截图后的生成的图片函数|



>示例：
```bash
<template>
    <div>
      <div id="content">我是正文内容</div>
      <scc-canvas contentId="content" @getImgFile="getImgFile" :baseImageUrl="baseImageUrl"></scc-canvas>
    </div>
</template>

<script>
import {upfile} from '@/api'
export default {
  data(){
    return {
      baseImageUrl: '"data:images/png;base64,XXXXXXXXXXXXXXXXXXXXXXXX'
    }
  }, 
  methods: {
    async getImgFile(file, data) {
      let form = new FormData();
      form.append("file",file);
      let data = await upfile(form) // 将图片上传服务端
    }
  }
}
</script>
```


