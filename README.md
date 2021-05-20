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
|**fillStyle**|String|false|'rgba(192, 80, 77, 0.5)'|矩形工具填充颜色|
|**getImgFile**|Function|false|-- |获取截图后的生成的图片函数|



>示例：
```bash
<template>
    <div>
      <div id="content">我是正文内容</div>
      <scc-canvas contentId="content" @getImgFile="getImgFile"></scc-canvas>
    </div>
</template>

<script>
import {upfile} from '@/api'
export default {
  methods: {
    async getImgFile(file) {
      let form = new FormData();
      form.append("file",file);
      let data = await upfile(form) // 将图片上传服务端
    }
  }
}
</script>
```


