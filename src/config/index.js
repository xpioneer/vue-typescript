const _PROD_ = process.env.NODE_ENV === 'production'

const _BUILD_ENV_ = process.env.BUILD_ENV

console.log(_BUILD_ENV_, '_BUILD_ENV_')


export {
  HOST
}