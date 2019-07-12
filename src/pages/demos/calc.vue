<template>
  <div>
    <input type="button" value="-" @click="dec">
    <input @keyup.13="keyUp" :value="value" @input="changed($event.target.value)" style="border:1px solid #ccc;padding:8px 4px"/>
    <input type="button" value="+" @click="add">
    <div>
      <p @click="addList">This is List page.length:{{greetingsLength}}</p>
      <p v-for="(greeting, index) in greetings" :key="index">{{greeting}}</p>
    </div>
  </div>
</template>

<script>
const greetings = []
for(let i = 1; i < 10; i++) {
  greetings[i] = 'hello, world!' + i
}

export default {
  data() {
    return {
      greetings
    }
  },
  computed: {
    greetingsLength(){
      return this.greetings.length
    }
  },
  model: {
    prop: 'value',
    event: 'ccc'
  },

  props: {
    value: {
      type: Number,
      // default: 1
    }
  },
  
  methods: {
    changed(value) {
      console.log(value, 'e')
      // return value
      this.$emit('ccc',  Number(value))
    },
    
    dec() {
      const val = this.value - 1
      this.$emit('input',  Number(val))
      console.log(val)
    },
    
    add() {
      const val = this.value + 1
      this.$emit('input',  Number(val))
    },

    addList() {
      console.log(this.greetingsLength, '---this.greetings.length')
      const list = []
      // for(let i = this.greetingsLength; i < this.greetings.length + 10; i++) {
        this.greetings.push('hello, world!' + 99)
      // }
      // console.log(list)
      // this.greetings.push(...list)
      // this.$forceUpdate()
    },

    keyUp(e){
      const keyCode = e.keyCode
      this.$emit('clear')
      // if(keyCode === 38) {
      //   this.value++
      // } else if(keyCode === 40){
      //   this.value--
      // }
    }
  },

  mounted(){
    console.log('this.greetings: mounted', this.greetings.length)
  }
}
</script>

<style lang="scss">

</style>
