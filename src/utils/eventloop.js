//宏任务：setTimeout, setInterval, ajax, DOM事件
//微任务：Promise async/await
//微任务执行时机比宏任务要早
// 1.call stack清空 >> 2.执行当前的微任务（micro task queue） >> 3.尝试DOM渲染 >> 4.触发event loop
// event loop 轮询查找callback queue, 如果有移到call stack执行
