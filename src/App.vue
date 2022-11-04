<template>
    <div class="common-layout">
      <el-container id="mainView">
        <el-header class="el-header">  <top-view></top-view></el-header>
        <el-container>
          <el-main class="el-main">
            <RouterView></RouterView>
          </el-main>
        </el-container>
        <el-footer class="el-footer">
          <FosterView></FosterView>
        </el-footer>
      </el-container>
    </div>
</template>
<script>
import FosterView from "./components/FosterView"
// import NavView from "./components/NavView"
// import MainView from "./components/MainView"
import topView from "./components/topView"
// import homeView from "./components/homeView"

export default {
  name: 'App',
  components: {
    FosterView,
    // NavView,
    topView,
    // MainView,
    // homeView
  },
  mounted() {
    // axios({
    //     method:"get",
    //   url:"localhost:8080/Admin"
    // }).then(res =>{
    //   alert(res)
    // })
    // this.$axios.get("").then(res =>{
    //   alert(res.data)
    // });
    // this.$axios.post("",{
    // }).then(res =>{
    //   alert(res.data)
    // });

  },
  methods:{
    change(){
      alert(this.username)
    },
    getData( data ){
      this.message=data;
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
