<!--
 * @Author: your name
 * @Date: 2020-07-21 09:07:22
 * @LastEditTime: 2020-07-21 10:33:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\views\custom\data-table.vue
-->
<template>
  <div class="data-table-container-wrap">
    <Table />
    <Pagination />
  </div>
</template>

<script>
import Table from '@/components/Data/Table'
import Pagination from '@/components/Data/Pagination'

export default {
  name:'',
  components:{
    Table,
    Pagination
  },
  data(){
    return{}
  },
  methods:{}
}
</script>

<style lang="scss" scoped>
.data-table-container-wrap{
  padding: 20px;
}
</style>
