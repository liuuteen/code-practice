// 展开语法（...），或扩展运算符
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
/*
    展开语法(Spread syntax), 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；
    还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。
*/
// 1. 展开数组
var arr = [0, 1, 2];
console.log(...arr) // 0 1 2

// 2. 连接数组
var arr1 = [0, 1];
var arr2 = [2, 3];
var arr3 = [...arr1, ...arr2]  // [0, 1, 2, 3]

// 3. 构造字面量数组时使用展开语法
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: "baz", x: 42, y: 13 }

// js中对对象使用展开语法会报错
// console.log(...obj1)

// react + babel则允许
var p1 = {name: 'a', age: 10}
<MyComonent name={p1.name} age={p1.age} />
<MyComonent {...obj1} />