<!--
 * @Author: your name
 * @Date: 2020-07-20 18:58:58
 * @LastEditTime: 2020-07-21 08:55:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\components\Form\Cascader.vue
-->
<template>
  <div class="cascader-container-wrap">
    <div class="block">
      <span class="demonstration">默认显示所有Tag</span>
      <el-cascader
        :options="options"
        :props="props"
        clearable
      />
    </div>
    <div class="block">
      <span class="demonstration">折叠展示Tag</span>
      <el-cascader
        :options="options"
        :props="props"
        collapse-tags
        clearable
      />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        props: { multiple: true },
        options: [{
          value: 1,
          label: '东南',
          children: [{
            value: 2,
            label: '上海',
            children: [
              { value: 3, label: '普陀' },
              { value: 4, label: '黄埔' },
              { value: 5, label: '徐汇' }
            ]
          }, {
            value: 7,
            label: '江苏',
            children: [
              { value: 8, label: '南京' },
              { value: 9, label: '苏州' },
              { value: 10, label: '无锡' }
            ]
          }, {
            value: 12,
            label: '浙江',
            children: [
              { value: 13, label: '杭州' },
              { value: 14, label: '宁波' },
              { value: 15, label: '嘉兴' }
            ]
          }]
        }, {
          value: 17,
          label: '西北',
          children: [{
            value: 18,
            label: '陕西',
            children: [
              { value: 19, label: '西安' },
              { value: 20, label: '延安' }
            ]
          }, {
            value: 21,
            label: '新疆维吾尔族自治区',
            children: [
              { value: 22, label: '乌鲁木齐' },
              { value: 23, label: '克拉玛依' }
            ]
          }]
        }]
      };
    },
    methods:{
      checkDiff(index){
        if(0>index<100){
          console.log('index',index++)
        }
      }
    }
  };
</script>
