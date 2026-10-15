const sendBtn =
document.getElementById("sendBtn");

const response =
document.getElementById("response");

const userMessage =
document.getElementById("userMessage");

const maxTokensRange =
document.getElementById("maxTokensRange");

const maxTokens =
document.getElementById("maxTokens");

const temperatureRange =
document.getElementById("temperatureRange");

const temperature =
document.getElementById("temperature");

/* =========================
登录相关元素
========================= */

const loginBtn =
document.getElementById("loginBtn");

const rechargeBtn =
document.getElementById("rechargeBtn");

const avatarBtn =
document.getElementById("avatarBtn");

const loginOverlay =
document.getElementById("loginOverlay");

const loginForm =
document.getElementById("loginForm");

const loginUser =
document.getElementById("loginUser");

const loginPass =
document.getElementById("loginPass");

const loginError =
document.getElementById("loginError");

const loginCancel =
document.getElementById("loginCancel");

const loginTitle =
document.getElementById("loginTitle");

const loginSubmit =
document.getElementById("loginSubmit");

const loginEmail =
document.getElementById("loginEmail");

const loginEmailField =
document.getElementById("loginEmailField");

const loginSwitchBtn =
document.getElementById("loginSwitchBtn");

const loginSwitchText =
document.getElementById("loginSwitchText");

/* =========================
余额相关元素
========================= */

const balanceBtn =
document.getElementById("balanceBtn");

const balanceValue =
document.getElementById("balanceValue");

/* 当前用户余额（欧元） */

let currentSaldo = 0;

/* =========================
登录 / 注册 模式
========================= */

let registerMode = false;

/* =========================
登录状态
========================= */

let loggedUser = null;

/* =========================
加载用户列表 (usuarios.json)
若通过 file:// 打开被 CORS 拦截，
则回退到内置用户列表
========================= */

const fallbackUsers = [
  { username: "Tisoli", password: "Tisoli" },
  { username: "Dani", password: "Dani" }
];

let usersList = [];

async function loadUsers() {

  try {

    const res = await fetch("usuarios.json", { cache: "no-store" });

    if (!res.ok) {
      throw new Error("No se pudo cargar usuarios.json");
    }

    usersList = await res.json();

  } catch (err) {

    console.warn(
      "Usando lista de usuarios interna (fetch falló):",
      err
    );

    usersList = fallbackUsers;

  }

  /* 合并本地注册用户（localStorage） */

  mergeLocalUsers();

}

loadUsers();

/* =========================
本地注册用户（当无法写入 usuarios.json 时，
例如用 file:// 打开页面，注册信息保存到 localStorage）
========================= */

const LOCAL_USERS_KEY = "bigfatfish_local_users";

function loadLocalUsers() {

  try {

    const raw = localStorage.getItem(LOCAL_USERS_KEY);

    return raw ? JSON.parse(raw) : [];

  } catch (err) {

    return [];

  }

}

function saveLocalUsers(list) {

  try {

    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(list));

  } catch (err) {

    console.warn("No se pudo guardar en localStorage:", err);

  }

}

/* 把本地注册用户合并进 usersList（供登录校验用） */

function mergeLocalUsers() {

  const local = loadLocalUsers();

  for (const u of local) {

    const exists = usersList.some(
      (x) => x.username.toLowerCase() === u.username.toLowerCase()
    );

    if (!exists) {
      usersList.push(u);
    }

  }

}

/* =========================
打开 / 关闭登录弹窗
========================= */

function openLogin() {

  setLoginMode("login");

  loginOverlay.classList.add("show");

  loginOverlay.setAttribute("aria-hidden", "false");

  loginUser.focus();

}

/* =========================
切换 登录 <-> 注册 模式
========================= */

function setLoginMode(mode) {

  registerMode = mode === "register";

  loginError.textContent = "";

  loginForm.reset();

  loginPass.setAttribute(
    "autocomplete",
    registerMode ? "new-password" : "current-password"
  );

  if (registerMode) {

    loginTitle.textContent = "Crear cuenta";

    loginSubmit.textContent = "Registrarse";

    loginEmailField.hidden = false;

    loginEmail.required = true;

    loginSwitchText.textContent = "¿Ya tienes cuenta?";

    loginSwitchBtn.textContent = "Inicia sesión";

  } else {

    loginTitle.textContent = "Iniciar sesión";

    loginSubmit.textContent = "Entrar";

    loginEmailField.hidden = true;

    loginEmail.required = false;

    loginSwitchText.textContent = "¿No tienes cuenta?";

    loginSwitchBtn.textContent = "Regístrate";

  }

}

function closeLogin() {

  loginOverlay.classList.remove("show");

  loginOverlay.setAttribute("aria-hidden", "true");

}

/* =========================
余额：查询 / 显示
========================= */

async function fetchSaldo() {

  if (!loggedUser) {
    return null;
  }

  try {

    const res = await fetch(
      "api/saldo.php?usuario=" + encodeURIComponent(loggedUser),
      { cache: "no-store" }
    );

    const data = await res.json();

    if (data.ok) {
      currentSaldo = Number(data.saldo);
      return currentSaldo;
    }

  } catch (err) {

    console.warn("No se pudo consultar el saldo:", err);

  }

  /* 后端不可用（如 file:// 打开）：退回到 localStorage */

  const local = loadLocalUsers();

  const u = local.find(
    (x) => x.username.toLowerCase() === loggedUser.toLowerCase()
  );

  currentSaldo = u && typeof u.saldo === "number" ? u.saldo : 0;

  return currentSaldo;

}

function renderSaldo() {

  balanceValue.textContent = Number(currentSaldo).toFixed(2);

}

/* =========================
更新界面 (登录后)
========================= */

function updateAuthUI() {

  if (loggedUser) {

    /* 已登录：按钮显示用户名，点击可退出 */

    loginBtn.textContent = loggedUser;

    loginBtn.classList.add("is-logged");

    loginBtn.title = "Cerrar sesión";

    avatarBtn.title = "Sesión: " + loggedUser + " (clic para salir)";

    /* 显示余额并刷新数值 */

    balanceBtn.hidden = false;

    fetchSaldo().then(renderSaldo);

  } else {

    /* 未登录：按钮显示 Login，点击打开弹窗 */

    loginBtn.textContent = "Login";

    loginBtn.classList.remove("is-logged");

    loginBtn.title = "Iniciar sesión";

    avatarBtn.title = "Perfil de usuario";

    /* 隐藏余额 */

    balanceBtn.hidden = true;

  }

}

/* =========================
退出登录
========================= */

function logout() {

  loggedUser = null;

  updateAuthUI();

  response.style.display = "block";

  response.textContent = "Has cerrado la sesión.";

}

/* =========================
登录按钮事件
点击：未登录 → 打开弹窗
      已登录 → 退出登录
========================= */

loginBtn.addEventListener("click", () => {

  if (loggedUser) {

    if (confirm("¿Quieres cerrar la sesión de " + loggedUser + "?")) {
      logout();
    }

    return;

  }

  openLogin();

});

/* 点头像：已登录时退出 */

avatarBtn.addEventListener("click", () => {

  if (loggedUser) {

    if (confirm("¿Quieres cerrar la sesión de " + loggedUser + "?")) {
      logout();
    }

  }

});

/* =========================
点击余额 → 进入充值界面
========================= */

function openRecarga() {

  if (!loggedUser) {

    openLogin();

    return;

  }

  window.location.href =
    "recarga.html?usuario=" + encodeURIComponent(loggedUser);

}

balanceBtn.addEventListener("click", openRecarga);

/* "Completar" 按钮也进入充值界面 */

rechargeBtn.addEventListener("click", openRecarga);

loginCancel.addEventListener("click", closeLogin);

/* 切换 登录 / 注册 */

loginSwitchBtn.addEventListener("click", () => {

  setLoginMode(registerMode ? "login" : "register");

  loginUser.focus();

});

/* 点击遮罩关闭 */

loginOverlay.addEventListener("click", (e) => {

  if (e.target === loginOverlay) {
    closeLogin();
  }

});

/* ESC 关闭 */

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape" && loginOverlay.classList.contains("show")) {
    closeLogin();
  }

});

/* =========================
提交表单（登录 或 注册）
========================= */

loginForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  if (registerMode) {
    await handleRegister();
  } else {
    handleLogin();
  }

});

/* =========================
登录校验
========================= */

function handleLogin() {

  const user = loginUser.value.trim();

  const pass = loginPass.value;

  const found = usersList.find(
    (u) =>
      u.username.toLowerCase() === user.toLowerCase() &&
      u.password === pass
  );

  if (!found) {

    loginError.textContent = "Usuario o contraseña incorrectos.";

    loginPass.value = "";

    loginPass.focus();

    return;

  }

  /* 登录成功 */

  loggedUser = found.username;

  closeLogin();

  updateAuthUI();

}

/* =========================
注册新用户
只注册：账号、密码、邮箱
用户名重复时提示：El nombre de usuario ya está registrado.
========================= */

async function handleRegister() {

  const user = loginUser.value.trim();

  const pass = loginPass.value;

  const email = loginEmail.value.trim();

  /* 三个字段都不能为空 */

  if (!user || !pass || !email) {

    loginError.textContent =
      "Debes rellenar usuario, contraseña y correo.";

    return;

  }

  /* 邮箱格式校验 */

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

    loginError.textContent = "El correo electrónico no es válido.";

    return;

  }

  /* 用户名是否已注册（不区分大小写） */

  const yaExiste = usersList.some(
    (u) => u.username.toLowerCase() === user.toLowerCase()
  );

  if (yaExiste) {

    loginError.textContent =
      "El nombre de usuario ya está registrado.";

    loginUser.focus();

    return;

  }

  const nuevo = { username: user, password: pass, email: email };

  /* 先尝试写入后端 usuarios.json */

  try {

    const res = await fetch("api/registrar.php", {

      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(nuevo)

    });

    const result = await res.json();

    if (!result.ok) {

      /* 后端也可能报重复用户名 */

      if (res.status === 409) {

        loginError.textContent =
          "El nombre de usuario ya está registrado.";

      } else {

        loginError.textContent =
          result.error || "No se pudo registrar el usuario.";

      }

      return;

    }

    usersList.push(nuevo);

  } catch (err) {

    /* 无法访问后端（如 file:// 打开）：
       退回保存到 localStorage，保证页面仍可用 */

    console.warn("Backend no disponible, usando localStorage:", err);

    usersList.push(nuevo);

    const local = loadLocalUsers();

    local.push(nuevo);

    saveLocalUsers(local);

  }

  /* 注册成功：回到登录模式并提示 */

  setLoginMode("login");

  loginError.style.color = "#2e8b57";

  loginError.textContent =
    "¡Cuenta creada! Ahora puedes iniciar sesión.";

  setTimeout(() => { loginError.style.color = ""; }, 2500);

}

/* =========================
Max Tokens
滑块 → 数字
========================= */


maxTokensRange.addEventListener("input", () => {

maxTokens.value = maxTokensRange.value;

});

/* =========================
Max Tokens
数字 → 滑块
========================= */

maxTokens.addEventListener("input", () => {

let value = Number(maxTokens.value);

if (value < 16) {
value = 16;
}

if (value > 2048) {
value = 2048;
}

maxTokensRange.value = value;

});

/* =========================
Temperature
滑块 → 数字
========================= */

temperatureRange.addEventListener("input", () => {

temperature.value = temperatureRange.value;

});

/* =========================
Temperature
数字 → 滑块
========================= */

temperature.addEventListener("input", () => {

let value = Number(temperature.value);

if (value < 0) {
value = 0;
}

if (value > 2) {
value = 2;
}

temperatureRange.value = value;

});

/* =========================
初始化界面
========================= */

updateAuthUI();

/* =========================
发送消息
(只有登录后才能发送)
========================= */

sendBtn.addEventListener("click", async () => {

/* 未登录 → 弹出登录 */

if (!loggedUser) {

response.style.display = "block";

response.textContent = "Debes iniciar sesión para enviar mensajes.";

openLogin();

return;

}

const message = userMessage.value.trim();

if (!message) {
alert("Por favor, escribe un mensaje.");
return;
}

/* 组装发送给 PHP 后端的数据 */

const apiData = {

user: loggedUser,

message: message,

max_tokens: Number(maxTokens.value),

temperature: Number(temperature.value)

};

console.log("API Request:", apiData);

/* 显示发送中 */

response.style.display = "block";

response.textContent = "Guardando...";

sendBtn.disabled = true;

try {

/* 发送到后端 PHP */

const res = await fetch("api/guardar.php", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify(apiData)

});

const result = await res.json();

/* 余额不足：后端返回 402，提示去充值 */

if (res.status === 402 || result.error === "Saldo insuficiente. Recarga para seguir preguntando.") {

  if (typeof result.saldo === "number") {
    currentSaldo = result.saldo;
    renderSaldo();
  }

  response.textContent =
    "Saldo insuficiente. Necesitas al menos 1 € para preguntar.\n" +
    "Recarga tu cuenta para continuar.";

  /* 直接打开充值界面 */

  setTimeout(openRecarga, 800);

  return;

}

if (!result.ok) {

throw new Error(result.error || "Error desconocido del servidor");

}

/* 显示 AI 回复 + 推测的心情 + 本次消费 */

response.textContent =
result.respuesta +
"\n\n(Estado de ánimo detectado: " + result.mood + ")" +
"\n(Coste: " + Number(result.coste).toFixed(2) + " €" +
"  ·  Saldo: " + Number(result.saldo).toFixed(2) + " €)";

/* 刷新余额显示 */

if (typeof result.saldo === "number") {
  currentSaldo = result.saldo;
  renderSaldo();
}

/* 清空输入框，方便继续输入 */

userMessage.value = "";

} catch (err) {

console.error("Error al guardar:", err);

response.textContent =
"No se pudo guardar el mensaje: " + err.message +
"\n(¿Estás abriendo la página con PHP? Prueba con un servidor local.)";

} finally {

sendBtn.disabled = false;

}

});

/* =========================
总结最近一个月心情
点击导航栏 "Sentimiento"
========================= */

const sentimientoLink = document.querySelector(
'nav a[href="#"]:nth-child(4)'
);

async function resumenSentimiento() {

if (!loggedUser) {

response.style.display = "block";

response.textContent =
"Debes iniciar sesión para ver tu resumen.";

openLogin();

return;

}

response.style.display = "block";

response.textContent = "Analizando tu último mes...";

try {

const res = await fetch(
"api/resumen.php?usuario=" + encodeURIComponent(loggedUser),
{ cache: "no-store" }
);

const data = await res.json();

if (!data.ok) {
throw new Error(data.error || "Error del servidor");
}

/* 心情统计转成可读文字 */

let conteoTexto = "";

for (const [mood, n] of Object.entries(data.conteo || {})) {
conteoTexto += mood + ": " + n + "\n";
}

response.textContent =
"Resumen del último mes (" + loggedUser + ")\n\n" +
data.resumen +
"\n\n---\n" +
conteoTexto;

} catch (err) {

console.error("Error al resumir:", err);

response.textContent =
"No se pudo generar el resumen: " + err.message;

}

}

if (sentimientoLink) {

sentimientoLink.addEventListener("click", (e) => {

e.preventDefault();

resumenSentimiento();

});

}
