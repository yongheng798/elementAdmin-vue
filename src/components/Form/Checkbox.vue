<!--
 * @Author: your name
 * @Date: 2020-07-20 18:37:45
 * @LastEditTime: 2020-07-20 18:41:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\components\Form\Checkbox.vue
-->
<template>
  <div class="checkbox-container-wrap">
    <h3 class="item-title">
      多选按钮
    </h3>
    <el-checkbox-group
      v-model="checkedCities"
      :min="1"
      :max="2"
    >
      <el-checkbox
        v-for="city in cities"
        :key="city"
        :label="city"
      >
        {{ city }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkedCities: ['上海', '北京'],
        cities: cityOptions
      };
    }
  };
</script>
