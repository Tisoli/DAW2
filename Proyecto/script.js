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

}

loadUsers();

/* =========================
打开 / 关闭登录弹窗
========================= */

function openLogin() {

  loginError.textContent = "";

  loginForm.reset();

  loginOverlay.classList.add("show");

  loginOverlay.setAttribute("aria-hidden", "false");

  loginUser.focus();

}

function closeLogin() {

  loginOverlay.classList.remove("show");

  loginOverlay.setAttribute("aria-hidden", "true");

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

    avatarBtn.textContent = "🐋";

    avatarBtn.title = "Sesión: " + loggedUser + " (clic para salir)";

  } else {

    /* 未登录：按钮显示 Login，点击打开弹窗 */

    loginBtn.textContent = "Login";

    loginBtn.classList.remove("is-logged");

    loginBtn.title = "Iniciar sesión";

    avatarBtn.textContent = "🐋";

    avatarBtn.title = "Perfil de usuario";

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

loginCancel.addEventListener("click", closeLogin);

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
提交登录表单
========================= */

loginForm.addEventListener("submit", (e) => {

  e.preventDefault();

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

});

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

if (!result.ok) {

throw new Error(result.error || "Error desconocido del servidor");

}

/* 保存成功 */

response.textContent =
"Guardado (" + loggedUser + "): " + result.guardado.mensaje;

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
