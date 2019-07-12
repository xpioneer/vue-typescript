<template>
  <input @keyup.13="addCar" :value="value" @input="changed($event.target.value)"/>
</template>

<script lang="ts">
import { Component, Emit, Model, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Demos extends Vue{
  
  @Model('input') value: string
  
  @Emit('input')
  changed(value: string) { }
  
  @Emit()
  addCar() { }

  /**
   * Vue LifeCycles
   */
  private mounted(){
    console.log('inputCar component...', this.value)
  }
}
</script>

<style lang="scss">

</style>
