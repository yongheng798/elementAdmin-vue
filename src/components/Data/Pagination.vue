<!--
 * @Author: your name
 * @Date: 2020-07-21 10:29:37
 * @LastEditTime: 2020-07-21 11:07:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\components\Data\Pagination.vue
-->
<template>
  <div class="pagination-wrap">
    <el-row
      type="flex"
      class="row-bg"
    >
      <el-col :span="24">
        <div class="grid-content bg-purple-dark  purple-light">
          <el-pagination
            class="text-right"
            background
            :hide-on-single-page="singlePage"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'Pagination',
  data() {
    return {
      singlePage: true,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
}
</script>

<style lang="scss" scoped>
.text-right{
  text-align: right;
}
</style>
