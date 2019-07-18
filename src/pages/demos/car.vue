<template>
  <div>{{car}} <a @click="delCar(index)">删除</a></div>
</template>

<script lang="ts">
import { Component, Prop, Inject, Emit, Vue } from 'vue-property-decorator';
import C from 'vue-class-component'

@C
export default class Demos extends Vue{
  @Prop({
    type: Number,
    default: -1,
  }) index;

  @Prop({type: String}) car: string

  @Emit()
  delCar(index: number) { }

  mounted(){
    // console.log('car component...')
  }
}
</script>

<style lang="scss">

</style>
