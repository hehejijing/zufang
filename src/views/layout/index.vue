<template>
  <div>

    <router-view></router-view>
    <van-tabbar route>

      <van-tabbar-item icon="wap-home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/layout/news">资讯</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/layout/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
name: 'AA'
}
</script>

<style>

</style>