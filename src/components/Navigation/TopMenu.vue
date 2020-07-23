<!--
 * @Author: your name
 * @Date: 2020-07-23 09:27:52
 * @LastEditTime: 2020-07-23 11:45:50
 * @LastEditors: Please set LastEditors
 * @Description: 顶部菜单选项
 * @FilePath: \vue-admin-template\src\components\Navigation\TopMenu.vue
-->
<template>
  <div class="top-menu-wrap">
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :unique-opened="true"
      :collapse-transition="false"
      mode="horizontal"
      @select="handleSelect"
    >
      <SidebarTopItem
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarTopItem from '@/layout/components/Sidebar/SidebarTopItem'
export default {
  name:'TopMenu',
  components:{
    SidebarTopItem
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    // showLogo() {
    //   return this.$store.state.settings.sidebarLogo
    // },
    // variables() {
    //   return variables
    // },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.top-menu-wrap{
  display: flex;
  justify-content: flex-start;
  .el-menu--horizontal{
    display: flex;
    border-bottom: none;
    .sub-item-menu{
      flex: 1;
    }
  }
}
</style>
