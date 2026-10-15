/* =========================
   Bigfatfish - 充值页面逻辑
   ========================= */

const params = new URLSearchParams(window.location.search);
const usuario = (params.get("usuario") || "").trim();

const rechargeUser  = document.getElementById("rechargeUser");
const rechargeSaldo = document.getElementById("rechargeSaldo");
const amountGrid    = document.getElementById("amountGrid");
const cardNumber    = document.getElementById("cardNumber");
const cardExpiry    = document.getElementById("cardExpiry");
const cardCvv       = document.getElementById("cardCvv");
const cardError     = document.getElementById("cardError");
const cardForm      = document.getElementById("cardForm");
const payBtn        = document.getElementById("payBtn");
const rechargeNote  = document.getElementById("rechargeNote");

/* 当前选择的金额 */

let selectedAmount = null;

/* 已加载用户的余额 */

let saldoActual = 0;

/* =========================
初始化：显示用户 + 余额
========================= */

function renderSaldo() {
  rechargeSaldo.textContent = Number(saldoActual).toFixed(2);
}

async function cargarSaldo() {

  if (!usuario) {
    rechargeUser.textContent = "—";
    cardError.textContent = "No se ha indicado ningún usuario.";
    return;
  }

  rechargeUser.textContent = usuario;

  try {

    const res = await fetch(
      "api/saldo.php?usuario=" + encodeURIComponent(usuario),
      { cache: "no-store" }
    );

    const data = await res.json();

    if (data.ok) {
      saldoActual = Number(data.saldo);
      renderSaldo();
      return;
    }

  } catch (err) {

    console.warn("No se pudo consultar el saldo:", err);

  }

  /* 后端不可用（file://）：从 localStorage 估算 */

  const local = JSON.parse(
    localStorage.getItem("bigfatfish_local_users") || "[]"
  );

  const u = local.find(
    (x) => x.username.toLowerCase() === usuario.toLowerCase()
  );

  saldoActual = u && typeof u.saldo === "number" ? u.saldo : 0;
  renderSaldo();

}

cargarSaldo();

/* =========================
选择金额
========================= */

amountGrid.addEventListener("click", (e) => {

  const btn = e.target.closest(".amount-option");

  if (!btn) {
    return;
  }

  /* 取消其它选中 */

  amountGrid
    .querySelectorAll(".amount-option")
    .forEach((b) => b.classList.remove("selected"));

  btn.classList.add("selected");

  selectedAmount = Number(btn.dataset.amount);

  validarFormulario();

});

/* =========================
银行卡输入格式化
========================= */

/* 卡号：只留数字，每 4 位加空格 */

cardNumber.addEventListener("input", () => {

  const digits = cardNumber.value.replace(/\D/g, "").slice(0, 16);

  cardNumber.value = digits.replace(/(.{4})/g, "$1 ").trim();

  validarFormulario();

});

/* 有效期：自动补 "/" → MM/AA */

cardExpiry.addEventListener("input", () => {

  let v = cardExpiry.value.replace(/\D/g, "").slice(0, 4);

  if (v.length >= 3) {
    v = v.slice(0, 2) + "/" + v.slice(2);
  }

  cardExpiry.value = v;

  validarFormulario();

});

/* CVV：只留数字（3~4 位） */

cardCvv.addEventListener("input", () => {

  cardCvv.value = cardCvv.value.replace(/\D/g, "").slice(0, 4);

  validarFormulario();

});

/* =========================
校验规则（模拟银行卡）

1) 卡号：正好 16 位数字
2) 有效期：MM/AA，月份 01-12，且不能过期
3) CVV：3 或 4 位数字
还需选择金额
========================= */

function validarTarjeta() {

  const num = cardNumber.value.replace(/\D/g, "");

  const exp = cardExpiry.value;

  const cvv = cardCvv.value.replace(/\D/g, "");

  /* 卡号 */

  if (num.length !== 16) {
    return { ok: false, motivo: "El número de tarjeta debe tener 16 dígitos." };
  }

  /* 有效期 */

  const m = exp.match(/^(\d{2})\/(\d{2})$/);

  if (!m) {
    return { ok: false, motivo: "La caducidad debe tener el formato MM/AA." };
  }

  const mes = Number(m[1]);
  const anio = 2000 + Number(m[2]);

  if (mes < 1 || mes > 12) {
    return { ok: false, motivo: "El mes de caducidad no es válido." };
  }

  const ahora = new Date();
  const finMes = new Date(anio, mes, 1); /* 下个月 1 号 */
  if (finMes <= ahora) {
    return { ok: false, motivo: "La tarjeta está caducada." };
  }

  /* CVV */

  if (cvv.length < 3 || cvv.length > 4) {
    return { ok: false, motivo: "El CVV debe tener 3 o 4 dígitos." };
  }

  return { ok: true };

}

function validarFormulario() {

  const tarjeta = validarTarjeta();

  /* 只有金额已选、且卡信息合法，才可点击支付 */

  payBtn.disabled = !(selectedAmount !== null && tarjeta.ok);

  /* 实时反馈错误（但不打扰正在输入的人） */

  if (!tarjeta.ok && (cardNumber.value || cardExpiry.value || cardCvv.value)) {
    cardError.classList.remove("ok");
    cardError.textContent = tarjeta.motivo;
  } else if (tarjeta.ok && selectedAmount === null) {
    cardError.classList.remove("ok");
    cardError.textContent = "";
  } else {
    cardError.classList.remove("ok");
    cardError.textContent = "";
  }

}

/* =========================
提交充值
========================= */

cardForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  rechargeNote.textContent = "";

  /* 再次校验 */

  const tarjeta = validarTarjeta();

  if (!tarjeta.ok) {
    cardError.classList.remove("ok");
    cardError.textContent = tarjeta.motivo;
    return;
  }

  if (selectedAmount === null) {
    cardError.classList.remove("ok");
    cardError.textContent = "Elige una cantidad para recargar.";
    return;
  }

  payBtn.disabled = true;
  cardError.textContent = "Procesando pago...";

  /* 发送到后端加钱 */

  try {

    const res = await fetch("api/saldo.php", {

      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        usuario: usuario,
        importe: selectedAmount
      })

    });

    const data = await res.json();

    if (!data.ok) {
      throw new Error(data.error || "No se pudo realizar la recarga.");
    }

    saldoActual = Number(data.saldo);
    renderSaldo();

    cardError.classList.remove("ok");
    cardError.textContent = "";

    rechargeNote.textContent =
      "¡Recarga de " + selectedAmount + " € completada! " +
      "Nuevo saldo: " + Number(saldoActual).toFixed(2) + " €";

    /* 清空表单 */

    cardForm.reset();
    selectedAmount = null;
    amountGrid
      .querySelectorAll(".amount-option")
      .forEach((b) => b.classList.remove("selected"));

  } catch (err) {

    /* 后端不可用（file://）：本地模拟加钱 */

    console.warn("Backend no disponible, recarga local:", err);

    const KEY = "bigfatfish_local_users";

    const local = JSON.parse(localStorage.getItem(KEY) || "[]");

    const idx = local.findIndex(
      (x) => x.username.toLowerCase() === usuario.toLowerCase()
    );

    if (idx >= 0) {
      local[idx].saldo =
        (typeof local[idx].saldo === "number" ? local[idx].saldo : 0) +
        selectedAmount;
      localStorage.setItem(KEY, JSON.stringify(local));
      saldoActual = local[idx].saldo;
    } else {
      saldoActual = (saldoActual || 0) + selectedAmount;
    }

    renderSaldo();

    rechargeNote.textContent =
      "¡Recarga de " + selectedAmount + " € completada! " +
      "Nuevo saldo: " + Number(saldoActual).toFixed(2) + " €";

    cardError.textContent = "";
    cardForm.reset();
    selectedAmount = null;
    amountGrid
      .querySelectorAll(".amount-option")
      .forEach((b) => b.classList.remove("selected"));

  } finally {

    payBtn.disabled = true;

  }

});

/* 初次校验 */

validarFormulario();
