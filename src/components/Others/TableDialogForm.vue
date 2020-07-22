<!--
 * @Author: your name
 * @Date: 2020-07-22 14:06:50
 * @LastEditTime: 2020-07-22 17:03:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\components\Others\TableDialogForm.vue
-->
<template>
  <div class="dialog-form-wrap">
    <el-dialog
      :title="dialogViewTitle"
      :visible.sync="dialogFormVisible"
      :before-close="isShowDialogFormVisible"
      :close-on-click-modal="false"
      center
    >
      <el-form
        ref="editTableForm"
        :model="editTableForm"
      >
        <div
          v-for="(item,indexs) in viewData"
          :key="indexs"
          class="items"
        >
          <el-form-item
            v-for="(val,index) in item"
            :key="index"
            :label="`${val}：`"
            :label-width="formLabelWidth"
          >
            <el-input
              v-model="viewDataValues[index]"
              :name="index"
              :prop="index"
              :rules="{
                required: true, message: `${val}不能为空`, trigger: 'blur'
              }"
              autocomplete="off"
            />
          </el-form-item>
        </div>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="isShowDialogFormVisible">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="isEditDialogFormVisible('editTableForm')"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'TableDialogForm',
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
    dialogFormVisible:{
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
  data(){
    return{
      formLabelWidth:'120px',
      editTableForm:{}
    }
  },
  methods:{
    // 编辑保存
    isEditDialogFormVisible(){
      console.log('this.viewDataValues',this.viewDataValues)
      // 校验
      // this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('submit!');
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });
      // // 取值
      this.$emit('isEditDialogFormVisible',this.viewDataValues)
      this.$emit('iSShowDialogFormVisible',false)
    },
    // 取消编辑关闭弹窗
    isShowDialogFormVisible(){
      this.$emit('iSShowDialogFormVisible',false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
