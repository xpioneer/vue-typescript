<template>
  <div id="app">
		<router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class App extends Vue {

  locale: string = 'en'

  beforeCreated(): void {
    console.log(this.$data)
  }

  mounted() {
    // do something
    console.log(this.locale)
  }
};
</script>

<style lang="css">

</style>
