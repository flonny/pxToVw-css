let a = {
  age: 1,
};
console.log(a);
let b = a;
b.age = 2;
console.log(a);
b = Object.assign({}, a);
b.age = '3';
console.log(b);
console.log(a);
a = {
  age: 18,
  job: {
    name: 'teacher',
  },
};
b = { ...a };
b.job.name = 'singer';
console.log(a);
b = JSON.parse(JSON.stringify(a));
b.job.name = 'dancer';
console.log(a);
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});
let c = Symbol('');
console.log(typeof c);
console.log(typeof /s/);
c = function () {};
console.log(typeof c);
function structuralClone(obj) {
  return new Promise((resolve) => {
    const {
      port1,
      port2,
    } = new MessageChannel();
    port2.onmessage = ev => resolve(ev.data);
    port1.postMessage(obj);
  });
}

const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

obj.b.d = obj.b;

// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
const test = async () => {
  const clone = await structuralClone(obj);
  console.log(clone);
};
test();
