// ============================================
// 修改数组的方法：push / pop / unshift / shift / splice / sort
// 这些方法都会"修改原数组"
// ============================================

let arr = [1, 2, 3, 4, 5];
console.log("原始:", arr);          // [1, 2, 3, 4, 5]

// push(x)：在数组"末尾"添加元素，返回新长度
arr.push(6);
console.log("push(6):", arr);       // [1, 2, 3, 4, 5, 6]

// pop()：删除并返回"最后一个"元素
let ult = arr.pop();
console.log("pop() 删除的:", ult);  // 6
console.log("pop() 之后:", arr);    // [1, 2, 3, 4, 5]

// unshift(x)：在数组"开头"添加元素，返回新长度
arr.unshift(0);
console.log("unshift(0):", arr);    // [0, 1, 2, 3, 4, 5]

// shift()：删除并返回"第一个"元素
let pri = arr.shift();
console.log("shift() 删除的:", pri); // 0
console.log("shift() 之后:", arr);   // [1, 2, 3, 4, 5]

// splice(inicio, cantidad)：从 inicio 开始删除 cantidad 个元素（会改原数组）
arr.splice(1, 2);
console.log("splice(1,2):", arr);    // 删除索引 1、2 → [1, 4, 5]

// splice(inicio, 0, ...新元素)：删除 0 个，即"插入"元素
arr.splice(1, 0, 99);
console.log("splice(1,0,99):", arr); // [1, 99, 4, 5]

// sort()：排序，默认按"字符串字典序"，会改原数组
let nums = [10, 2, 30, 4];
nums.sort();
console.log("默认 sort():", nums);   // [10, 2, 30, 4]（按字符串排，10 在 2 前面）

// 数字正确升序/降序要传比较函数
nums.sort((a, b) => a - b);
console.log("升序:", nums);          // [2, 4, 10, 30]
nums.sort((a, b) => b - a);
console.log("降序:", nums);          // [30, 10, 4, 2]

// 字符串排序（默认即可）
let letras = ["banana", "apple", "cherry"];
letras.sort();
console.log("字符串排序:", letras);  // ["apple", "banana", "cherry"]
