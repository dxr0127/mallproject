<template>
  <div class="cm-font-size-14">
    <List>
      <ListItem>
        <div class="cm-f-1">
          <div>
            <span class="cm-color-blue">*好物推荐</span>
            <span>（用户选择商品推荐）</span>
          </div>
        </div>
        <template slot="action">
          <li>
            <a href="">编辑</a>
          </li>
          <li class="cm-padded-r-20">
            <a href="">禁用</a>
          </li>
        </template>
      </ListItem>
      <ListItem>
        <div class="cm-f-1">
          <div>
            <span class="cm-color-blue">*最新商品</span>
            <span>（系统根据商品发布时间排序）</span>
          </div>
        </div>
        <template slot="action">
          <li>
            <a href="">编辑</a>
          </li>
          <li class="cm-padded-r-20">
            <a href="">禁用</a>
          </li>
        </template>
      </ListItem>
    </List>
  </div>
</template>
<script>
export default {
  name: 'SystemClassify',
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
</style>
