const _PROD_ = process.env.NODE_ENV === 'production'

const _BUILD_ENV_ = process.env.BUILD_ENV


let HOST = 'https://dev.baidu.com'  // 开发环境host

if(_PROD_) { // build含有三种情况
  HOST = 'https://prod.baidu.com'
  if(_BUILD_ENV_ === 'preview') {
    HOST = 'https://pre.baidu.com'
  } else if(_BUILD_ENV_ === 'testing') {
    HOST = 'https://test.baidu.com'
  }
} else {
  HOST = 'https://dev.baidu.com'
}


export {
  HOST
}