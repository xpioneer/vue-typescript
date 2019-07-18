<template>
  <div class="home" @click="goList">
    <p>This is Home page.</p>
    <p>{{greeting}}</p>
    <p>Click this page, go to list page</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  greeting: string = 'hello, world!'

  goList() {
    // this.$props
    this.$router.push('/list')
    console.log(this.$props)
  }


  // route hooks
  beforeRouteEnter(to, from, next) {
    next()
  }

  /**
   * Vue LifeCycles
   */
  created() {
    console.log('home created...')
  }

  mounted(){
    // console.log('demo...')
    // throw('test error')
  }
}
</script>

<style lang="scss" scoped>
.home{
  padding-top: 100px;
  height: 100vh;
  text-align: center;

  p{
    font-size: 36px;
    color: #999;
  }
}

</style>
