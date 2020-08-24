<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <!-- 動態路由 -->
            <router-link class="nav-link" :to="{name:'首頁'}">Home</router-link>

          </li>
          <li class="nav-item ">
            <!-- 靜態路由 -->
            <router-link class="nav-link" to="/page">Page</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <img src="./assets/logo.png">
    <router-view name="menu"></router-view>
    <div class="container">
      <!--<HelloWorld/>-->
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  body{
    text-align:center;
  }
</style>
