<template>
  <el-dialog v-model="addForm" title="添加借阅人">
    <el-form :model="reader">
<!--      <el-form-item label="id" :label-width="formLabelWidth">-->
<!--        <el-input v-model="reader.id" autocomplete="off" />-->
<!--      </el-form-item>-->
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="reader.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
<!--        <el-input v-model="reader.sex" autocomplete="off" />-->
        <el-radio-group v-model="reader.sex" class="ml-4">
          <el-radio label="男" size="large">男</el-radio>
          <el-radio label="女" size="large">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="证件类型" :label-width="formLabelWidth">
<!--        <el-input v-model="reader.idType" autocomplete="off" />-->
        <el-select v-model="reader.idType"  placeholder="大陆居民身份证" size="large">
          <el-option
              v-for="item in options"
              :key="item.index"
              :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="证件号" :label-width="formLabelWidth">
        <el-input v-model="reader.IDcard" autocomplete="off" />
      </el-form-item>
      <el-form-item label="vip" :label-width="formLabelWidth">
<!--        <el-input v-model="reader.vip" autocomplete="off" />-->
        <el-radio-group v-model="reader.vip" >
          <el-radio label=1 size="large">是</el-radio>
          <el-radio label=0 size="large">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="剩余可借数" :label-width="formLabelWidth">
        <el-input-number v-model="reader.brrownum" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addForm=false">取消</el-button>
        <el-button type="primary" @click="add">
          确定添加
        </el-button>
      </span>
    </template>
  </el-dialog>
  <span>
    <el-row :gutter="20">
      <el-col :span="5"><el-button @click="addForm=true">添加读者 </el-button></el-col>
      <el-col :span="4"><span>根据id查找</span> </el-col>
      <el-col :span="10"><el-input  placeholder="请输入读者ID" label="根据id查找" v-model="searchID"/></el-col>
      <el-button>搜索</el-button>
    </el-row>
  </span>
  <el-table :data="readers" stripe style="width: 100%">
    <el-table-column type="index"  />
    <el-table-column prop="id" label="id"  />
    <el-table-column prop="name" label="姓名"  />
    <el-table-column prop="sex" label="性别" />
    <el-table-column prop="idtype" label="证件类型" />
    <el-table-column prop="idcard" label="证件号"/>
    <el-table-column prop="vip" label="会员" />
    <el-table-column prop="brrownum" label="可借数" />
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
</template>
<script>
import axios from "axios";
export default {
  name: "reader-info",
  data(){
    return {
      readers:[],
      reader:{
        id:'',
        name:"",
        sex:"男",
        idType:"",
        IDcard:"",
        vip:1,
        brrownum:0,
      },
      searchID:"",
      options:[
        {
          index:1,
          value:"居民身份证"
        }, {
          index:2,
          value:"港澳台身份证"
        }, {
          index:3,
          value:"国外人居住证"
        }
      ],
      addForm:false,
    }
  },
  mounted() {
    axios.get("http://localhost:8080/Borrows").then(res=>{
     this.readers=res.data.data;
    })
  },
  methods:{
    add(){
      axios.post("http://localhost:8080/Borrows",{
        id:this.reader.id,
        name:this.reader.name,
        sex:this.reader.sex,
        idtype:this.reader.idType,
        idcard:this.reader.IDcard,
        vip:this.reader.vip,
        brrownum:this.reader.brrownum,
      }).then(res=>{
        console.log(res.data)
      })
      this.addForm=false;
    }
  }
}
</script>
<style scoped>
</style>