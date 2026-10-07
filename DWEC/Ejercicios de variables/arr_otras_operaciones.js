// ============================================
// 数组复制 / 截取 / 查找 (slice, indexOf, lastIndexOf)
// ============================================

// 用 slice() 复制数组
// slice() 是"浅拷贝"：会生成一个新数组，修改新数组不会影响原数组
// Copia de arrays con slice()
// es un copia superficial
const arr1 = [9, 8, 7, 6, 4, 5, 2, 0, 4];
console.log(arr1);

// 注意：这只是"引用"赋值，arr_aux 和 arr1 指向同一个数组（不是复制！）
const arr_aux = arr1;
arr_aux[2] = "Toledo";        // 修改 arr_aux 会影响 arr1，因为是同一个数组
console.log(arr_aux);

// slice() 不带参数 = 复制整个数组，得到真正独立的新数组
const arr2 = arr1.slice();
console.log(arr2);           // 打印 arr1 的副本

arr2[4] = "panceta";         // 只修改副本 arr2
console.log(arr2);           // arr2 变了
console.log(arr1);           // arr1 不变 → 证明 slice() 是独立副本

// slice(2, 4) 从索引 2 开始，到索引 4 之前（不含 4）→ 取索引 2、3
const arr3 = arr1.slice(2, 4);
console.log(arr3);           // ['Toledo', 6]

// ---------------- 查找 ----------------

// indexOf(x)：返回 x 第一次出现的索引，找不到返回 -1
console.log(arr1.indexOf(2));   // 2 第一次出现的索引

let resu1 = arr1.indexOf(7);
console.log(`El numero 7 esta en ${resu1}`);  // 用模板字符串输出 7 所在的位置

// lastIndexOf(x)：返回 x 最后一次出现的索引
console.log(arr1.lastIndexOf(4));  // 4 最后一次出现的位置
// indexOf(x)：返回 x 第一次出现的位置（对比用）
console.log(arr1.indexOf(4));      // 4 第一次出现的位置
