<template>
<h3>这位是组件</h3>
  <p>{{name}}</p>
  <p>{{age}}</p>
  <p v-for="(item,index) in users" :key="index">{{item}}</p>
  <button @click="sentData">发送数据</button>
</template>
<script>
export  default {
  name:"HelloWorld",
  data(){
    return{
      messages:"这是消息"
    }
  },

  props:{
    name:{
      type:String,
      default:""
    },
    age:{
      type:Number,
      default:0
    },
    users:{
      type:Array,
      default:function() {
        return [];
      }
    },
    },
  methods:{
  sentData(){
    this.$emit("onEvent",this.messages)
    }
}

  }

</script>
<!--示仅当前组件生效-->
<style scoped>
h3{
  color: blue;
}

</style>