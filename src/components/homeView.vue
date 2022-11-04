<template >
  <RouterLink to="/">主页</RouterLink>|
  <RouterLink to="/login">登录</RouterLink>|
  <RouterLink to="/about">关于我们</RouterLink>|
  <RouterView></RouterView>
</template>

<script>
export default {
  name: "homeView"
}
</script>

<style scoped>

</style>