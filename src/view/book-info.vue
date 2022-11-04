<template>
<div>图书信息</div>
  <el-table :data="book" stripe style="width: 100%">
    <el-table-column type="index"  />
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="name" label="书名" width="180" />
    <el-table-column prop="types" label="类型" />
    <el-table-column prop="shelf" label="书架" />
    <el-table-column prop="author" label="作者"/>
    <el-table-column prop="hasnum" label="总数量" />
    <el-table-column prop="borrow" label="可借量" />
    <el-table-column  label="编辑" >
      <template #default="scope">
        <el-button @click="doUp(scope.$index)">
          编辑
        </el-button>
      </template>

      </el-table-column>
    <el-table-column  label="删除" >
      <template #default="scope">
        <el-button @click="del(scope.$index)">
          删除
        </el-button>
      </template>

    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogFormVisible" title="修改图书信息">
    <el-form :model="book[cur]">
      <el-form-item label="书架" :label-width="formLabelWidth">
        <el-input v-model="book[cur].shelf" autocomplete="off" />
      </el-form-item>
      <el-form-item label="类型" :label-width="formLabelWidth">
        <el-input v-model="book[cur].types" autocomplete="off" />
      </el-form-item>
      <el-form-item label="作者" :label-width="formLabelWidth">
        <el-input v-model="book[cur].author" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确认
        </el-button>
      </span>
  </template>
  </el-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "book-info",
  data(){
    return {
      book:[],
      index:0,
      dialogFormVisible:false,
      cur:0,
      form:{
        shelf:"",
        types:"",
        author:""
      }
    }
  },
  methods:{
    indexMethod(){
     return this.index+1
    },
    doUp(data){
      this.dialogFormVisible=true
      this.cur=data;
      this.form=this.book[data]
    }
  },
  mounted() {
    axios.get("http://localhost:8080/books").then(res=>{
      this.book=res.data.data;
    })
  }
}
</script>

<style scoped>

</style>