const foo = {
    name: "yxy",
    age: 18
};
type Foo = typeof foo;

const bar: Foo = [];
console.log(bar);
