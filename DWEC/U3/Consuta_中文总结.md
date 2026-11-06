# JavaScript 数组方法 中文总结

> 本文件是 `Consuta.md` 的整理版：涵盖其中列出的 12 个知识点
> （`push` / `unshift` / `length` 追加 / `pop` / `shift` / `splice` / `slice` /
> 引用复制 / `indexOf` / `lastIndexOf` / `sort` / `reverse`）以及文件末尾的
> `filter` / `map` / `reduce` 四段练习代码。

---

## 1. 添加元素（会修改原数组）

### `push(元素)`
在数组**末尾**添加一个或多个元素，**返回新长度**。

```javascript
const a = [1, 2, 3];
const n = a.push(4);   // n = 4, a = [1, 2, 3, 4]
a.push(5, 6);          // 可以一次加多个 → [1, 2, 3, 4, 5, 6]
```

### `arr[arr.length] = 值`
`push` 的“手动版”：因为最后一个元素的索引是 `length - 1`，所以把值写到
`length` 这个位置上，就等于在末尾追加。

```javascript
const numeros = [10, 20];
numeros[numeros.length] = 30;   // numeros = [10, 20, 30]
```

> 区别：`push` 返回新长度，方便链式使用；索引赋值返回被赋的值，
> 而且如果跳着写（比如 `arr[10] = 1`）会造出**空槽（sparse array）**。

### `unshift(元素)`
在数组**开头**添加一个或多个元素，**返回新长度**。因为要移动所有元素，
所以比 `push` 慢。

```javascript
const a = [1, 2, 3];
a.unshift(0);      // a = [0, 1, 2, 3]
a.unshift(-2, -1); // a = [-2, -1, 0, 1, 2, 3]
```

---

## 2. 删除元素（会修改原数组）

### `pop()`
删除并**返回最后一个**元素（数组为空时返回 `undefined`）。

```javascript
const a = [1, 2, 3];
const ult = a.pop();   // ult = 3, a = [1, 2]
```

### `shift()`
删除并**返回第一个**元素，其余元素整体前移（同样比 `pop` 慢）。

```javascript
const a = [1, 2, 3];
const pri = a.shift(); // pri = 1, a = [2, 3]
```

> 记忆：`push` / `pop` 操作**尾部**，`unshift` / `shift` 操作**头部**；
> 带 `p` 的是尾部（push / pop），带 `u` 的是头部（unshift / shift 只剩前一个字母差别）。

---

## 3. `splice(inicio, cantidad, ...nuevos)` —— 万能增删改

`splice` 会**修改原数组**，返回值是**被删除元素组成的数组**（没删就返回 `[]`）。

- `splice(2, 1)`：从索引 2 开始，删除 **1** 个元素。
- `splice(2, 0, "x")`：删除 0 个 → 实际是**插入** `"x"` 到索引 2 之前。
- `splice(1, 2, "a", "b")`：删除索引 1、2，并用 `"a"`、`"b"` **替换**。

```javascript
const a = [10, 20, 30, 40];
const quitados = a.splice(2, 1);  // quitados = [30], a = [10, 20, 40]

const b = [1, 2, 3];
b.splice(1, 0, 99);               // 插入 → b = [1, 99, 2, 3]
```

---

## 4. `slice()` 与“引用复制”的区别

### `slice(inicio, fin)`
**不修改原数组**，返回一段**浅拷贝**的新数组，区间是 `[inicio, fin)`（含头不含尾）。

```javascript
const arr1 = [9, 8, 7, 6, 4, 5, 2, 0, 4];
arr1.slice();       // 整个数组的副本
arr1.slice(2, 4);   // [7, 6] → 索引 2、3，不含 4
arr1.slice(-2);     // [0, 4] → 负数表示从末尾数
```

### `const array2 = array1;` 不是复制！
这只是把**同一个数组的引用**赋给另一个变量，两者指向内存中的同一个对象。

```javascript
const arr1 = [9, 8, 7];
const arr2 = arr1;        // 只是别名，不是副本
arr2[0] = "X";
console.log(arr1);        // ["X", 8, 7] ← 原数组也变了
```

真正的副本要用 `slice()`（或展开运算符 `[...arr1]`）：

```javascript
const copia = arr1.slice();
copia[0] = "Y";
console.log(arr1);        // 不受影响
```

> **`slice` vs `splice`**：`slice`（切片）→ 不改原数组，只取副本；
> `splice`（剪接）→ 改原数组，可增删改。

---

## 5. 查找：`indexOf` / `lastIndexOf`

- `indexOf(x)`：返回 `x` **第一次**出现的索引，找不到返回 `-1`。
- `lastIndexOf(x)`：返回 `x` **最后一次**出现的索引，找不到返回 `-1`。

```javascript
const arr = [9, 8, 7, 6, 4, 5, 2, 0, 4];
arr.indexOf(4);      // 4  （第一次出现在索引 4）
arr.indexOf(2);      // 6
arr.indexOf(99);     // -1 （不存在）
arr.lastIndexOf(4);  // 8  （最后一次出现在索引 8）
```

> 两者都用 **`===`** 比较，所以 `indexOf("2")` 找不到数字 `2`，也找不到 `NaN`。
> 判断“是否存在”可以直接写 `if (arr.indexOf(x) !== -1)`，或者用 `includes(x)`。

---

## 6. 排序：`sort()` 与 `reverse()`

### `sort(比较函数)`
**会修改原数组**（并返回同一个数组）。默认把元素**转成字符串**按字典序比较，
所以数字排序会出错：

```javascript
const nums = [10, 2, 30, 4];
nums.sort();                 // [10, 2, 30, 4] ← 没变化！按 "10" < "2" 排
nums.sort((a, b) => a - b);  // 升序 [2, 4, 10, 30]
nums.sort((a, b) => b - a);  // 降序 [30, 10, 4, 2]
```

字符串数组直接用默认排序即可：

```javascript
["banana", "apple", "cherry"].sort();  // ["apple", "banana", "cherry"]
```

> 比较函数返回 **负数** 表示 `a` 排前面，**正数** 表示 `b` 排前面，`0` 表示相等。

### `reverse()`
**会修改原数组**，把元素顺序整个反转，返回反转后的同一个数组。

```javascript
[1, 2, 3].reverse();   // [3, 2, 1]
```

> 想得到“降序的副本”而不动原数组，可以写 `[...nums].sort((a, b) => b - a)`。

---

## 7. 回调三剑客：`filter` / `map` / `reduce`

三者都**不修改原数组**（`reduce` 更是把数组“压缩”成一个值）。

### `filter(callback)` —— 过滤（返回新数组，元素个数 ≤ 原数组）
`callback` 返回 `true` 的元素被保留。

```javascript
const temperaturas = [3, -2, 7, -5, 0, 9, -1];
const bajoCero = temperaturas.filter(temperatura => temperatura < 0);
console.log(bajoCero);   // [-2, -5, -1]
```

### `map(callback)` —— 映射（返回新数组，长度一定相同）
每个元素经过 `callback` 处理后的结果组成新数组。

```javascript
const precios = [20, 40, 60, 80];
const rebajados = precios.map(precio => precio * 0.75);
console.log(rebajados);  // [15, 30, 45, 60]
```

### `reduce(callback, valorInicial)` —— 归约（把数组压成一个值）
`callback(acumulador, elemento, indice, array)` 的返回值成为下一轮的 `acumulador`。
`valorInicial` 是 `acumulador` 的初值（**建议总是写**）。

```javascript
// 连乘：2 * 3 * 4 * 5 = 120
const factores = [2, 3, 4, 5];
const producto = factores.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(producto);   // 120
```

```javascript
// 求最大值：18, 42, 27, 65, 39 → 65
const puntuaciones = [18, 42, 27, 65, 39];
const maxima = puntuaciones.reduce((acumulador, puntuacion) => {
    if (puntuacion > acumulador) {
        return puntuacion;
    }
    return acumulador;
}, 0);
console.log(maxima);     // 65
```

> ⚠️ **坑**：上面求最大值用了初值 `0`，如果数组**全是负数**，结果会错成 `0`。
> 更安全的写法是 `Math.max(...puntuaciones)`，或者用 `-Infinity` 作初值。

---

## 8. 速查表

| 方法 | 作用 | 改原数组？ | 返回值 |
|------|------|:---:|------|
| `push(x)` | 末尾添加 | ✅ | 新长度 |
| `arr[arr.length] = x` | 末尾添加（手动） | ✅ | 被赋的值 |
| `unshift(x)` | 开头添加 | ✅ | 新长度 |
| `pop()` | 删除末尾 | ✅ | 被删元素 |
| `shift()` | 删除开头 | ✅ | 被删元素 |
| `splice(i, n, ...)` | 删除 / 插入 / 替换 | ✅ | 被删元素数组 |
| `slice(i, f)` | 截取一段副本 | ❌ | 新数组 |
| `indexOf(x)` | 第一次出现的索引 | ❌ | 索引 / `-1` |
| `lastIndexOf(x)` | 最后一次出现的索引 | ❌ | 索引 / `-1` |
| `sort(fn)` | 排序 | ✅ | 同一数组（已排序） |
| `reverse()` | 反转顺序 | ✅ | 同一数组（已反转） |
| `filter(fn)` | 过滤 | ❌ | 新数组 |
| `map(fn)` | 映射 | ❌ | 新数组 |
| `reduce(fn, init)` | 归约成一个值 | ❌ | 任意类型的值 |

---

## 9. 最容易踩的 5 个坑

1. **`const array2 = array1` 不是复制**，只是多了一个名字，改一个另一个也变。
2. **`slice` 不改原数组，`splice` 改原数组**，名字只差一个字母。
3. **`sort()` 默认按字符串排**，数字必须传 `(a, b) => a - b`。
4. **`sort()` / `reverse()` 返回的是原数组本身**，不是副本。
5. **`reduce` 忘写初值**时，第一个元素会当作 `acumulador`；
   写错初值（如求最大值写 `0`）在全是负数时会得到错误结果。
