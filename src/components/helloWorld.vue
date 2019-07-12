<template>
  <div>
    hello, world!
    <p>{{age}}-{{name}}</p>
    <Demo></Demo>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  data(){
    age: 32
  }
})
export default class HelloWorld extends Vue{

  age: number = 128
  
  private name: string = 'keefe'

  created() {
    console.log('created.')
  }

  mounted() {
    console.log('hello...')
  }
}
</script>

<style>
p{color:red;font-size: 24px;}
</style>
