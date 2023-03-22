// 可选属性以及任意属性
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
const square: SquareConfig = {};
square.name = "123";
square.color = "#fff";
square.year = 18;

// 为方法添加类型
// interface searchFunc {
//     (a: string, b: string): boolean;
// }

// const func: searchFunc = function (a, b) {
//     return a === b;
// };
// func("1", "2");

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
class Clock implements ClockInterface {
    static nowDate = +new Date();
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(d: Date) {
        this.currentTime = d;
    }
}

const clock = new Clock(new Date());
console.log(Clock.nowDate);
console.log(clock);

interface Shape {
    color: string;
}

interface Square extends Shape {
    width: number;
}

const square1 = <Square>{};
// const square1 = {} as Square;
square1.color = "#000";
square1.width = 100;
console.log("square1===>>>>", square1);

// 混合类型, 一个对象可以同时做为函数和对象使用，并带有额外的属性
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    const counter = <Counter>function (start: number) {
        console.log(start);
    };
    counter.interval = 123;
    counter.reset = function () {
        //
    };
    return counter;
}

const c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 接口继承类
class Control {
    public name: string; // public能在类的内部和外部访问
    private state: any; // private只能在类的内部访问
    protected age: number; // protected只能在类的内部和继承类里访问
    handleChangeState() {
        console.log(this);
        this.state = 1;
    }
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {
        //
    }
}

class TextBox extends Control {
    select() {
        this.age = 22;
    }
}

const button = new Button("button1", 18);
button.handleChangeState();
button.name = "12345";
console.log("button===>>>", button);

const testBox = new TextBox("textBox1", 20);
testBox.select();
console.log("testBox===>>>", testBox);

// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     private state: any;
//     select() {}
// }

// 类的继承
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

const sam = new Snake("Sammy the Python");
const tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// 类的实例部分与静态部分==>>>类的 实例的类型、构造函数的值

// 函数泛型
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}

const numberList = loggingIdentity([1, 2, 3, 4]);
console.log(numberList);

function getLength<T>(arg: T[]): number {
    return arg.length;
}
console.log(getLength([1, 2, 3]));

// 带有调用签名的字面量对象，有<T>的是泛型类型
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

const myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(1));

// keyof拿到一个类型下所有的属性
// K extends K属于后面的类型
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
const x = { a: 1, b: 2 };

getProperty(x, "a");

type keys = keyof typeof x;
const key: keys = "a";
console.log(key);
