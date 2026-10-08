# Resumen — Tema 2: Introducción a la programación en JavaScript

## 1. JavaScript como lenguaje de programación del lado cliente

- JS es el principal lenguaje de programación del **lado cliente** de las aplicaciones web; se ejecuta habitualmente en el navegador.
- Permite: manipular el contenido de la página, responder a eventos del usuario, validar formularios, comunicarse con servidores y acceder a las APIs del navegador.
- Ventajas: está soportado por los principales navegadores y se integra directamente con HTML y CSS.

## 2. Fundamentos de JavaScript

- Se incluye mediante la etiqueta `<script>`: **inline** en el HTML (es conveniente ponerlo dentro del `body` y al final) o en un **archivo externo** (`.js`).
- **Sentencias**: terminan en punto y coma `;` (obligatorio en este módulo), aunque existe el mecanismo ASI (Automatic Semicolon Insertion).
- **Bloques**: conjunto de sentencias entre llaves `{ }` (se usan en estructuras de control, bucles y funciones).
- **Identificadores**: el primer carácter debe ser letra, `_` o `$`; los siguientes pueden incluir números; no se pueden usar palabras reservadas; **JS distingue mayúsculas y minúsculas**.
- **Comentarios**: `//` (una línea) y `/* */` (varias líneas).

## 3. Variables y constantes

- **`const`**: constantes. **`let` / `var`**: variables.
- **Ámbito**
  - Global: accesible en todo el código.
  - Local: de función o de bloque (`if`, `for`, `while`, etc.).
- **Diferencias entre `var` y `let`**
  - *Ámbito*: `var` **no** tiene ámbito de bloque; `let` **sí**.
  - *Uso antes de la declaración*: `var` devuelve `undefined`; `let` da error.
  - *Redeclaración*: `var` permite redeclarar; `let` **no** (pero sí reasignar).
  - `const` tiene ámbito de bloque, debe inicializarse y no puede reasignarse.
- **Recomendación**: usar `const` por defecto, `let` si el valor cambia, evitar `var` y las variables globales innecesarias.

## 3.3. Tipos de datos (tipado dinámico)

- **Tipos primitivos**: `string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`.
- **Objetos**: `Object`, `Array`, `Function`, además de `Date`, `RegExp`, `Map`, `Set`, `WeakMap`, `WeakSet`.
- **String**: comillas dobles `"`, simples `'` e invertidas `` ` `` (permiten `${}`); concatenación con `+`; caracteres UNICODE con `\u{...}`; uso de "escape".
- **Number**: enteros y reales (separador decimal = punto); notación exponencial con `e`; binario/octal/hexadecimal con `0b`/`0o`/`0x`; valores especiales `NaN` e `Infinity`.
- **BigInt**: números muy grandes, terminan en `n`; límites `Number.MAX_SAFE_INTEGER` / `Number.MIN_SAFE_INTEGER`.
- **typeof**: devuelve el tipo de un dato.
- **Variables, constantes y objetos**: con primitivos `const` no reasigna; con objetos se guarda una **referencia**. Un array `const` puede modificar su contenido (`push`, cambiar elementos) pero no referenciar otro objeto; con `let` sí se puede reasignar.

## 3.4. Conversión de tipos

- **Implícita (coerción)**: automática según contexto.
  - A **String**: `'La suma es: ' + 5` → `"La suma es: 5"`.
  - A **Número**: `'10' - 2` → `8`; con `+` si hay string se concatena; cadena no numérica → `NaN`.
  - Booleanos: `true` → 1, `false` → 0. `null` → 0 en contexto numérico, `"null"` al concatenar.
  - A **Booleano**: falsy = `false`, `0`, `""`, `null`, `undefined`, `NaN`; el resto truthy.
  - Comparaciones: `==` convierte tipos; `===` no (comparación estricta).
- **Explícita**: `Number()`, `parseInt()` (entero), `parseFloat()` (decimal), `String()`, `Boolean()`.
  - `Number()` convierte el valor completo; `parseInt()`/`parseFloat()` toman la parte numérica inicial (`parseInt("10abc")` → 10, `Number("10abc")` → `NaN`).

## 4. Entrada y salida del navegador

- **Consola**: `console.log()`, `console.error()`, `console.warn()`, `console.info()`, `console.debug()`, `console.table()`.
  - La diferencia entre ellos no es si muestran información, sino cómo la clasifica/presenta la consola (iconos, colores, filtrado por nivel).
- **Ventanas de diálogo modales**:
  - `alert()`: muestra un aviso.
  - `prompt()`: entrada de texto (devuelve string o `null` si se cancela).
  - `confirm()`: dos botones, devuelve booleano.

## 5. Operadores

- **Asignación**: `=` y compuestos (`+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `<<=`, etc.).
- **Comparación**: `==`/`!=` (no estricta, con conversión de tipos) y `===`/`!==` (estricta, compara valor y tipo). Relacionales: `>`, `<`, `>=`, `<=`.
- **Aritméticos**: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`.
- **Bit a bit**: convierten los operandos a binario (32 bits con signo), operan bit a bit y vuelven a decimal. Operadores: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`.
- **Lógicos**: `&&` (AND), `||` (OR), `!` (NOT). *(Las tablas de verdad son imágenes en el original.)*
- **Cadena**: `+` concatena cadenas.
- **Condicional (ternario)**: `condición ? valor_si_verdadero : valor_si_falso`.
- **Precedencia**: orden de resolución cuando no se usan paréntesis. *(La tabla es una imagen en el original.)*

## 6. Estructuras de control

- **`if / else if / else`**: decisiones según condición booleana.
- **`switch`**: múltiples casos; compara con `===`; `break` evita el *fall-through*; `default` es opcional.
- **`for`**: repite un número conocido de veces (inicialización; condición; actualización).
- **`while`**: evalúa la condición **antes** de cada iteración (puede no ejecutarse nunca).
- **`do..while`**: evalúa la condición **después**, por lo que se ejecuta **al menos una vez**.
- **Instrucciones de salto**:
  - `break`: sale del bucle/switch más próximo.
  - `continue`: salta a la siguiente iteración.
  - **Etiquetas (labeled)**: permiten que `break`/`continue` actúen sobre bucles externos (ej. `break outerLoop;`).

## 7. Herramientas para programación, prueba y documentación

- **Editor**: Visual Studio Code (resaltado, autocompletado, detección de errores).
- **Herramientas del navegador**: ejecutar código, consola, inspección y análisis de ejecución.
  - Prueba del código directamente en el navegador.
  - Depuración con `console.log()`.
  - Puntos de interrupción (breakpoints) para detener la ejecución y revisar variables paso a paso.
- **Documentación**: MDN Web Docs (https://developer.mozilla.org).
