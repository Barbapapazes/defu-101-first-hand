import { createDefu } from 'defu'

const sum = createDefu((obj, key, value) => {
  console.log(obj, key, value)
  if (typeof obj[key] === 'number' && typeof value === 'number') {
    obj[key] += value
    return true
  }
})

console.log(sum({ a: 1, b: 2 }, { a: 2, b: 3 }))
