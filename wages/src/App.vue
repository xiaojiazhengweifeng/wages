<template>
  <div id="app">
    <template v-if="$route.path != '/login'">
      <HeaderBar></HeaderBar>
      <div class="content">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo left-bar"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
        >
          <template v-for="(v, k) in $router.options.routes" v-if="v.meta">
            <el-submenu :index="(k+'')" :key="k" v-if="v.children">
              <template slot="title">
                <i>1</i>
                <span>{{v.meta.title}}</span>
              </template>
              <el-menu-item v-for="(v2, k2) in v.children" :index="(k+'-'+(k2+1))" :key="k2" :route="{path:v.path+'/'+v2.path}">
                {{setActiveIndex(v.path+'/'+v2.path, (k+'-'+(k2+1)))}}{{v2.meta.title}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="(k+'')" :key="k" v-else :route="{path:v.path}">
              <i>2</i>
              <span slot="title">{{v.meta.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>
        <div class="right-bar">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }" v-for="(item, k) in $route.matched" :key="k">{{item.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </div>
      </div>
    </template>
    <router-view v-else></router-view>    
  </div>
</template>

<script>
import '@/static/css/index.css'
import './static/font/iconfont.css'
import './static/css/reset.css'
import HeaderBar from './components/HeaderBar.vue'
export default {
  name: 'app',
  data () {
    return {
      defaultActive: '1'
    }
  },
  components: {
    HeaderBar
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    setActiveIndex (path, index) {
      if (path === this.$route.path) {
        this.defaultActive = index
      }
      return ''
    }
  }
}
</script>

<style scoped lang="sass">
#app 
  width: 100%
  .left-bar 
    position: absolute
    top: 80px
    left: 0
    width: 200px
  .right-bar
    margin-left: 200px
    padding: 10px
    box-sizeing: border-box
    border-left: 1px solid #ccc
</style>
