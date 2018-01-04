<template>
  <div>
    <el-form ref="ruleForm" label-width="100px">
      <el-form-item label="用户名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="user.userpwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginDo">登录</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        userpwd: ''
      }
    }
  },
  methods: {
    loginDo () {
      this.$http.post('/api/login', this.user).then(res => {
        console.log(this.$router)
        console.log(res)
        this.$router.replace('/shouye')
      })
      // window.localStorage.setItem('user', JSON.stringify(this.user))
    }
  }
}
</script>
