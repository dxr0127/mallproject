<template>
  <div class="contbox cm-f">
    <img src="../../../static/images/image/mobile.png" class="mobileimg" alt="">
    <div class="inner-cont cm-margin-l-20 cm-f-1 bg-light-grey">
      <div class="inner-top cm-padded-20 bg-white">
        <div class="cm-f-b-c">
          <div class="cm-f-s-c">
            <uploads></uploads>
            <div class="cm-color-grey cm-font-size-12 cm-margin-l-10">建议宽度480px以上，大小2M以下，最多20张（拖拽图片调整顺序）</div>
          </div>
          <div>
            <span class="cm-color-blue">刷新</span>
          </div>
        </div>
      </div>
      <div class="cm-padded-20 cm-f cm-f-w">
        <div class="imgbox cm-f-c-c cm-margin-r-10"
          v-for="(item, key) in imglist"
          :key="key"
          draggable="true"
          @dragstart="handleDragStart($event, item)"
          @dragover.prevent="handleDragOver($event, item)"
          @dragenter="handleDragEnter($event, item)"
          @dragend="handleDragEnd($event, item)">
          <img :src="item.url" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Uploads from '../../components/Uploads'
import img1 from '../../../static/images/image/avatar.jpg'
import img2 from '../../../static/images/image/2.jpg'
export default {
  name: 'AddDetail',
  data () {
    return {
      imglist: [{
        url: img1
      }, {
        url: img2
      }],
      dragging: ''
    }
  },
  props: ['formValidate', 'ruleValidate'],
  created () {
  },
  components: {
    Uploads
  },
  methods: {
    handleDragStart (e, item) {
      this.dragging = item
    },
    handleDragEnd (e, item) {
      this.dragging = null
    },
    // 首先把div变成可以放置的元素，即重写dragenter/dragover
    handleDragOver (e) {
      e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
    },
    handleDragEnter (e, item) {
      e.dataTransfer.effectAllowed = 'move' // 为需要移动的元素设置dragstart事件
      if (item === this.dragging) {
        return
      }
      const newItems = [...this.imglist]
      const src = newItems.indexOf(this.dragging)
      const dst = newItems.indexOf(item)
      newItems.splice(dst, 0, ...newItems.splice(src, 1))
      this.imglist = newItems
    }
  }
}
</script>
<style scoped>
  .contbox {
    padding: 30px 40px;
  }
  .mobileimg {
    width: 360px;
  }
  .inner-cont {
    border: 1px solid #ddd;
  }
  .imgbox {
    width: 120px;
    height: 120px;
    overflow: hidden;
  }
</style>
