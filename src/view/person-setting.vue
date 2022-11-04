<template>
<div>修改密码</div>
  <el-form :model="password" label-width="120px">
    <el-form-item label="旧密码">
      <el-input v-model="password"  show-password/>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input v-model="newPassword"  show-password />
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="newPassword"  show-password/>
    </el-form-item>
    <el-form-item>
      <el-button @click="change">确认修改</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "person-setting",
  data(){
    return{
      password:"",
      newPassword:""
    }
  }
}
</script>
<style scoped>

</style>