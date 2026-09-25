/*

==========================================
Gachiakuta — Datos de los personajes del anime
==========================================

Información basada en fuentes públicas (Wikipedia).
Cada personaje incluye:
  nombre    : nombre completo
  kanji     : nombre en japonés
  grupo     : cleaners | civiles | raiders
  equipo    : subgrupo dentro de la organización
  rol       : rol principal
  instrumento : nombre del Instrumento Vital
  descripcion : descripción breve
*/

const PERSONAJES = [

  /* =========================
     CLEANERS — Equipo Akuta
     ========================= */
  {
    nombre: "Rudo Surebrec",
    kanji: "ルド・スレブレック",
    grupo: "cleaners",
    equipo: "Equipo Akuta",
    rol: "Protagonista",
    instrumento: "3R (guantes)",
    descripcion:
      "Antiguo Esferita e hijo adoptivo de Regto. Fue acusado falsamente de asesinato y arrojado al Pozo. Tras ser salvado de unas bestias de basura, se une a los Cleaners para vengarse de sus acusadores. Sus guantes 3R dan vida a cualquier objeto que sostenga."
  },
  {
    nombre: "Enjin",
    kanji: "エンジン",
    grupo: "cleaners",
    equipo: "Equipo Akuta",
    rol: "Líder del Equipo Akuta",
    instrumento: "Umbreaker (paraguas)",
    descripcion:
      "Miembro de los Cleaners que rescata a Rudo. Lleva el Umbreaker, un instrumento con forma de paraguas. Su verdadero nombre era Endoareilychima Illastsalli Machiada Leotrago Sphidi Pharjin. Posee Time Walk, que ralentiza su percepción del tiempo."
  },
  {
    nombre: "Zanka Nijiku",
    kanji: "ザンカ・ニジク",
    grupo: "cleaners",
    equipo: "Equipo Akuta",
    rol: "Combatiente experto",
    instrumento: "Lovely Assistaff (bastón)",
    descripcion:
      "Trabajador incansable y maestro del combate, reclutado por Enjin. Su bastón se vuelve afilado y metálico al activarse. Proviene de una familia noble del Distrito Kamuatari, con vínculos con los Hell Guards."
  },
  {
    nombre: "Riyo Reaper",
    kanji: "リヨウ・リーパー",
    grupo: "cleaners",
    equipo: "Equipo Akuta",
    rol: "Miembro despreocupado",
    instrumento: "The Ripper (tijeras)",
    descripcion:
      "Miembro alegre, enérgico y extrovertido de los Cleaners. Su instrumento es un par de tijeras llamado The Ripper. Antiguamente fue sicaria."
  },
  {
    nombre: "Eishia Stilza",
    kanji: "エイシア・スティルザ",
    grupo: "cleaners",
    equipo: "Equipo Akuta",
    rol: "Sanadora",
    instrumento: "Type:Heal (cable)",
    descripcion:
      "Hermana pequeña y tímida de August, y miembro del equipo Akuta. Puede curar a las personas con su instrumento Type:Heal, que tiene el aspecto de un cable de alimentación negro."
  },
  {
    nombre: "Shikage",
    kanji: "シカゲ",
    grupo: "cleaners",
    equipo: "Equipo Akuta",
    rol: "Miembro reservado",
    instrumento: "Barrera (desconocido)",
    descripcion:
      "Cleaner extremadamente reservado y huidizo. Su instrumento, desconocido, actúa como una barrera que protege su cuartel general."
  },

  /* =========================
     CLEANERS — Equipo Eager / Child / Supporter
     ========================= */
  {
    nombre: "Tamsy Caines",
    kanji: "タムジー・ケインズ",
    grupo: "cleaners",
    equipo: "Equipo Eager",
    rol: "Veterano / antagonista",
    instrumento: "Tokushin (rueca)",
    descripcion:
      "Miembro aparentemente amable del equipo Eager. Con Tokushin crea una red de hilos que atrapa a mucha gente. En realidad es el 'Ángel', capaz de moverse entre la Esfera y el Suelo, y desea romper la 'coraza' de Rudo."
  },
  {
    nombre: "Delmon Gates",
    kanji: "デルモン・ゲイツ",
    grupo: "cleaners",
    equipo: "Equipo Eager",
    rol: "Combatiente",
    instrumento: "Thirst Quencher (agua)",
    descripcion:
      "Miembro ruidoso y apasionado del equipo Eager. Con Thirst Quencher controla el agua de sus oponentes: cuanto más absorben, más se hinchan hasta estallar. Antes trabajaba como granjero."
  },
  {
    nombre: "Bro Santa",
    kanji: "ブロ・サンタ",
    grupo: "cleaners",
    equipo: "Equipo Child",
    rol: "Supervisor",
    instrumento: "Cloth (bandana)",
    descripcion:
      "Supervisor afable y siempre disculpándose del Equipo Child. Su instrumento, Cloth, es una bandana que se convierte en látigo."
  },
  {
    nombre: "Dear Santa",
    kanji: "ディア・サンタ",
    grupo: "cleaners",
    equipo: "Equipo Child",
    rol: "Giver de 10 años",
    instrumento: "Centralian (chupete)",
    descripcion:
      "Giver de diez años, irritable y que no habla. Su instrumento Centralian es un chupete que roba fuerza a los enemigos con cada golpe para dársela a sí mismo."
  },
  {
    nombre: "Guita Hebby Fantasia",
    kanji: "ギータ・ヘビィ・ファンタジア",
    grupo: "cleaners",
    equipo: "Equipo Child",
    rol: "Miembro infantil",
    instrumento: "Guita (kaiju)",
    descripcion:
      "Adolescente ruidosa, sensible y infantil que no entiende las normas sociales. Su instrumento es un mono de kaiju llamado Guita, que le permite transformarse en un monstruo gigante."
  },
  {
    nombre: "Gris Rubion",
    kanji: "グリス・ルビオン",
    grupo: "cleaners",
    equipo: "Equipo Supporter",
    rol: "Combatiente cuerpo a cuerpo",
    instrumento: "Ninguno",
    descripcion:
      "Miembro honorable y amable del equipo Supporter que, pese a no tener Instrumento Vital, posee una fuerza física increíble y depende de otras habilidades."
  },
  {
    nombre: "Follo Tunito",
    kanji: "フォロ・ツニート",
    grupo: "cleaners",
    equipo: "Equipo Supporter",
    rol: "Giver",
    instrumento: "Alan (martillo)",
    descripcion:
      "Miembro educado y amable del equipo Supporter. Se convirtió en Giver al recibir su instrumento Alan, un martillo pequeño que se transforma en un enorme mazo acumulando estrés."
  },
  {
    nombre: "Tomme Mima",
    kanji: "トウム・ミマ",
    grupo: "cleaners",
    equipo: "Equipo Supporter",
    rol: "Documentación",
    instrumento: "—",
    descripcion:
      "Miembro compasivo del equipo Supporter. Se encarga de tomar notas y registrar información sobre las Bestias de Basura."
  },
  {
    nombre: "Meriege",
    kanji: "メリージ",
    grupo: "cleaners",
    equipo: "Sucursal Sur",
    rol: "Supporter",
    instrumento: "—",
    descripcion:
      "Supporter tranquilo, amable y de modales suaves de la Sucursal Sur de los Cleaners, junto a Mildretta."
  },
  {
    nombre: "Mildretta",
    kanji: "ミルドレッタ",
    grupo: "cleaners",
    equipo: "Sucursal Sur",
    rol: "Supporter",
    instrumento: "—",
    descripcion:
      "Supporter alta, musculosa y seca, proveniente de la tribu guerrera Sileia. Es el completo opuesto de su compañero Meriege."
  },
  {
    nombre: "Guita (Adderoy Twins: Otto y Epalte)",
    kanji: "アダーロイ兄弟",
    grupo: "cleaners",
    equipo: "Equipo Danger",
    rol: "Gemelos",
    instrumento: "Twin Dolls (muñecos)",
    descripcion:
      "Otto y Epalte, gemelos muy energéticos del Equipo Danger de la Sucursal Sur. Su instrumento Twin Dolls son muñecos que crecen hasta convertirse en gigantes capaces de causar destrucción masiva."
  },
  {
    nombre: "Arkha Corvus",
    kanji: "アルハ・コルバス",
    grupo: "cleaners",
    equipo: "—",
    rol: "Jefe de los Cleaners",
    instrumento: "Previsión",
    descripcion:
      "Jefe fuerte y carismático de los Cleaners. Su Instrumento Vital parece otorgarle previsión (visión del futuro)."
  },
  {
    nombre: "Semiu Grier",
    kanji: "セミュ・グライア",
    grupo: "cleaners",
    equipo: "—",
    rol: "Recepcionista",
    instrumento: "Eyes (gafas)",
    descripcion:
      "Recepcionista del cuartel general de los Cleaners. Con Eyes, unas gafas, examina las capacidades de un Giver. También puede detectar ataques entrantes y ralentizar el tiempo."
  },
  {
    nombre: "August Stilza",
    kanji: "オーガスト・スティルザ",
    grupo: "cleaners",
    equipo: "—",
    rol: "Artesano",
    instrumento: "—",
    descripcion:
      "Artesano excéntrico que diseña las máscaras y la ropa de los Cleaners. Hermano mayor de Eishia."
  },

  /* =========================
     ESFERA / CIVILES
     ========================= */
  {
    nombre: "Amo Empool",
    kanji: "アモ・エンプール",
    grupo: "civiles",
    equipo: "—",
    rol: "Dama de Penta",
    instrumento: "Watchman Boots (botas)",
    descripcion:
      "Niña joven traumatizada y maltratada, la Dama de Penta. Tras ser secuestrada es rescatada por Rudo y los Cleaners y pasa a unirse al grupo. Sus botas liberan un aroma que hace ver cosas y obedecer su voluntad."
  },
  {
    nombre: "Regto",
    kanji: "レグト",
    grupo: "civiles",
    equipo: "—",
    rol: "Padre adoptivo de Rudo",
    instrumento: "—",
    descripcion:
      "Esferita despreocupado y padre adoptivo de Rudo. Le entregó los guantes 3R antes de morir."
  },
  {
    nombre: "Chiwa",
    kanji: "チワ",
    grupo: "civiles",
    equipo: "—",
    rol: "Interés romántico de Rudo",
    instrumento: "—",
    descripcion:
      "Esferita de la que Rudo estaba enamorado antes de ser arrojado al Pozo. Lo rechazó y repudió al creerlo un verdadero asesino, y nunca volvió a verla."
  },
  {
    nombre: "Alice Stilza",
    kanji: "アリス・スティルザ",
    grupo: "civiles",
    equipo: "—",
    rol: "Doctora",
    instrumento: "—",
    descripcion:
      "Abuela de August y Eishia, y doctora que trata a Rudo tras caer al Pozo. Se la confunde con un anciano por su aspecto."
  },
  {
    nombre: "Remlin Tysark",
    kanji: "レムリン・ティサーク",
    grupo: "civiles",
    equipo: "—",
    rol: "Hechicera",
    instrumento: "Pen (pluma)",
    descripcion:
      "Joven y traviesa hechicera que vive en Canvas Town. Usa el instrumento Pen para dibujar hechizos que aplican distintos efectos a sus objetivos."
  },
  {
    nombre: "Gnomulas Ridd",
    kanji: "グノムラース・リド",
    grupo: "civiles",
    equipo: "—",
    rol: "Alcalde de Canvas Town",
    instrumento: "—",
    descripcion:
      "Alcalde severo y disciplinado de Canvas Town."
  },
  {
    nombre: "Mymo",
    kanji: "マイモー",
    grupo: "civiles",
    equipo: "—",
    rol: "Reportero",
    instrumento: "Elenhos (micrófono)",
    descripcion:
      "Reportero hiperactivo y excéntrico del Suelo con grandes planes de futuro. Su instrumento Elenhos, un micrófono, le permite manipular las mentes y el alma de las personas."
  },
  {
    nombre: "Gil",
    kanji: "ギル",
    grupo: "civiles",
    equipo: "—",
    rol: "Mercenaria",
    instrumento: "Gilmero (bate)",
    descripcion:
      "Mercenaria bajita y despreocupada contratada por Mymo. Su instrumento Gilmero, un bate de béisbol, crea una 'bola rompedora' con cualquier objeto esférico que golpee."
  },
  {
    nombre: "Felix",
    kanji: "フェリックス",
    grupo: "civiles",
    equipo: "—",
    rol: "Seguidero de Mymo",
    instrumento: "Carta (archivador)",
    descripcion:
      "Seguidos leal y estricto de Mymo. Su instrumento Carta, un archivador de cartas, puede formar un campo de fuerza irrompible."
  },
  {
    nombre: "Kuro",
    kanji: "クロ",
    grupo: "civiles",
    equipo: "—",
    rol: "Informante",
    instrumento: "Cambio de forma (cuervo)",
    descripcion:
      "Informante longevo y fornido, muy formal, que se dice ha acumulado la mayor cantidad de información. Puede cambiar completamente su forma de humano a cuervo."
  },
  {
    nombre: "Too Lily",
    kanji: "トゥー・リリー",
    grupo: "civiles",
    equipo: "—",
    rol: "Cantante",
    instrumento: "Lunavis (bastón)",
    descripcion:
      "Cantante muy famosa y extravagante del Suelo. Su instrumento es Lunavis, un bastón."
  },

  /* =========================
     RAIDERS
     ========================= */
  {
    nombre: "Zodyl Typhon",
    kanji: "ゾディル・テュフォン",
    grupo: "raiders",
    equipo: "Raiders",
    rol: "Jefe de los Raiders",
    instrumento: "Mishra (abrigo)",
    descripcion:
      "Jefe de los Raiders, frío, astuto y calculador, que rara vez muestra emoción. Con Mishra, un abrigo de la serie Watchman, muta su cuerpo adoptando la forma y rasgos de lo que come."
  },
  {
    nombre: "Jabber Wonger",
    kanji: "ジャバー・ウォンガー",
    grupo: "raiders",
    equipo: "Raiders",
    rol: "Combatiente masoquista",
    instrumento: "Mankira (anillos)",
    descripcion:
      "Miembro masoquista de los Raiders obsesionado con pelear contra los más fuertes. Su instrumento Mankira son diez anillos que se convierten en garras con diversas neurotoxinas y veneno."
  },
  {
    nombre: "Cthoni Andor",
    kanji: "クトーニ・アンドール",
    grupo: "raiders",
    equipo: "Raiders",
    rol: "Miembro reservada",
    instrumento: "Manhole (alcantarilla)",
    descripcion:
      "Miembro reservada y silenciosa de los Raiders. Su instrumento Manhole le permite teletransportarse a cualquier lugar, excepto a los sitios muy iluminados."
  },
  {
    nombre: "Noerde Hew Amozo",
    kanji: "ネルデ・ヒュウ・アモゾ",
    grupo: "raiders",
    equipo: "Raiders",
    rol: "Novata orgullosa",
    instrumento: "Mirei (peine)",
    descripcion:
      "Proveniente de la tribu guerrera Sileia, es una novata orgullosa de los Raiders. Su instrumento Mirei, un peine ornamentado, carga su pelo de electricidad estática para electrocutar a quien lo toque."
  },
  {
    nombre: "Bundus Begalkeit",
    kanji: "ブンドゥス・ベガルケイト",
    grupo: "raiders",
    equipo: "Raiders",
    rol: "Miembro veterano",
    instrumento: "Hands (brazos metálicos)",
    descripcion:
      "Raider mayor, extremadamente alto y musculoso. Su instrumento Hands es un conjunto de seis brazos mecánicos que salen de los tubos de su espalda, cada uno con distintas habilidades."
  },
  {
    nombre: "Momoa Rukel",
    kanji: "モモア・リュケル",
    grupo: "raiders",
    equipo: "Raiders",
    rol: "Adolescente melómana",
    instrumento: "Asyl (auriculares)",
    descripcion:
      "Raider adolescente despreocupada a la que le gusta sumergirse en la música. Su instrumento Asyl, unos auriculares, le permite oír todos los recuerdos de quien toque mientras está activo."
  },
  {
    nombre: "Konza",
    kanji: "コンザ",
    grupo: "raiders",
    equipo: "Raiders",
    rol: "Raider de bajo nivel",
    instrumento: "Snowshoes (raquetas)",
    descripcion:
      "También conocido como el 'Maestro de las Raquetas de Nieve'. Su instrumento Snowshoes le da movilidad en todo tipo de terrenos, ya sea arcilla o barro."
  },
  {
    nombre: "Fu Orostor",
    kanji: "フウ・オロストル",
    grupo: "raiders",
    equipo: "Raiders",
    rol: "Ex-miembro novato",
    instrumento: "Hii (muñeco maldito)",
    descripcion:
      "Antiguo miembro novato de los Raiders, antes un cobarde que se escondía tras las órdenes. Su instrumento Hii es un muñeco maldito que, al activarse, controla su cuerpo otorgándole fuerza y una personalidad violenta."
  },

  /* =========================
     HELL GUARDS (relacionados con Cleaners)
     ========================= */
  {
    nombre: "Hyo",
    kanji: "ヒョウ",
    grupo: "cleaners",
    equipo: "Hell Guards",
    rol: "Aprendiz de Hell Guard",
    instrumento: "—",
    descripcion:
      "Aprendiz de Hell Guard práctica y apática, que entrenó junto a Zanka. Combatiente cuerpo a cuerpo muy hábil, con un estilo imprevisible aprendido en las calles."
  },
  {
    nombre: "Kyouka Nijiku",
    kanji: "キョウカ・ニジク",
    grupo: "cleaners",
    equipo: "Hell Guards",
    rol: "Comandante",
    instrumento: "Armas de fuego",
    descripcion:
      "Hell Guard feroz, dura e intimidante, comandante del Escuadrón Red Horns número uno. Muy diestra con las armas en combate contra Givers. Hermana mayor de Zanka."
  },
  {
    nombre: "Goka Nijiku",
    kanji: "ゴウカ・ニジク",
    grupo: "cleaners",
    equipo: "Hell Guards",
    rol: "Segundo al mando",
    instrumento: "—",
    descripcion:
      "Hell Guard serio y directo, segundo al mando del Escuadrón Red Horns bajo su hermana mayor Kyouka. Hermano mayor de Zanka."
  }

];
