import "@/assets/css";
import "./utils";
import "@/utils/test.ts";
import "@/utils/echarts.js";
// const path = require('path')
import Axios from "./utils/request";
import dayjs from "dayjs";
let time = dayjs(+new Date()).format("YYYYMMDDHH") + "0000";
console.log("dayjs-time===>>>>", time);
console.log("Hello World!");
console.log("这是一个新的页面");
console.log("这是一个新的页面22");
class Greeter {
    constructor(message) {
        this.greeter = message;
    }

    greet() {
        return "hello" + this.greeter;
    }
}

const greeter = new Greeter("world");
console.log(greeter);

console.log(Greeter.prototype);
console.log(Object.getPrototypeOf(greeter));
function api(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = Math.random();
            if (n > 0.5) {
                resolve(n);
            } else {
                resolve(-n);
            }
        }, 1000 * 1);
    });
}

const list = [1, 2, 3, 4, 5];
// async function fn() {
//   list.forEach(async (el, index) => {
//     const n = await api(index)
//     console.log(n, index)
//   })
// }

// fn()
async function fn() {
    for (let i = 0; i < list.length; i++) {
        const n = await api(i);
        console.log("for.....", n, i);
    }
}

// fn()

/** 原型链继承,引用值共享的问题 */
// function Foo() {
//   this.a = [1, 2, 3]
// }
// Foo.prototype.say = function () {
//   console.log('123')
// }

// function Sub() {}

// Sub.prototype = new Foo()
// Sub.prototype.constructor = Sub

// let sub = new Sub()
// let sub2 = new Sub()
// console.log(sub.a.push(4))
// console.log(sub.a)
// console.log(sub2.a)
/**************/

/** 构造函数继承,不能拿到原型上的方法 */
// function Foo() {
//   this.a = 1
// }
// Foo.prototype.say = function () {
//   console.log('123')
// }

// function Sub() {
//   Foo.call(this)
// }

// let sub1 = new Sub()
// let sub2 = new Sub()
// console.log(sub1.a)
// console.log(sub2.a)
/**************/

/** 组合继承,Foo执行了两次 */
// function Foo() {
//   this.a = 1
// }
// Foo.prototype.say = function () {
//   console.log('123')
//   return 1
// }

// function Sub() {
//   Foo.call(this)
// }

// Sub.prototype = new Foo()
// Sub.prototype.constructor = Sub

// let sub1 = new Sub()
// let sub2 = new Sub()
// console.log(sub1.say())
// console.log(sub2.say())
/**************/

/** 寄生组合继承 */
// function Foo() {
//   this.a = 1
//   this.b = [1, 2, 3]
// }
// Foo.prototype.say = function () {
//   console.log('123')
//   return 1
// }

// function Sub() {
//   Foo.call(this)
// }

// if (!Object.create) {
//   Object.create = function (prototype) {
//     function F() {}
//     F.prototype = prototype
//     return new F()
//   }
// }

// Sub.prototype = Object.create(Foo.prototype)
// Sub.prototype.constructor = Sub

// let sub1 = new Sub()
// let sub2 = new Sub()
// console.log(sub1.b.push(5))
// console.log(sub1.b)
// console.log(sub2.b)
/**************/

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

Object.assign(target, source);

console.log(target);

Function.prototype.myCall = function (context) {
    if (typeof context === "undefined" || context === null) {
        context = window;
    }
    context.fn = this;
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
    delete context.fn;
    return result;
};

const obj = {
    join() {
        console.log("123");
    }
};
const arr = [];
obj.join.myCall(arr);
obj.join.myCall(undefined);
const card = require("./assets/image/card.jpg");
console.log("card==>>", card);

window.previewFile = function () {
    const file = document.querySelector("input[type=file]").files[0];
    const type = file.name.split(".").slice(-1);
    const fromData = new FormData();
    fromData.append("file", file, `cat.${type}`);
    const p = Axios({
        method: "post",
        url: "http://127.0.0.1:3000/upload_file",
        data: fromData
    });
    p.then((res) => {
        console.log(res);
    });
    return;
    const reader = new FileReader();

    reader.addEventListener(
        "load",
        () => {
            console.log(reader.result);
            // const data = {
            //   imgString: reader.result,
            //   billModel: '身份证',
            //   textAngle: true,
            //   textLine: false
            // }
            const data = {
                username: "sysadmin",
                password: "admin111",
                code: "1111"
            };
            const params = new URLSearchParams();
            Object.keys(data).forEach((item) => {
                params.append(item, data[item]);
            });
            const p = Axios({
                method: "post",
                url: "https://app.yanmeijia.cn/manage/webapi/login.php",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                data: params
            });
            p.then((res) => {
                console.log("res=>>", res);
                const params2 = new URLSearchParams();
                const data2 = {
                    page: 1,
                    token: res.data.data.token || res.data.data
                };
                Object.keys(data2).forEach((ele) => {
                    params2.append(ele, data2[ele]);
                });
                const p2 = Axios({
                    method: "post",
                    url: "https://app.yanmeijia.cn/manage/webapi/servicerList.php",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    data: params2
                });
                p2.then((res) => {
                    console.log("res=>>", res);
                });
            });
        },
        false
    );

    if (file) {
        reader.readAsDataURL(file);
    }
};

function getUrlBase64(url, ext, callback) {
    let canvas = document.createElement("canvas"); // 创建canvas DOM元素
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload = function () {
        canvas.height = 60; // 指定画板的高度,自定义
        canvas.width = 85; // 指定画板的宽度，自定义
        ctx.drawImage(img, 0, 0, 60, 85); // 参数可自定义
        const dataURL = canvas.toDataURL("image/" + ext);
        callback.call(this, dataURL); // 回掉函数获取Base64编码
        canvas = null;
    };
}

// let param = new URLSearchParams()
// getUrlBase64('/images/card.jpg', 'jpeg', function (base64) {
//   console.log('base64', base64) //base64编码值
//   // param.append('imgString', base64)
//   // param.append('billModel', '身份证')
//   // param.append('textAngle', true)
//   // param.append('textLine', false)
// })
// import axios from 'axios'
// axios({
//   method: 'post',
//   url: '/api/ocr',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//   },
//   data: param
// }).then((res) => {
//   console.log(res)
// })
