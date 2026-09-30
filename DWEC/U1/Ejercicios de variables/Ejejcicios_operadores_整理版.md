# UT2. 逻辑运算符和条件运算符 练习题（整理版）

> 说明：本文件由原始 PDF 复制内容整理而来。原文中题目、代码、题号和答案顺序混乱，现按「题干 → 代码 → 参考答案」重新排列，并用中文作答。

---

## 练习 1：逻辑运算符（Ejercicio 1. Operadores lógicos）

**要求：** 观察下列 JavaScript 代码片段，指出变量 `resultado` 执行后存储的值。并建议在浏览器中运行代码验证结果。

### 示例（已解决）

```javascript
let edad = 25;
let tieneCarnet = true;
let resultado = edad >= 18 && tieneCarnet;
```

**答案：** `true`。因为两个条件都满足：`edad >= 18` 为 `true`，且 `tieneCarnet` 也是 `true`。

### 第 1 题

```javascript
let edad = 20;
let resultado = edad >= 18 && edad <= 30;
```

**答案：** `true`。20 岁同时满足 ≥18 且 ≤30。

### 第 2 题

```javascript
let edad = 35;
let resultado = edad < 18 || edad > 65;
```

**答案：** `false`。35 既不小于 18，也不大于 65。

### 第 3 题

```javascript
let temperatura = 38;
let resultado = temperatura < 0 || temperatura > 35;
```

**答案：** `true`。38 > 35 成立。

### 第 4 题

```javascript
let edad = 16;
let tienePermiso = true;
let resultado = edad >= 18 || tienePermiso;
```

**答案：** `true`。虽然未满 18 岁，但有许可（`tienePermiso` 为 `true`），`||` 只要一个为真即为真。

### 第 5 题

```javascript
let usuarioActivo = false;
let resultado = !usuarioActivo;
```

**答案：** `true`。`!false` 即 `true`。

### 第 6 题

```javascript
let edad = 25;
let tieneCarnet = false;
let resultado = edad >= 18 && !tieneCarnet;
```

**答案：** `true`。`edad >= 18` 为 `true`，`!tieneCarnet` 为 `true`，两者相与为真。

### 第 7 题

```javascript
let nota = 7;
let asistencia = 80;
let resultado = nota >= 5 && asistencia >= 85;
```

**答案：** `false`。`nota >= 5` 为 `true`，但 `asistencia >= 85` 为 `false`（80 < 85），故整体为假。

### 第 8 题

```javascript
let edad = 17;
let autorizado = true;
let acompañado = false;
let resultado = edad >= 18 || (autorizado && acompañado);
```

**答案：** `false`。`edad >= 18` 为 `false`；括号内 `autorizado && acompañado` 为 `true && false = false`；最终 `false || false = false`。

### 第 9 题

```javascript
let nota = 4;
let recuperacion = 6;
let resultado = nota >= 5 || recuperacion >= 5;
```

**答案：** `true`。虽然 `nota >= 5` 为假，但 `recuperacion >= 5` 为真。

### 第 10 题

```javascript
let edad = 22;
let tieneCarnet = true;
let sancionado = false;
let resultado = (edad >= 18 && tieneCarnet) && !sancionado;
```

**答案：** `true`。`(true && true) && !false = true && true = true`。

---

## 练习 2：用逻辑运算符编写表达式（Ejercicio 2）

**要求：** 为每个小题用 JavaScript 写一个表达式来求值题目描述的条件。必要时使用逻辑运算符 `&&`、`||`、`!`。把结果存入变量 `resultado`。**不要**使用 `if`，也不要用条件运算符（`? :`）。

### 第 1 题：参加某项活动的准入

一个人至少有 18 岁**且**有授权才能参加活动。请补全赋值，使两个条件都满足时 `resultado` 为 `true`，否则为 `false`。

```javascript
let edad = 20;
let autorizado = true;
let resultado = /* 在这里写表达式 */;
```

**答案：**

```javascript
let resultado = edad >= 18 && autorizado;
```

### 第 2 题：访问警告

如果账号未激活**或**被锁定，就应给出警告。请补全赋值，使应显示警告时 `resultado` 为 `true`，否则为 `false`。

```javascript
let cuentaActiva = true;
let bloqueado = false;
let resultado = /* 在这里写表达式 */;
```

**答案：**

```javascript
let resultado = !cuentaActiva || bloqueado;
```

---

## 练习 3：条件运算符 `? :`（Ejercicio 3）

**要求：** 观察下列代码片段，指出变量 `resultado` 执行后存储的值。建议在浏览器中运行代码验证。

**说明：** 条件运算符根据条件成立与否在两个表达式之间选择：

```javascript
condición ? expresiónSiVerdadero : expresiónSiFalso
```

条件为真时取 `?` 后面的值，为假时取 `:` 后面的值。

### 示例（已解决）

```javascript
let edad = 20;
let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

**答案：** `"Mayor de edad"`，因为 `edad >= 18` 为 `true`。

### 第 1 题

```javascript
let edad = 16;
let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

**答案：** `"Menor de edad"`。16 < 18，条件为假。

### 第 2 题

```javascript
let nota = 7;
let resultado = nota >= 5 ? "Aprobado" : "Suspenso";
```

**答案：** `"Aprobado"`。7 ≥ 5。

### 第 3 题

```javascript
let temperatura = 12;
let resultado = temperatura < 15 ? "Hace frío" : "Hace calor";
```

**答案：** `"Hace frío"`。12 < 15。

### 第 4 题

```javascript
let numero = 8;
let resultado = numero % 2 === 0 ? "Par" : "Impar";
```

**答案：** `"Par"`。8 除以 2 余 0。

### 第 5 题

```javascript
let saldo = 40;
let precio = 50;
let resultado = saldo >= precio ? "Compra posible" : "Saldo insuficiente";
```

**答案：** `"Saldo insuficiente"`。40 < 50。

### 第 6 题

```javascript
let edad = 18;
let resultado = edad > 18 ? "Más de 18" : "18 o menos";
```

**答案：** `"18 o menos"`。条件用的是 `>`（严格大于），18 不满足，走 `:` 分支。

### 第 7 题

```javascript
let usuarioActivo = false;
let resultado = usuarioActivo ? "Acceso permitido" : "Acceso denegado";
```

**答案：** `"Acceso denegado"`。`usuarioActivo` 为假。

### 第 8 题

```javascript
let edad = 19;
let tieneCarnet = true;
let resultado = edad >= 18 && tieneCarnet ? "Puede conducir" : "No puede conducir";
```

**答案：** `"Puede conducir"`。条件 `true && true` 为真。

### 第 9 题

```javascript
let nota = 4;
let recuperacion = 6;
let resultado = (nota >= 5 || recuperacion >= 5) ? "Superado" : "Pendiente";
```

**答案：** `"Superado"`。`recuperacion >= 5` 为真，括号内整体为真。

### 第 10 题

```javascript
let precio = 80;
let esSocio = true;
let resultado = esSocio ? precio * 0.9 : precio;
```

**答案：** `72`。是会员，80 × 0.9 = 72。

---

## 练习 4：用条件运算符 `? :` 编写表达式（Ejercicio 4）

**要求：** 在每小题中，用**单个**带条件运算符（`? :`）的表达式补全 `let resultado = ...;`。**不要**使用 `if` 或 `else`。严格按照题目给出的值和消息。建议在浏览器中修改变量值验证。

**提示：**

```javascript
let resultado = condición ? valorSiVerdadero : valorSiFalso;
```

### 示例（已解决）

```javascript
let edad = 20;
let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

### 第 1 题：及格或不及格

若 `edad` 大于等于 18 存 `"Mayor de edad"`，否则存 `"Menor de edad"`。

```javascript
let nota = 4;
let resultado = /* 在这里写你的表达式 */;
```

**答案：**

```javascript
let resultado = nota >= 5 ? "Aprobado" : "Suspenso";
```

### 第 2 题：正数或非正数

若 `numero` 大于 0 存 `"Positivo"`，否则存 `"No positivo"`。

```javascript
let numero = 0;
let resultado = /* 在这里写你的表达式 */;
```

**答案：**

```javascript
let resultado = numero > 0 ? "Positivo" : "No positivo";
```

### 第 3 题：偶数或奇数

若 `numero` 能被 2 整除存 `"Par"`，否则存 `"Impar"`。

```javascript
let numero = 13;
let resultado = /* 在这里写你的表达式 */;
```

**答案：**

```javascript
let resultado = numero % 2 === 0 ? "Par" : "Impar";
```

### 第 4 题：两个数中的较大者

把 `a` 和 `b` 中较大的数值存入 `resultado`。若相等，两值任取其一即可。

```javascript
let a = 12;
let b = 9;
let resultado = /* 在这里写你的表达式 */;
```

**答案：**

```javascript
let resultado = a >= b ? a : b;
```

### 第 5 题：带折扣的价格

若 `esSocio` 为 `true`，存打了 10% 折的价格，否则存原价。`resultado` 必须是一个**数字**，不是字符串。

```javascript
let precio = 80;
let esSocio = true;
let resultado = /* 在这里写你的表达式 */;
```

**答案：**

```javascript
let resultado = esSocio ? precio * 0.9 : precio;
```

### 第 6 题：活动准入

若已成年**或**有授权，存 `"Acceso permitido"`；否则存 `"Acceso denegado"`。

```javascript
let edad = 16;
let tieneAutorizacion = true;
let resultado = /* 在这里写你的表达式 */;
```

**答案：**

```javascript
let resultado = (edad >= 18 || tieneAutorizacion) ? "Acceso permitido" : "Acceso denegado";
```

### 第 7 题：是否可以购买

若余额足够**且**账户未被锁定，存 `"Compra posible"`；否则存 `"Compra no posible"`。

```javascript
let saldo = 60;
let precio = 50;
let cuentaBloqueada = false;
let resultado = /* 在这里写你的表达式 */;
```

**答案：**

```javascript
let resultado = (saldo >= precio && !cuentaBloqueada) ? "Compra posible" : "Compra no posible";
```

### 第 8 题：通过模块

若 `examen` 和 `practicas` 两个成绩都大于等于 5，存 `"Superado"`；否则存 `"Pendiente"`。

```javascript
let examen = 6;
let practicas = 4;
let resultado = /* 在这里写你的表达式 */;
```

**答案：**

```javascript
let resultado = (examen >= 5 && practicas >= 5) ? "Superado" : "Pendiente";
```

---

## 补充说明：原始文件的乱序问题

原始 PDF 内容在复制时出现了顺序错乱，主要表现：

1. 每个练习的**说明文字**、**示例**、**题干**、**代码片段**被拆散混排。
2. **题号（Pregunta 1~10）** 集中出现在代码之前或之后，与题目失去对应关系。
3. 部分**答案文字**被提前或滞后放置。

本整理版已按逻辑将这些内容重新归位，并为每题补充了中文解答。
