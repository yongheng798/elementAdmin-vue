<!--
 * @Author: your name
 * @Date: 2020-07-23 14:33:04
 * @LastEditTime: 2020-07-23 15:17:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\components\Navigation\Steps.vue
-->
<template>
  <div class="steps-wrap">
    <el-steps
      :active="active"
      align-center
      finish-status="success"
    >
      <el-step
        title="步骤1"
        description="这是一段很长很长很长的描述性文字"
        @click.native="on_click(1)"
      >
        <i
          slot="icon"
          class="el-icon-edit"
        />
      </el-step>
      <el-step
        title="步骤2"
        description="这是一段很长很长很长的描述性文字"
        @click.native="on_click(2)"
      >
        <i
          slot="icon"
          class="el-icon-upload"
        />
      </el-step>
      <el-step
        title="步骤3"
        description="这是一段很长很长很长的描述性文字"
        @click.native="on_click(3)"
      >
        <i
          slot="icon"
          class="el-icon-picture"
        />
      </el-step>
      <el-step
        title="步骤4"
        description="这是一段很长很长很长的描述性文字"
        @click.native="on_click(4)"
      >
        <i
          slot="icon"
          class="el-icon-success"
        />
      </el-step>
      <el-step
        title="步骤 5"
        icon="el-icon-upload"
      >
        <template slot="icon">
          <img
            src="http://img.zcool.cn/community/01bc1c5694b3e932f87574bef9bc29.png"
            style="height:25x;width:25px;"
          >
        </template>
      </el-step>
    </el-steps>
    <el-button
      style="margin-top: 12px;"
      @click="next"
    >
      下一步
    </el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 3) this.active = 0;
        console.log(this.active)
      },
      // 点击图标
      on_click(e){
        console.log(e);
        if(e != '' || e != null){ this.active = e }
      }
    }
  }
</script>

<style lang="scss" scoped>
.steps-wrap{
  .el-step.is-horizontal{
    cursor: pointer;
  }
}
</style>
