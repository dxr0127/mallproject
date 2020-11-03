<template>
  <div class="cm-font-size-14 cm-padded-l-20">
    <List>
      <ListItem>
        <div class="cm-f-1">
          <div class="cm-f-s-c">
            <div class="item cm-f-s-c">
              <div class="imgbox cm-margin-r-10">
                <img src="../../../static/images/image/1.png" alt="">
              </div>
              <span>按摩椅</span>
            </div>
            <div class="item">商品数量：100</div>
          </div>
        </div>
        <template slot="action">
          <li>
            <a href="">编辑</a>
          </li>
          <li class="cm-padded-r-20">
            <a href="">删除</a>
          </li>
        </template>
      </ListItem>
      <ListItem>
        <div class="cm-f-1">
          <div class="cm-f-s-c">
            <div class="item cm-f-s-c">
              <div class="imgbox cm-margin-r-10">
                <img src="../../../static/images/image/1.png" alt="">
              </div>
              <span>按摩椅</span>
            </div>
            <div class="item">商品数量：100</div>
          </div>
        </div>
        <template slot="action">
          <li>
            <a href="">编辑</a>
          </li>
          <li class="cm-padded-r-20">
            <a href="">删除</a>
          </li>
        </template>
      </ListItem>
    </List>
  </div>
</template>
<script>
export default {
  name: 'ClassifyList',
  data () {
    return {
    }
  },
  created () {
  },
  components: {
  },
  methods: {
  }
}
</script>
<style scoped>
@import url(../../assets/css/goods.css);
</style>
