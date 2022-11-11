const a = { name: 'xiaoming' }
const b = { name: 'xiaoming' }
const isSame = Object.is(a, b) // false
console.log('两个值是否相同', isSame)
