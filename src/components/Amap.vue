<template>
  <div class="cm-margin-t-10">
    <div id="container" style="width: 600px; height:300px"></div>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: 'Amap',
  props: [],
  mounted () {
    this.init()
  },
  methods: {
    init: function () {
      var map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 18
      })
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
