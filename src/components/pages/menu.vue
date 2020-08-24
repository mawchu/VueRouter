<template>
  <div class="hello">
    <div class="card mx-auto" style="width: 18rem;">
      <ul class="list-group list-group-horizontal w-100">
        <router-link class="list-group-item w-100 bg-light" to="/page/">Card1</router-link>
        <router-link class="list-group-item w-100 bg-light" to="/page/child2">Card2</router-link>
        <router-link class="list-group-item w-100 bg-light" to="/page/child3">Card3</router-link>
      </ul>
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
