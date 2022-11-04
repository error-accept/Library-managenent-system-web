<template>
  <el-row>
    <el-col :span="8"><span>请输入借阅记录ID</span></el-col>
    <el-col :span="12"><el-input v-model="id" clearable placeholder="请输入"></el-input></el-col>
    <el-col :span="4"><el-button @click="search">查找</el-button></el-col>
  </el-row>
  <div id="borrow" v-if="isHave===1">
    <el-row>
      <el-col :span="4"><span>id：</span></el-col>
      <el-col :span="8">{{borrow.id}}</el-col>
      <el-col :span="4"><span>书籍id：</span></el-col>
      <el-col :span="8">{{borrow.bookid}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>用户id：</span></el-col>
      <el-col :span="8">{{borrow.userid}}</el-col>
      <el-col :span="4"><span>借阅时间：</span></el-col>
      <el-col :span="8">{{borrow.brrowtime}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>借阅时长：</span></el-col>
      <el-col :span="8">{{borrow.days}}</el-col>
      <el-col :span="4"><span>归还时间：</span></el-col>
      <el-col :span="8">{{borrow.backtime}}</el-col>
    </el-row>
    <el-row>
      <el-col>
<!--        <el-button @click="back">归还</el-button>-->
      </el-col>
    </el-row>
  </div>
  <div v-else-if="isHave===2">{{errorMsg}}</div>
  <el-table :data="borrows" stripe style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="userid" label="用户id" width="180" />
    <el-table-column prop="bookid" label="书籍id" />
    <el-table-column prop="brrowtime" label="借阅时间" />
    <el-table-column prop="backtime" label="归还时间" />
    <el-table-column prop="days" label="借阅时长" />
  </el-table>
</template>
<script>
import axios from "axios";
export default {
  name: "query-borrow",
  data(){
    return {
      borrow:{
        id:'',
        bookid:'',
        userid:'',
        brrowtime:'',
        days:'',
        backtime:'',
      },
      isHave:0,
      id:'',
      errorMsg:"未找到对应记录",
      borrows:[],
    }
  },
  methods:{
    search(){
      axios.get("http://localhost:8080/borrows/"+this.id).then(res=>{
        if(res.data.errorCode===200){
          this.borrow=res.data.data;
          this.isHave=1;
        }else {
          this.isHave=2;
        }
      })
    },
  },
  mounted() {
    axios.get("http://localhost:8080/borrows").then(res=>{
      this.borrows=res.data.data;
    })
  }
}
</script>
<style scoped>
</style>