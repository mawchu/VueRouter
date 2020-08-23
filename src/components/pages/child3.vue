<template>
  <div>
    <img :src="pictureUrl" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">Card3</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary mt-4">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      pictureUrl:''
    }
  },
  created(){
    // console.log(this.$route.params.id)
    const id = this.$route.params.id;
    const vm = this;
    //後方的固定參數可以存取固定的api資料
    
    this.$http.get('https://randomuser.me/api/?seed='+id)
      .then((response)=>{
        console.log(response.data.results[0].picture.large)
        vm.pictureUrl = response.data.results[0].picture.large;
      })
  }
}
</script>
