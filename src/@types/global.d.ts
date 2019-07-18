import Vue from 'vue';

declare module '*.vue' {
  export default Vue;
}

declare global {
  export const $HOST: string
}
