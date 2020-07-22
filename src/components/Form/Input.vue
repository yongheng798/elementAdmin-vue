<!--
 * @Author: your name
 * @Date: 2020-07-20 18:46:47
 * @LastEditTime: 2020-07-20 18:47:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\components\Form\Input.vue
-->
<template>
  <div class="input-container-wrap">
    <div>
      <el-input
        v-model="input1"
        placeholder="请输入内容"
      >
        <template slot="prepend">
          Http://
        </template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input
        v-model="input2"
        placeholder="请输入内容"
      >
        <template slot="append">
          .com
        </template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input
        v-model="input3"
        placeholder="请输入内容"
        class="input-with-select"
      >
        <el-select
          slot="prepend"
          v-model="select"
          placeholder="请选择"
        >
          <el-option
            label="餐厅名"
            value="1"
          />
          <el-option
            label="订单号"
            value="2"
          />
          <el-option
            label="用户电话"
            value="3"
          />
        </el-select>
        <el-button
          slot="append"
          icon="el-icon-search"
        />
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
