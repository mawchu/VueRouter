<template>
  <div class="hello">
    <div class="card mx-auto" style="width: 18rem;">
      <!-- 子分頁的位置 child1/2/3 -->
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>
