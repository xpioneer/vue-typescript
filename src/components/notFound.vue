<template>
  <div id="notFound">
    404 <br/>Not Found
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Demo extends Vue{

  mounted(){
    // 
  }
}
</script>
<style lang="scss">
#notFound{
  color: #999;
  text-align: center;
  font-size: 72px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
