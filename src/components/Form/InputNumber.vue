<!--
 * @Author: your name
 * @Date: 2020-07-20 18:49:24
 * @LastEditTime: 2020-07-20 18:49:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\components\Form\InputNumber.vue
-->
<template>
  <el-input-number
    v-model="num"
    :min="1"
    :max="10"
    label="描述文字"
    @change="handleChange"
  />
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
