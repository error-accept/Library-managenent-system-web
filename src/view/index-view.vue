<template>
  <div class="common-layout">
    <el-container id="mainView">
<!--      <el-header class="el-header">  <top-view></top-view></el-header>-->
      <el-container>
        <el-aside><NavView></NavView></el-aside>
        <el-main class="el-main"> <MainView></MainView></el-main>
      </el-container>
<!--      <el-footer class="el-footer">-->
<!--        <FosterView></FosterView>-->
<!--      </el-footer>-->
    </el-container>
  </div>
</template>

<script>
// import FosterView from "../components/FosterView"
import NavView from "../components/NavView"
import MainView from "../components/MainView"
// import topView from "../components/topView"

export default {
  name: "index-view",
  components:{
    // FosterView,
    NavView,
    MainView,
    // topView
  }
}
</script>

<style scoped>

</style>