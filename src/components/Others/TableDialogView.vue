<!--
 * @Author: your name
 * @Date: 2020-07-21 14:39:37
 * @LastEditTime: 2020-07-22 15:07:33
 * @LastEditors: Please set LastEditors
 * @Description: 表格查看弹窗
 * @FilePath: \vue-admin-template\src\components\Others\TableDialog.vue
-->
<template>
  <div class="dialog-wrap">
    <el-dialog
      :title="dialogViewTitle"
      :visible.sync="showDialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <div class="view-details-content">
        <el-card
          class="box-card"
          shadow="never"
        >
          <div
            v-for="(item,indexs) in viewData"
            :key="indexs"
            class="text item"
          >
            <div
              v-for="(val,index) in item"
              :key="index"
              class="item-list"
            >
              {{ val }}: {{ viewDataValues[index] }}
            </div>
          </div>
        </el-card>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { _ } from 'lodash'

export default {
  name:'TableDialogView',
  props:{
    viewData:{
      type:Array,
      required:true,
      default:()=>[]
    },
    viewDataValues:{
      type:Object,
      required:true,
      default:()=>{}
    },
    showDialogVisible:{
      type:Boolean,
      required:true,
      default:false
    },
    dialogViewTitle:{
      type:String,
      required:true,
      default:''
    }
  },
  methods: {
    handleClose() {
      this.$confirm('确认关闭？')
        .then( ()=> {
          this.$emit('iSshowDialogVisible',false)
        })
        .catch(() => {
          this.$emit('iSshowDialogVisible',true)
        });
    },
    dialogVisible(){
      // this.showDialogVisible = false
      this.$emit('iSshowDialogVisible',false)
    }
  }
};
</script>

<style lang="scss" scoped>
.view-details-content{
  .el-dialog__body{
    padding: 0 20px;
  }
  .el-card{
    border: none;
  }
  .box-card{
    .text {
      font-size: 14px;
    }
    .item {
      padding: 8px 0;
    }
    .box-card {
      width: 480px;
    }
  }
}
</style>
