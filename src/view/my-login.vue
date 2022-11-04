<template>
  <HomeView></HomeView>
  <h2>这是登录页面</h2>
  <el-form
      label-width="100px"
      :model="logins"
      style="max-width: 400px"
  >
    <el-form-item label="用户名">
      <el-input v-model="logins.username" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="logins.password" />
    </el-form-item>
    <el-form-item >
      <el-button @click="doLogin">登录</el-button>{{message}}
    </el-form-item>

  </el-form>
</template>
<script>
import Router from "../router/index"
import HomeView from "../components/homeView"
export default {
  name: "my-login",
  components:{
    HomeView
  },
  data(){
    return{
      logins:{
        username:"aa",
        password:"12"
      },
      message:""
    }
  },
  methods:{
    // eslint-disable-next-line vue/no-dupe-keys
    doLogin(){
      this.$axios.post("http://localhost:8080/login", {
        name: this.logins.username,
        password: this.logins.password
      }).then(res => {
        if (res.data.errorCode === 200) {
          var token = res.data.data.token;
          console.log(token)
          window.localStorage.setItem("token", token);
          Router.push("/index");
        }
        else{
          Router.push("/login");
          this.message=res.data.message
        }
      });
    }
  }
}
</script>