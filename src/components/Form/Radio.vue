<!--
 * @Author: your name
 * @Date: 2020-07-20 17:23:23
 * @LastEditTime: 2020-07-20 18:41:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\components\Form\Radio.vue
-->
<template>
  <div class="radio-container-wrap">
    <h3 class="item-title">
      单选按钮
    </h3>
    <div class="radio-item">
      <el-radio-group v-model="radio1">
        <el-radio-button label="上海" />
        <el-radio-button label="北京" />
        <el-radio-button label="广州" />
        <el-radio-button label="深圳" />
      </el-radio-group>
    </div>
    <div class="radio-item">
      <el-radio-group
        v-model="radio2"
        size="medium"
      >
        <el-radio-button label="上海" />
        <el-radio-button label="北京" />
        <el-radio-button label="广州" />
        <el-radio-button label="深圳" />
      </el-radio-group>
    </div>
    <div class="radio-item">
      <el-radio-group
        v-model="radio3"
        size="small"
      >
        <el-radio-button label="上海" />
        <el-radio-button
          label="北京"
          disabled
        />
        <el-radio-button label="广州" />
        <el-radio-button label="深圳" />
      </el-radio-group>
    </div>
    <div class="radio-item">
      <el-radio-group
        v-model="radio4"
        disabled
        size="mini"
      >
        <el-radio-button label="上海" />
        <el-radio-button label="北京" />
        <el-radio-button label="广州" />
        <el-radio-button label="深圳" />
      </el-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
      };
    }
  }
</script>

<style lang="scss" scoped>
.radio-container-wrap{
  .radio-item{
    margin: 10px 0;
  }
  .item-title{
    font-size: 20px;
  }
}
</style>
