function* test() {
  let value1 = yield 1
  console.log(value1)
  let value2 = yield 2
  yield 3
  yield 4
  yield 5
}

let iter = test()
console.log(iter.next('one')) // ==>>
console.log(iter.next('two')) // ==>> 此时打印的value1是第二次执行next()的参数two，是第一次yield的返回值
console.log(iter.next('three'))
