<template>
  <div>
    <img v-if="info.picture" :src="info.picture.large" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">Card3</h5>
        <span class="card-text text-left d-flex">Name : {{ info.name.first }} {{ info.name.last }}</span>
        <span class="card-text text-left d-flex">Email : {{ info.email }}</span>
        <span class="card-text text-left d-flex">Mobile : {{ info.phone }}</span>
        <a href="#" class="btn btn-primary mt-4">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // pictureUrl:'',
      info:Object
    }
  },
  created(){
    // console.log(this.$route.params.id)
    // const id = this.$route.params.id;
    const vm = this;
    //後方的固定參數可以存取固定的api資料
    //  this.$http.get('https://randomuser.me/api/?seed='+id)
    //   .then((response)=>{
    //     console.log(response.data.results[0].picture.large)
    //     vm.pictureUrl = response.data.results[0].picture.large;
    //   })
    this.$http.get('https://randomuser.me/api/')
      .then((response)=>{
        console.log(response.data.results[0])
        vm.pictureUrl = response.data.results[0].picture.large;
        vm.info = response.data.results[0];
      })
  }
}
</script>
