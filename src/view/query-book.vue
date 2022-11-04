<template>
  <el-row>
    <el-col :span="8">
      <el-radio-group v-model="By">
        <el-radio label="true" size="large">根据id查找</el-radio>
        <el-radio label="false" size="large">根据名称查找</el-radio>
      </el-radio-group>
    </el-col>
    <el-col :span="12"><el-input v-model="Bookid" clearable placeholder="请输入书籍id或名称"></el-input></el-col>
    <el-col :span="4"><el-button @click="searchBook">查找</el-button></el-col>
  </el-row>
  <div id="book" v-if="HaveBook===1">
    <el-row>
      <el-col :span="4"><span>id：</span></el-col>
      <el-col :span="8">{{book.id}}</el-col>
      <el-col :span="4"><span>书名：</span></el-col>
      <el-col :span="8">{{book.name}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>书架：</span></el-col>
      <el-col :span="8">{{book.shelf}}</el-col>
      <el-col :span="4"><span>作者：</span></el-col>
      <el-col :span="8">{{book.author}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>ISBN：</span></el-col>
      <el-col :span="8">{{book.isbn}}</el-col>
      <el-col :span="4"><span>类型：</span></el-col>
      <el-col :span="8">{{book.types}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>可借数：</span></el-col>
      <el-col :span="8">{{book.hasnum}}</el-col>
    </el-row>
  </div>
  <div v-else-if="HaveBook===2">{{errorMsg}}</div>
  </template>
<script>
import axios from "axios";
export default {
  name: "sys-query",
  data(){
    return{
      book:{
        id:"",
        name:"",
        hasnum:0,
        borrow:0,
        isbn:"",
        shelf:"",
        types:"",
        author:""
      },
      By:true,
      errorMsg:"未查找到对应书籍，请检查你的Id",
      Bookid:'',
      HaveBook:0,
    }
  },
  methods:{
    searchBook(){
      var url;
      if(this.By==="true"){
        url="http://localhost:8080/book/"+this.Bookid;
      }else{
        url="http://localhost:8080/book/name/"+this.Bookid;
      }
      axios.get(url).then(res=>{
        if(res.data.errorCode===200){
          this.book=res.data.data;
          this.HaveBook=1;
        }else {
          this.HaveBook=2;
        }
      })
    },
  }
}
</script>
<style scoped>
</style>