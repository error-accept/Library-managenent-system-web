<template>
  <HomeView></HomeView>
<div id="se">
  <el-select v-model="value" class="select" placeholder="Select" size="large">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
  <div id="in">
    <el-input   v-model="Input" placeholder="请输入" clearable />
  </div>

  <el-button @click="doSearch">
    <el-icon >
      <Search class="el-icon" />
    </el-icon>
  </el-button>

</div>


</template>
<script>
import HomeView from "../components/homeView"
export default {
  name: "home-view",
  components:{
    HomeView
  },
  data(){
    return{
      options:[
        {
          value:"bookTitle",
          lable:1
        },{
          value:"bookISBN",
          lable:2
        },{
          value:"author",
          lable:3
        },{
          value:"press",
          lable:4
        }
      ],
      value:"bookTitle",
      Input:""

    }
  },
  methods:{
    doSearch(){
      alert("do")
    }
  }
}
</script>bookTitle

<style scoped>
#in{
  display: inline-block;
  width: 400px;
  background-color: blue;
}
.select{
  width: 200px;
}
.el-icon{
  width: 20px;
  height: 20px;
  color: red;
}
#se {
  height: 500px;
}
</style>