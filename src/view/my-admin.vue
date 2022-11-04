<template>
<div> 这是管理员管理页面</div>
  <el-table :data="Admins" stripe style="width: 100%">
    <el-table-column prop="name" label="名称" width="180" />
    <el-table-column prop="password" label="密码" width="180" />
    <el-table-column prop="isRoot" label="是否管理" />
    <el-table-column fixed="right" label="编辑" >
      <el-button>修改</el-button>
      </el-table-column>
  </el-table>
</template>

<script>

export default {
  name: "my-admin",
  data(){
    return{
      Admins:[]
    }
  },
  mounted() {
    this.$axios.get("http://localhost:8080/Admin",{
      headers:{
        token:window.localStorage.getItem('token')
      }
    }).then(res=>{
      this.Admins=res.data.data;
    })
  }
}
</script>

<style scoped>

</style>