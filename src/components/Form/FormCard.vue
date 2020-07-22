<!--
 * @Author: your name
 * @Date: 2020-07-20 17:05:24
 * @LastEditTime: 2020-07-20 18:36:11
 * @LastEditors: Please set LastEditors
 * @Description: 表单卡片
 * @FilePath: \vue-admin-template\src\components\Form\FormCard.vue
-->
<template>
  <div class="form-card-container-wrap">
    <h3>表单组件模板</h3>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
    >
      <slot name="form-item" />
    </el-form>
  </div>
</template>

<script>
export default {
  name:'FormCard',
  data(){
    return{
      form:{}
    }
  }
}
</script>
