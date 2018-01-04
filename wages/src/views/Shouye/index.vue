<template>
  <div class="shouye">
    <h2>首页</h2>
     <bars
    :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0]"
    :gradient="['#6fa8dc', '#42b983']">
    </bars> 
    <!-- <bars :data="[120, 149, 193.4, 200, 92]" />
    <bars :data="[{ value: 4 }, { value: 6 }, { value: 8 }]" /> -->
  </div>
</template>

<script>
export default {
  name: 'Shouye'
  // created () {
  //   this.$http.get('/api/getlist').then((res) => {
  //     console.log(res)
  //   })
  // }
}
</script>
<style scoped>
.shouye h2{
  width: 100%;
  height: 80px;
  line-height: 79px;
  border-bottom: 1px solid #ccc;
  padding-left: 30px;
}
</style>

