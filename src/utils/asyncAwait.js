let fs = require("fs");
// console.log(fs)

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
        });
    };
}

let readFile = promisify(fs.readFile);
function* read() {
    let value1 = yield readFile("./name.txt", "utf-8");
    let value2 = yield readFile(value1, "utf-8");
    console.log("value2==>>", value2);
}

async function read2() {
    let value1 = await readFile("./name.txt", "utf-8");
    let value2 = await readFile(value1, "utf-8");
    console.log("value2==>>async", value2);
    return value2;
}
read2();

function Co(iter) {
    return new Promise((resolve, reject) => {
        let next = function (data) {
            let { value, done } = iter.next(data);
            if (done) {
                resolve(data);
            } else {
                value.then((val) => {
                    next(val);
                }, reject);
            }
        };
        next();
    });
}

Co(read()).then((res) => {
    console.log(res);
});
