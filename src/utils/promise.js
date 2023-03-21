Promise.resolve().then(() => {
  console.log('promise1')
  setTimeout(() => {
    console.log('setTimeout2')
  }, 0)
  console.log('111')
})

setTimeout(() => {
  console.log('setTimeout1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('宏任务')
