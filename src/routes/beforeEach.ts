import Vue from 'vue'
import { Route, RawLocation } from 'vue-router'


export default function(to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) {
  // console.log(to, from, next)
  next()
}