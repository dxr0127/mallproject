<template>
  <div class="cm-border-l">
    <header id="header">
      <div class="header-left cm-f-s-c">
        <Breadcrumb>
          <BreadcrumbItem v-for="(item, key) in bread" :key="key">{{item}}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="cm-f-e-c">
        <Badge :count="100" class="cm-pointer">
          <Icon type="ios-notifications-outline" size="24"></Icon>
        </Badge>
        <div class="margin-l-30 cm-pointer">
          <div class="userbox cm-f-e-c">
            <div class="cm-margin-l-20">
              <Avatar :src="img" />
            </div>
            <div class="cm-margin-l-5">175****0000</div>
            <Icon type="ios-arrow-forward" class="cm-margin-l-10" />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import img from '../../../static/images/image/avatar.jpg'
export default {
  name: 'CommonHeader',
  data () {
    return {
      img,
      localData: JSON.parse(localStorage.getItem('data'))
    }
  },
  components: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  computed: {
    ...mapState([
      'ttl',
      'bread'
    ])
  }
}
</script>
<style scoped>
@import url('../../assets/css/header.css');
</style>
