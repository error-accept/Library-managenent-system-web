<template>
<div>这是系统信息修改页面</div>
  <el-form :model="form[0]" label-width="120px">
    <el-form-item label="图书馆名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.address" />
    </el-form-item>
    <el-form-item label="开馆时间">
      <el-date-picker
          v-model="form.time"
          type="date"
          placeholder="form.time"
      />
    </el-form-item>
    <el-form-item label="负责人">
      <el-input v-model="form.adminname" />
    </el-form-item>
    <el-form-item >
      <el-button @click="change">确认修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script>


export default {
  name: "change-system",
  data(){
    return {
      form:{}
    }
  },
  mounted() {
    this.$axios.get("http://localhost:8080/sys").then(res=>{
      this.form=res.data.data[0];
    })
  },
  methods:{
    change(){
      this.$axios.post("http://localhost:8080/sys",{
        name:this.form.name,
        time:this.form.time,
        adminname:this.form.adminname,
        address:this.form.address,
      }).then(res=>{
        this.form=res.data.data[0];
      })
    }
  }
}
</script>

<style scoped>

</style>