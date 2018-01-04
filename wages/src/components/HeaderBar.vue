<template>
  <header class="header-bar">
    <el-row>
        <el-col :span="12" class="left">
            <div class="logo">
                <img src="https://gztdd.hrwuu.com/Public/news/img/index/index_header_login.png" />
                <span>安心工资条</span>
            </div>
        </el-col>
        <el-col :span="12" class="right">
          <a href="#"><i class="iconfont icon-xiaoxi"></i></a>
          <a href="#">
              <img :src="img" alt="">
              <span>张佳丽</span>
          </a>
          <a href="#"><i class="iconfont icon-tuichu"></i></a>
        </el-col>
    </el-row>
  </header>
</template>

<script>
import img from '../static/images/user.jpg'
export default {
  name: 'HeaderBar',
  data () {
    return {
      img: img
    }
  }
}
</script>

<style scoped lang="sass">
.header-bar 
  height: 80px
  background: #ccc
  .left 
    padding-left: 10px
    line-height: 80px
    .logo 
      height: 40px
      display: inline-block
      line-height: 40px
    img
      display: inline-block
      height: 100%
      vertical-align: middle
  .right 
    text-align: right
    padding-right: 10px
    padding-top: 30px
    position: relative
    a 
      margin-left: 20px
      i
        position: absolute
        top: 30px
      .icon-xiaoxi 
        right: 180px
      .icon-tuichu
        right: 10px
      img 
        position: absolute
        top: 25px
        right: 120px
        width: 25px
        height: 25px
        border-radius: 50%
</style>

