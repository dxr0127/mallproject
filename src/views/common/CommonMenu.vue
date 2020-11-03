<template>
  <div class="menucont cm-f" :class="menuind === '0' ? 'w120' : 'w250'">
    <div class="menubox">
      <div class="menuttl cm-f-c-c">某某平台</div>
      <div class="menulistbox">
        <div
          class="menulist cm-padded-l-20 cm-font-size-14"
          :class="menuind === item.key ? 'active' : ''"
          v-for="(item, key) in menuList"
          :key="key"
          @click="openWin(item.url, item.children)"
        >
          <i class="iconfont" :class="item.icon"></i>
          <span class="cm-margin-l-10" v-text="item.title">概况</span>
        </div>
      </div>
    </div>
    <div class="submenubox cm-f-1" v-if="subMenu.length > 0">
      <div class="submenuttl cm-border-b" v-text="menuinfo[menuind]"></div>
      <Menu :active-name="urlkey" :open-names="openname" @on-select="openFrm" width="130px">
        <div
          v-for="(item, key) in subMenu"
          :key="key"
        >
          <Submenu
            :name="item.name"
          >
            <template slot="title">
              {{item.info}}
            </template>
            <MenuItem
              v-for="(v, k) in item.children"
              :key="k"
              :name="v.name"
              v-text="v.title">
            </MenuItem>
          </Submenu>
        </div>
      </Menu>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
// 引入菜单
import {menuList, menuinfo, menuurl} from '../../utils/menu'
export default {
  name: 'CommonMenu',
  data () {
    return {
      menuList,
      menuinfo,
      menuurl,
      subMenu: [],
      openname: []
    }
  },
  props: [],
  beforeMount () {
  },
  created () {
    if (this.menuind !== '0') {
      this.menuList.forEach(data => {
        if (data.key === this.menuind) {
          this.subMenu = data.children
          this.openname = this.subMenu.map(data => {
            return data.name
          })
          return true
        }
      })
    }
  },
  mounted () {
  },
  methods: {
    openWin (url, data) {
      this.subMenu = []
      setTimeout(() => {
        this.subMenu = data
        if (this.$route.path !== url) {
          this.openname = this.subMenu.map(data => {
            return data.name
          })
          this.$router.push({
            path: url
          })
        }
      })
    },
    openFrm (name) {
      this.$router.push({
        path: this.menuurl[name]
      })
    }
  },
  computed: {
    ...mapState([
      'menuind',
      'urlkey'
    ])
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../../assets/css/menu.css');
</style>
