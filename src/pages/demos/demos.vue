<template>
  <div id="globalDemos">
    <p>This is demo page.</p>
    <div class="block">My name is {{name}}, {{age}} years old.</div>
    <div class="block">I like this car: <input-car class="inputCar" type="text" v-model="newCar" @add-car="addCar"/></div>
    <div class="block">
      <Car class="car" v-for="(car, index) in cars" :index="index" :car="car" :key="index" @del-car="delCar"></Car>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import Car from './car.vue'
import inputCar from './inputCar.vue'


@Component({
  components: {
    Car,
    inputCar
  }
})
export default class Demos extends Vue{
  age: number = 18
  name: string = 'keefe'

  newCar: string = '法拉利'
  cars: string[] = ['Audi', 'BMW', 'Benz', 'Porsche 911']

  @Watch('newCar')
  watchNewCar(newVal: string, oldVal: string) {
    // console.log(newVal, oldVal)
  }

  addCar() {
    // console.log(this.newCar, 'addCar, demos')
    if(this.newCar) {
      this.cars.push(this.newCar)
      this.newCar = ''
    }
  }

  delCar(index) {
    // console.log(index, 'index')
    this.cars.splice(index, 1)
  }

  /**
   * Vue LifeCycles
   */
  mounted(){
    console.log('demo...')
  }
}
</script>

<style lang="scss">
#globalDemos{
  color: #666;
  padding: 10px;

  p{color:red;font-size: 28px;}

  .demo{
    font-size: 28px
  }

  .block{
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }

  .inputCar{
    border: 1px solid #ccc;
    height: 56px
  }

  .car{
    display: flex;
    justify-content: space-between;
    font-size: 32px
  }
}

</style>
