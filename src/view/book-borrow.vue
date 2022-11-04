<template>
  <el-row>
    <el-col :span="8"><span>请输入借阅人ID</span></el-col>
    <el-col :span="12"><el-input v-model="id" clearable placeholder="请输入"></el-input></el-col>
    <el-col :span="4"><el-button @click="search">查找</el-button></el-col>
  </el-row>
  <div id="reader" v-if="isHave===1">
    <el-row>
      <el-col :span="4"><span>id：</span></el-col>
      <el-col :span="8">{{reader.id}}</el-col>
      <el-col :span="4"><span>姓名：</span></el-col>
      <el-col :span="8">{{reader.name}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>性别：</span></el-col>
      <el-col :span="8">{{reader.sex}}</el-col>
      <el-col :span="4"><span>证件类型：</span></el-col>
      <el-col :span="8">{{reader.idtype}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>证件号：</span></el-col>
      <el-col :span="8">{{reader.idcard}}</el-col>
      <el-col :span="4"><span>vip：</span></el-col>
      <el-col :span="8">{{reader.vip}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span>可借数：</span></el-col>
      <el-col :span="8">{{reader.brrownum}}</el-col>
    </el-row>
  </div>
  <div v-else-if="isHave===2">{{errorMsg}}</div>
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
  <div v-if="HaveBook===1 && isHave===1">
    借阅天数：<el-input-number v-model="day" ></el-input-number>
    <el-button  @click="borrow">确认借书</el-button>
  </div>
</template>

<script>
import axios from "axios";
import {ElNotification} from "element-plus";

export default {
  name: "book-borrow",
  data(){
    return{
      id:"",
      isHave:0,
      reader:{
        id:'',
        name:"",
        sex:"男",
        idtype:"",
        idcard:"",
        vip:1,
        brrownum:0,
      },
      day:0,
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
      errorMsg:"未查找到对应读者，请检查你的Id",
      Bookid:'',
      HaveBook:0,
    }
  },
  methods:{
    search(){
      if(this.id===""){
        this.id="null"
      }
      axios.get("http://localhost:8080/Borrows/"+this.id).then(res=>{
        if(res.data.errorCode===200){
          this.reader=res.data.data;
          this.isHave=1;
        }else {
          this.isHave=2;
        }
      })
    },
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
    borrow(){
      axios.post("http://localhost:8080/borrow",{
          userid:this.id,
          bookid:this.book.id,
          days:this.day,
      }).then(res=>{
        if(res.data.errorCode===200){
          ElNotification({
            title: 'Success',
            message: '成功借书',
            type: 'success',
          })
        }else{
          ElNotification({
            title: 'fail',
            message: '操作失败',
            type: 'fail',
          })
        }

      })
    }
  }
}
</script>
<style scoped>
</style>