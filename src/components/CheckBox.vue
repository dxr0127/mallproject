<template>
  <div class="table-cell table-cell-with-selection" @click="changeSelect">
    <label class="checkbox-wrapper checkbox-default">
      <span class="checkbox" :class="checkflag ? 'checkbox-checked' : ''">
        <span class="checkbox-inner"></span>
        <!-- <input type="checkbox" class="ivu-checkbox-input"> -->
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: ['checkflag'],
  methods: {
    changeSelect () {
      this.$emit('changeSelect')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkbox-wrapper {
  cursor: pointer;
  font-size: 14px;
  display: inline-block;
  /* margin-right: 8px; */
}
.checkbox {
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  line-height: 1;
  position: relative;
}
.checkbox-inner {
  display: inline-block;
  width: 16px;
  height: 16px;
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #dcdee2;
  border-radius: 2px;
  background-color: #fff;
  transition: border-color .2s ease-in-out,background-color .2s ease-in-out,box-shadow .2s ease-in-out;
}
.checkbox-inner:after {
  content: '';
  width: 4px;
  height: 8px;
  position: absolute;
  top: 1px;
  left: 4px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0);
  transition: all .2s ease-in-out;
}
.checkbox-input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
}
.checkbox-checked .checkbox-inner {
  border-color: #2d8cf0;
  background-color: #2d8cf0;
}
.checkbox-checked .checkbox-inner:after {
  content: '';
  width: 4px;
  height: 8px;
  position: absolute;
  top: 2px;
  left: 5px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(1);
  transition: all .2s ease-in-out;
}
</style>
