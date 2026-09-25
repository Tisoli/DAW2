/*

==========================================
Gachiakuta — Lógica de la página
==========================================

Genera las tarjetas de personajes y
permite filtrarlas por grupo.
*/

const grid = document.getElementById("grid");
const countEl = document.getElementById("count");
const botones = document.querySelectorAll(".filter-btn");

/* Etiqueta legible para cada grupo */
const NOMBRE_GRUPO = {
  cleaners: "Cleaners",
  civiles: "Esfera / Civiles",
  raiders: "Raiders"
};

/* =========================
   Enlaces legales por personaje
   ========================= */

/* Lista de personajes en Wikipedia (fuente pública) */
const WIKI_PERSONAJES =
  "https://en.wikipedia.org/wiki/List_of_Gachiakuta_characters";

/* Página oficial del anime */
const SITIO_OFICIAL = "https://gachiakuta-anime.com/";

/* Plataforma legal de streaming */
const CRUNCHYROLL = "https://www.crunchyroll.com/series/GX4P22E86E/gachiakuta";

/* Construye la URL a Wikipedia usando el nombre en inglés.
   Se guarda un nombre-en-wiki distinto cuando difiere del mostrado. */
function enlaceWikipedia(p) {

  const nombreWiki = p.wiki || p.nombre;

  return WIKI_PERSONAJES + "#" + encodeURIComponent(nombreWiki.replace(/ /g, "_"));

}

/* =========================
   Crear la tarjeta de un personaje
   ========================= */
function crearTarjeta(p) {

  const card = document.createElement("article");

  card.className = "card";
  card.dataset.grupo = p.grupo;

  card.innerHTML = `
    <div class="card-top">
      <span class="badge badge-${p.grupo}">
        ${NOMBRE_GRUPO[p.grupo] || p.grupo}
      </span>
      <span class="equipo">${p.equipo !== "—" ? p.equipo : ""}</span>
    </div>

    <h2 class="nombre">${p.nombre}</h2>
    <p class="kanji">${p.kanji}</p>

    <p class="rol">${p.rol}</p>

    <p class="instrumento">
      <span>Instrumento Vital:</span> ${p.instrumento}
    </p>

    <p class="descripcion">${p.descripcion}</p>

    <div class="acciones">
      <a
        class="enlace"
        href="${enlaceWikipedia(p)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Más información
      </a>
    </div>
  `;

  return card;
}

/* =========================
   Renderizar según el filtro
   ========================= */
function renderizar(filtro) {

  grid.innerHTML = "";

  const lista = PERSONAJES.filter(
    (p) => filtro === "all" || p.grupo === filtro
  );

  lista.forEach((p) => {
    grid.appendChild(crearTarjeta(p));
  });

  countEl.textContent = lista.length;

}

/* =========================
   Botones de filtro
   ========================= */
botones.forEach((btn) => {

  btn.addEventListener("click", () => {

    botones.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    renderizar(btn.dataset.filter);

  });

});

/* =========================
   Arranque
   ========================= */
renderizar("all");
