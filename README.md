# scc-element
### 基于vue的自定义组件

>组建1 scc-cnavas 用于用户截图当前页面，并具有简单标注功能。
全局引入方式
```bash
  import SccElement from 'scc-element'
  import 'scc-element/lib/theme/canvas.css'

  Vue.use(SccElement)
```

>使用组建 需要截图的内容区域 id="content" 事件getImgile会返回编辑后生成的file文件
```bash
<template>
    <div>
      <div id="content">我是正文内容</div>
      <scc-canvas @getImgFile="getImgFile"></scc-canvas>
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


