<template>
  <div class="list">
    <p @click="add">This is List page.length:{{greetingsLength}}</p>
    <p v-for="(greeting, index) in greetings" :key="index">{{greeting}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

const greetings: string[] = []
for(let i = 1; i < 10; i++) {
  greetings[i] = 'hello, world!' + i
}

@Component({
  computed: {
    greetingsLength() {
      return this.greetings.length
    }
  }
})
export default class Home extends Vue {

  greetings: string[] = greetings

  get greetingsLength(): number {
    return this.greetings.length
  }

  add() {
    const len = this.greetings.length
    console.log('len:', len)
    const list = []
    for(let i = len; i < len + 10; i++) {
      list.push('hello, world!' + i)
    }
    this.greetings.push(...list)
  }

  /**
   * Vue LifeCycles
   */
  created() {
    // 
  }

  mounted() {
    // 
  }
}
</script>

<style lang="scss" scoped>
.list{
  padding-top: 100px;
  height: 100vh;
  text-align: center;

  p{
    font-size: 36px;
    color: #999;
  }
}

</style>
