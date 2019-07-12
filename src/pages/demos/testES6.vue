<template>
  <div>
		<calc v-model="num" @clear="clearNum"></calc>
  </div>
</template>

<script>
import calc from './calc'


export default {
  data(){
    return {
      num: 1
    }
  },

  components: {
    calc
  },

  methods: {
    clearNum(){
      this.num = 0
    }
  },

  watch: {
    num: (nVal, oVal) => {
      console.log('num:', nVal, oVal)
    }
  },

  mounted() {
    // do something
    console.log(this.num)
  }
};
</script>

<style lang="css">

</style>
