<template>
  <div class="hello d-flex justify-content-center">
      <ul class="nav mx-auto text-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/page/">Card1</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/page/child2">Card2</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/page/child3">Card3</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="updatePath">取代路由連結的方法</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="beforePath">回上一頁的方法</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="replacePath">更新路由但不添加歷史的方法</a>
        </li>

      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted(){
    console.log(this.$router)
  },
  methods:{
    updatePath(){
      // 取代路由連結的方法
      this.$router.push('/page/child2');
      console.log(this.$router)
    },
    beforePath(){
      // 取代路由連結回上一頁的方法
      // this.$router.back();
      this.$router.go(-1);
      console.log(this.$router)
    },
    replacePath(){
      this.$router.replace('/page/child2');
      // console.log(this.$router)
    }
  }
}
</script>
