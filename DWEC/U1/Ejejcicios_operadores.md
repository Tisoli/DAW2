Instrucciones: Observa los siguientes fragmentos de código JavaScript e indica qué valor almacena la variable
resultado después de su ejecución.
El resultado es true , porque se cumplen las dos condiciones: la edad es mayor o igual que 18 y la variable
tieneCarnet contiene el valor true .
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
UT2. Ejercicios de operadores lógicos y
operador condicional
Ejercicio 1. Operadores lógicos
Ejemplo resuelto
Pregunta 1
Pregunta 2
Pregunta 3
let edad = 25;
let tieneCarnet = true;
let resultado = edad >= 18 && tieneCarnet;
let edad = 20;
let resultado = edad >= 18 && edad <= 30;
let edad = 35;
let resultado = edad < 18 || edad > 65;
let temperatura = 38;
let resultado = temperatura < 0 || temperatura > 35;
No. 1 / 7
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
Pregunta 4
Pregunta 5
Pregunta 6
Pregunta 7
Pregunta 8
let edad = 16;
let tienePermiso = true;
let resultado = edad >= 18 || tienePermiso;
let usuarioActivo = false;
let resultado = !usuarioActivo;
let edad = 25;
let tieneCarnet = false;
let resultado = edad >= 18 && !tieneCarnet;
let nota = 7;
let asistencia = 80;
let resultado = nota >= 5 && asistencia >= 85;
let edad = 17;
let autorizado = true;
let acompañado = false;
let resultado = edad >= 18 || (autorizado && acompañado);
No. 2 / 7
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
Instrucciones: Escribe en JavaScript una expresión que evalúe la condición indicada en cada apartado. Utiliza
los operadores lógicos && , || y ! cuando corresponda. Guarda el resultado en la variable resultado . No
utilices if ni el operador condicional ( ? : ).
Una persona puede participar en una actividad si tiene al menos 18 años y dispone de autorización.
Completa la asignación para que resultado contenga true cuando se cumplan ambas condiciones y false
en caso contrario.
Una persona debe recibir un aviso si no tiene una cuenta activa o está bloqueada.
Completa la asignación para que resultado contenga true cuando deba mostrarse el aviso y false en caso
contrario.
Pregunta 9
Pregunta 10
Ejercicio 2. Escribir expresiones con operadores lógicos
Pregunta 1. Acceso a una actividad
Pregunta 2. Aviso de acceso
let nota = 4;
let recuperacion = 6;
let resultado = nota >= 5 || recuperacion >= 5;
let edad = 22;
let tieneCarnet = true;
let sancionado = false;
let resultado = (edad >= 18 && tieneCarnet) && !sancionado;
let edad = 20;
let autorizado = true;
let resultado = /* Escribe aquí la expresión */;
let cuentaActiva = true;
let bloqueado = false;
let resultado = /* Escribe aquí la expresión */;
No. 3 / 7
Instrucciones: Observa los siguientes fragmentos de código JavaScript e indica qué valor almacena la variable
resultado después de su ejecución. Comprueba tus respuestas ejecutando el código en el navegador.
El operador condicional permite elegir entre dos expresiones según se cumpla o no una condición:
Si la condición es verdadera, se obtiene el valor situado después de ? . Si es falsa, se obtiene el valor situado
después de : .
Resultado: "Mayor de edad" , porque edad >= 18 es true .
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
Ejercicio 3. Operador condicional (? :)
Ejemplo resuelto
Pregunta 1
Pregunta 2
Pregunta 3
Pregunta 4
condición ? expresiónSiVerdadero : expresiónSiFalso
let edad = 20;
let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
let edad = 16;
let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
let nota = 7;
let resultado = nota >= 5 ? "Aprobado" : "Suspenso";
let temperatura = 12;
let resultado = temperatura < 15 ? "Hace frío" : "Hace calor";
let numero = 8;
let resultado = numero % 2 === 0 ? "Par" : "Impar";
No. 4 / 7
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
¿Qué valor almacena resultado ?
Pregunta 5
Pregunta 6
Pregunta 7
Pregunta 8
Pregunta 9
Pregunta 10
let saldo = 40;
let precio = 50;
let resultado = saldo >= precio ? "Compra posible" : "Saldo insuficiente";
let edad = 18;
let resultado = edad > 18 ? "Más de 18" : "18 o menos";
let usuarioActivo = false;
let resultado = usuarioActivo ? "Acceso permitido" : "Acceso denegado";
let edad = 19;
let tieneCarnet = true;
let resultado = edad >= 18 && tieneCarnet ? "Puede conducir" : "No puede conducir";
let nota = 4;
let recuperacion = 6;
let resultado = (nota >= 5 || recuperacion >= 5) ? "Superado" : "Pendiente";
let precio = 80;
let esSocio = true;
let resultado = esSocio ? precio * 0.9 : precio;
No. 5 / 7
Instrucciones: En cada apartado, completa la línea let resultado = ...; utilizando una sola expresión
con el operador condicional ( ? : ). No utilices if ni else . Respeta exactamente los valores y mensajes
indicados. Comprueba el funcionamiento en el navegador cambiando después el valor de las variables.
Recuerda:
Escribe una expresión que almacene "Mayor de edad" si edad es mayor o igual que 18 y "Menor de edad"
en caso contrario.
Dada la variable nota , almacena "Aprobado" si es mayor o igual que 5 y "Suspenso" en caso contrario.
Dada la variable numero , almacena "Positivo" si es mayor que 0 y "No positivo" en caso contrario.
Dada la variable numero , almacena "Par" si es divisible entre 2 y "Impar" en caso contrario.
Dadas las variables a y b , almacena en resultado el mayor de los dos valores numéricos. Si son iguales,
cualquiera de los dos sirve.
Ejercicio 4. Escribir expresiones con el operador
condicional (? :)
Ejemplo resuelto
Pregunta 1. Aprobado o suspenso
Pregunta 2. Número positivo o no positivo
Pregunta 3. Par o impar
Pregunta 4. El mayor de dos números
let resultado = condición ? valorSiVerdadero : valorSiFalso;
let edad = 20;
let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
let nota = 4;
let resultado = /* Escribe aquí tu expresión */;
let numero = 0;
let resultado = /* Escribe aquí tu expresión */;
let numero = 13;
let resultado = /* Escribe aquí tu expresión */;
No. 6 / 7
Dadas las variables precio y esSocio , almacena el precio con un 10 % de descuento si esSocio es true y
el precio original en caso contrario. resultado debe contener un número, no una cadena.
Dadas las variables edad y tieneAutorizacion , almacena "Acceso permitido" si la persona es mayor de
edad o tiene autorización; en caso contrario, "Acceso denegado" .
Dadas las variables saldo , precio y cuentaBloqueada , almacena "Compra posible" si hay saldo suficiente
y la cuenta no está bloqueada. En caso contrario, almacena "Compra no posible" .
Dadas las variables examen y practicas , almacena "Superado" si ambas notas son mayores o iguales que
5. En caso contrario, almacena "Pendiente" .
Pregunta 5. Precio con descuento
Pregunta 6. Acceso a una actividad
Pregunta 7. Compra posible
Pregunta 8. Superar el módulo
let a = 12;
let b = 9;
let resultado = /* Escribe aquí tu expresión */;
let precio = 80;
let esSocio = true;
let resultado = /* Escribe aquí tu expresión */;
let edad = 16;
let tieneAutorizacion = true;
let resultado = /* Escribe aquí tu expresión */;
let saldo = 60;
let precio = 50;
let cuentaBloqueada = false;
let resultado = /* Escribe aquí tu expresión */;
let examen = 6;
let practicas = 4;
let resultado = /* Escribe aquí tu expresión */;
No. 7 / 7