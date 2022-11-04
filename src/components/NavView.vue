<template>
  <el-menu
      class="el-menu-vertical-demo">
    <el-sub-menu index="1">
      <template #title>
        <span>系统设置</span>
      </template>
      <el-menu-item index="1-1" @click="changeSystem">修改系统信息</el-menu-item>
      <el-menu-item index="1-2" @click="doAdmin">管理管理员</el-menu-item>
      <el-menu-item index="1-3" @click="doshelf">管理书架</el-menu-item>
      <el-menu-item index="1-4" @click="dosys">参数设置</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <span>读者管理</span>
      </template>
      <el-menu-item index="2-1" @click="doinfo">读者信息管理</el-menu-item>
<!--      <el-menu-item index="2-2" @click="dotype">读者类型管理</el-menu-item>-->
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <span>图书管理</span>
      </template>
<!--        <el-menu-item index="3-1" @click="dobooktype">图书类型设置</el-menu-item>-->
        <el-menu-item index="3-2" @click="dobookinfo">图书信息管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <span>图书借还</span>
      </template>
      <el-menu-item index="4-1" @click="doBorrow">图书借阅</el-menu-item>
<!--      <el-menu-item index="4-2" @click="doRenew">图书续借</el-menu-item>-->
      <el-menu-item index="4-3" @click="doBack">图书归还</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>
        <span>系统查询</span>
      </template>
      <el-menu-item index="5-1" @click="queryBook">图书信息查询</el-menu-item>
      <el-menu-item index="5-2" @click="queryBorrow">借阅信息管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="6">
      <template #title>
        <span>个人设置</span>
      </template>
      <el-menu-item index="6-1" @click="changePwd">修改密码</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="7" @click="doExit">退出登录</el-menu-item>
  </el-menu>
</template>

<script>
import Router from "../router/index"
export default {
  name: "NavView",
  methods: {
      changeSystem(){
         Router.push("/changeSystem")
      },
      doAdmin(){
        Router.push("/my/admin")
    },
      doshelf(){
          Router.push("/book/shelf")
      },
    dosys(){
      Router.push("/book/shelf")
    },
    doinfo(){Router.push("/reader/info")},
    dotype(){Router.push("/reader/type")},
    dobooktype(){Router.push("/book/type")},
    dobookinfo(){Router.push("/book/info")},
    doBorrow(){Router.push("/book/borrow")},
    doRenew(){Router.push("/book/renew")},
    doBack(){Router.push("/book/back")},
    queryBook(){Router.push("/query/book")},
    queryBorrow(){Router.push("/query/borrow")},
    changePwd(){Router.push("/person/seeting")},
    doExit(){
      window.localStorage.clear();
      Router.push("/login")
      }
  }
}
</script>

<style scoped>

</style>