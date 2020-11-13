<template>
  <div class="cm-f">
    <div class="demo-upload-list" v-for="(item, key) in uploadList" :key="key">
      <template v-if="item.status === 'finished'">
        <img :src="item.url">
        <div class="demo-upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
        </div>
      </template>
      <template v-else>
        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
      </template>
    </div>
    <Upload
      ref="upload"
      :show-upload-list="false"
      :default-file-list="defaultList"
      :on-success="handleSuccess"
      :format="['mp4','wmv','mov']"
      :max-size="size*1024"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      multiple
      type="drag"
      action="/uploadapis/api/Upload/upload"
      style="display: inline-block;width:58px;">
      <div style="width: 58px;height:58px;line-height: 58px;">
        <!-- <Icon type="ios-camera" size="20"></Icon> -->
        <Icon type="md-add" size="20" />
      </div>
    </Upload>
    <Modal title="View Image" v-model="visible">
      <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'AddFiles',
  data () {
    return {
      defaultList: [],
      imgName: '',
      visible: false,
      uploadList: []
    }
  },
  props: ['size'],
  mounted () {
    this.uploadList = this.$refs.upload.fileList
  },
  methods: {
    handleView (name) {
      this.imgName = name
      this.visible = true
    },
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    },
    handleSuccess (res, file) {
      // console.log(JSON.stringify(res))
      // console.log(JSON.stringify(file))
      file.url = 'http://62.234.123.212:8045' + res.data
      file.name = file.name
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '请上传mp4、wmv、或mov格式的视频'
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '超出文件大小限制',
        desc: '请上传10M以内的视频'
      })
    },
    handleBeforeUpload () {
      const check = this.uploadList.length < 1
      if (!check) {
        this.$Notice.warning({
          title: '最多可上传一个视频.'
        })
      }
      return check
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
