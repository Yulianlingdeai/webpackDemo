// 迭代器对象,数组,字符串有，对象没有
let arr = [1, 2, 3, 4]

function makeIterator(arr) {
  let index = 0
  return {
    next() {
      if (index < arr.length) {
        return { value: arr[index++], done: false }
      }
      return { value: undefined, done: true }
    }
  }
}
let iter = makeIterator(arr)

// let iter = arr[Symbol.iterator]() // ==>>返回一个迭代器对象, 上面有一个next()

console.log(iter.next()) // ==>> { value: 1, done: false }
console.log(iter.next()) // ==>> { value: 2, done: false }
console.log(iter.next()) // ==>> { value: 3, done: false }
console.log(iter.next()) // ==>> { value: 4, done: false }
console.log(iter.next()) // ==>> { value: undefined, done: true }
