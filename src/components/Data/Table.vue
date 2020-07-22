<!--
 * @Author: your name
 * @Date: 2020-07-21 09:07:47
 * @LastEditTime: 2020-07-22 16:57:48
 * @LastEditors: Please set LastEditors
 * @Description: 表格
 * @FilePath: \vue-admin-template\src\components\Data\Table.vue
-->
<template>
  <div class="table-container-wrap">
    <el-table
      ref="multipleTable"
      :data="tableData"
      :default-sort="{prop: 'date', order: 'descending'}"
      tooltip-effect="dark"
      style="width: 100%"
      height="500"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        fixed
        type="selection"
        width="55"
      />
      <el-table-column
        sortable
        prop="date"
        label="日期"
        width="150"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      >
        <template slot-scope="scope">
          <el-popover
            trigger="hover"
            placement="top"
          >
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div
              slot="reference"
              class="name-wrapper"
            >
              <el-tag size="medium">
                {{ scope.row.name }}
              </el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120"
      />
      <el-table-column
        prop="city"
        label="市区"
        width="120"
      />
      <el-table-column
        prop="address"
        label="地址"
        width="300"
        :formatter="formatter"
      />
      <el-table-column
        sortable
        prop="zip"
        label="邮编"
        width="120"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            size="mini"
            @click="handleClickView(scope.row)"
          >
            查看
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">
        切换第二、第三行的选中状态
      </el-button>
      <el-button @click="toggleSelection()">
        取消选择
      </el-button>
    </div>
    <TableDialogView
      :view-data="viewData"
      :view-data-values="viewDataValues"
      :show-dialog-visible="showDialogVisible"
      :dialog-view-title="dialogViewTitle"
      @iSshowDialogVisible="iSshowDialogVisible"
    />
    <TableDialogForm
      :view-data="viewData"
      :view-data-values="viewDataValues"
      :dialog-form-visible="dialogFormVisible"
      :dialog-view-title="dialogViewTitle"
      @iSShowDialogFormVisible="iSShowDialogFormVisible"
      @isEditDialogFormVisible="isEditDialogFormVisible"
    />
  </div>
</template>

<script>
  import TableDialogView from '@/components/Others/TableDialogView'
  import TableDialogForm from '@/components/Others/TableDialogForm'

  export default {
    name:'Table',
    components:{
      TableDialogView,
      TableDialogForm
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1512 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1512 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1514 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1511 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-09',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-10',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1510 弄',
          zip: 200333
        }, {
          date: '2016-05-11',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1511 弄',
          zip: 200333
        },{
          date: '2016-05-12',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1521 弄',
          zip: 200333
        },
        ],
        // 查看表格数据
        viewData:[],
        showDialogVisible:false,
        dialogViewTitle:'',
        viewDataValues:{},
        // 编辑表格数据
        dialogFormVisible: false,
      }
    },
    methods:{
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      formatter(row) {
        return row.address;
      },
      // 编辑
      handleEdit(index, row) {
        console.log(index, 'row',row);
        const values = []
        const valuesNames = []
        this.$refs.multipleTable.$children.forEach(obj => {
          if(obj.label && obj.label!==undefined &&obj.label!=='') {
            values.push(obj.label)
            }
          if(obj.prop && obj.prop!==undefined && obj.prop!=='') {
            valuesNames.push(obj.prop)
            }
          })
        console.log('当前行数据',row,'values',values.filter(Boolean))
        console.log('valuesNames',valuesNames.filter(Boolean))
        // 重新组装数据
        const valuesArr = values.filter(Boolean)
        const valuesNamesArr = valuesNames.filter(Boolean)
        // const rowArr = Array.from(row)
        const viewDataRow = valuesNamesArr.map((item, index) => {
          const obj = {}
          this.$set(obj, item, valuesArr[index])
          return obj
        })
        console.log('viewDataValues ', row)
        this.dialogViewTitle = '编辑数据'
        this.viewDataValues = row
        this.viewData = viewDataRow
        this.dialogFormVisible = true
      },
      // 查看
      handleClickView(row){
        const values = []
        const valuesNames = []
        this.$refs.multipleTable.$children.forEach(obj => {
          if(obj.label && obj.label!==undefined &&obj.label!=='') {
            values.push(obj.label)
            }
          if(obj.prop && obj.prop!==undefined && obj.prop!=='') {
            valuesNames.push(obj.prop)
            }
          })
        console.log('当前行数据',row,'values',values.filter(Boolean))
        console.log('valuesNames',valuesNames.filter(Boolean))
        // 重新组装数据
        const valuesArr = values.filter(Boolean)
        const valuesNamesArr = valuesNames.filter(Boolean)
        // const rowArr = Array.from(row)
        const viewDataRow = valuesNamesArr.map((item, index) => {
          const obj = {}
          this.$set(obj, item, valuesArr[index])
          return obj
        })
        console.log('crr==== ', viewDataRow)
        this.dialogViewTitle = '查看数据'
        this.viewDataValues = row
        this.viewData = viewDataRow
        this.showDialogVisible = true
      },
      // 删除
      handleDelete(index, row) {
        console.log(index, row);
      },
      // 查看关闭弹窗
      iSshowDialogVisible(val){
        this.showDialogVisible = val
      },
      // 编辑关闭弹窗
      iSShowDialogFormVisible(val){
        this.dialogFormVisible = val
      },
      // 编辑保存
      isEditDialogFormVisible(val,index){
        this.$set(this.tableData,this.$refs.multipleTable.setCurrentRow(index),val)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
