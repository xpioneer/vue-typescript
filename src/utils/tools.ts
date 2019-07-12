// global tools function

/**
 * storage
 * 包含获取、设置、删除、清空方法
 * get(key: stirng): string
 * set(key: string, val: string): void
 * del(key: stirng): void
 * clear(): void
 */
export const storage = {

  get(key: string) {
    return localStorage.getItem(key)
  },

  set(key: string, val: string | number) {
    if (typeof val === 'number' && !isNaN(val) && val !== Infinity) {
      localStorage.setItem(key, String(val))
    } else if (typeof val === 'string') {
      localStorage.setItem(key, val)
    }
  },

  del(key: string) {
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  }
}

/**
 * tool
 */
export const a = 1