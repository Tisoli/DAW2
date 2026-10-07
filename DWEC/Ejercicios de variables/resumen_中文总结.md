

# JavaScript 数组常用方法 / 语法 中文总结

> 本文件对应 `resumen.txt` 中列出的知识点，并结合 `Ejercicios de variables` 文件夹里的代码进行说明。

---

## 1. 数组索引与查找

### `.length`
返回数组的长度（元素个数）。索引从 `0` 开始，所以最后一个元素的索引是 `length - 1`。

```javascript
const lenguajes = ["js", "java", "python", "php", "c#"];
console.log(lenguajes.length);        // 5
console.log(lenguajes[lenguajes.length - 1]); // "c#" 取最后一个元素
```

### `indexOf(元素)`
返回该元素**第一次**出现的位置（索引）；找不到返回 `-1`。

```javascript
const arr1 = [9, 8, 7, 6, 4, 5, 2, 0, 4];
console.log(arr1.indexOf(4));  // 4 （4 第一次出现在索引 4）
console.log(arr1.indexOf(2));  // 6
console.log(arr1.indexOf(99)); // -1（不存在）
```

### `lastIndexOf(元素)`
返回该元素**最后一次**出现的位置（索引）；找不到返回 `-1`。

```javascript
console.log(arr1.lastIndexOf(4)); // 8 （4 最后一次出现在索引 8）
```

> 对比：`indexOf` 从前往后找，`lastIndexOf` 从后往前找。

---

## 2. 截取 / 复制数组

### `slice(inicio, fin)`
**不修改原数组**，返回一个新数组（浅拷贝）。
- `slice()`：复制整个数组。
- `slice(2, 4)`：从索引 2 开始，到索引 4 **之前**（不包含 4），即取索引 2、3。
- `fin` 可以是负数，表示从末尾往前数。

```javascript
const arr1 = [9, 8, 7, 6, 4, 5, 2, 0, 4];

const arr2 = arr1.slice();      // 复制整个数组
const arr3 = arr1.slice(2, 4);  // [7, 6] 取索引 2 和 3
```

> **重要区分（浅拷贝 vs 引用）**
> ```javascript
> const arr_aux = arr1;        // 只是引用，arr_aux 和 arr1 指向同一个数组
> arr_aux[2] = "Toledo";
> console.log(arr1);           // "Toledo" 也出现在 arr1 里！（两者是同一个数组）
> ```
> 而 `slice()` 会创建一个新数组，修改新数组**不会**影响原数组。

---

## 3. 增加 / 删除元素（会修改原数组）

### `push(元素)`
在数组**末尾**添加一个或多个元素，返回新长度。

```javascript
let a = [1, 2, 3];
a.push(4);       // a = [1, 2, 3, 4]
```

### `pop()`
删除并返回数组**最后一个**元素。

```javascript
let a = [1, 2, 3];
let ult = a.pop(); // ult = 3, a = [1, 2]
```

### `unshift(元素)`
在数组**开头**添加一个或多个元素，返回新长度。

```javascript
let a = [1, 2, 3];
a.unshift(0);   // a = [0, 1, 2, 3]
```

### `shift()`
删除并返回数组**第一个**元素。

```javascript
let a = [1, 2, 3];
let pri = a.shift(); // pri = 1, a = [2, 3]
```

### `splice(inicio, cantidad, ...新元素)`
最灵活的方法，**会修改原数组**。可同时删除、插入、替换元素。
- `splice(2, 1)`：从索引 2 开始删除 1 个元素。
- `splice(2, 0, "x")`：从索引 2 开始删除 0 个（即不删），插入 "x"。

```javascript
let a = [1, 2, 3, 4, 5];
a.splice(1, 2);        // 从索引 1 删除 2 个 → a = [1, 4, 5]
let b = [1, 2, 3];
b.splice(1, 0, 99);    // 在索引 1 处插入 99 → b = [1, 99, 2, 3]
```

> **`slice` vs `splice` 记忆法**：
> - `slice`（切片）→ 只取出一段，**不改**原数组。
> - `splice`（拼接/剪接）→ **改**原数组，可增删改。

---

## 4. 遍历数组

### 普通 `for` 循环（靠索引）
```javascript
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);   // 通过索引访问每个元素
}
```

### `for (...of...)`
直接**遍历元素的值**（推荐用于数组）。
```javascript
for (const valor of arr1) {
    console.log(valor);   // 依次输出每个元素的值
}
```

### `for (...in...)`
遍历**索引（键）**，数组里得到的是字符串形式的索引。
```javascript
for (const ind in arr1) {
    console.log(ind + "->" + arr1[ind]);  // 0->9, 1->8, ...
}
```

> **口诀**：
> - `for...of` → 要**值**（of = 元素本身）。
> - `for...in`   → 要**键/索引**（in = 下标或属性名）。

---

## 5. 排序

### `.sort()`
对数组排序，**会修改原数组**，默认按**字符串的字典序**排序（不是数字大小！）。

```javascript
let nums = [10, 2, 30, 4];
nums.sort();                      // [10, 2, 30, 4] → [10, 2, 30, 4] 按字符串排
                                  // 实际得到 ["10","2","30","4"] 字典序 → [10, 2, 30, 4]
console.log(nums);
```

数字正确排序需要传比较函数：
```javascript
let nums = [10, 2, 30, 4];
nums.sort((a, b) => a - b);   // 升序：[2, 4, 10, 30]
nums.sort((a, b) => b - a);   // 降序：[30, 10, 4, 2]
```

> 默认 `sort()` 会把元素转成字符串比较，所以 `10` 会排在 `2` 前面。
> 数字排序一定要写比较函数 `(a, b) => a - b`。

---

## 6. 速查表

| 方法 | 作用 | 是否改原数组 | 返回值 |
|------|------|:---:|------|
| `.length` | 元素个数 | — | 数字 |
| `indexOf(x)` | 首次出现的索引 | 否 | 索引 / -1 |
| `lastIndexOf(x)` | 最后出现的索引 | 否 | 索引 / -1 |
| `slice(a, b)` | 截取 [a, b) 的副本 | 否 | 新数组 |
| `push(x)` | 末尾添加 | 是 | 新长度 |
| `pop()` | 删除末尾 | 是 | 被删元素 |
| `unshift(x)` | 开头添加 | 是 | 新长度 |
| `shift()` | 删除开头 | 是 | 被删元素 |
| `splice(i, n, ...)` | 增/删/改 | 是 | 被删元素数组 |
| `sort(fn)` | 排序 | 是 | 排序后数组 |
| `for...of` | 遍历值 | — | — |
| `for...in` | 遍历索引/键 | — | — |
