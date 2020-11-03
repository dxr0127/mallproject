<template>
  <div>
    <div class="cm-body">
      <common-menu></common-menu>
      <div class="cm-right">
        <common-header></common-header>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from './views/common/CommonHeader'
import CommonMenu from './views/common/CommonMenu'
export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonMenu
  }
}
</script>

<style>
@import url('./assets/css/common.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
