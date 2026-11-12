# -*- coding: utf-8 -*-
"""Documentos de la práctica de Digitalización: almacén logístico con robots."""

from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn

BASE = r"C:\Users\sihao\Desktop\DAW2\digitalizacion\entrega"
IMG = r"C:\Users\sihao\Desktop\DAW2\digitalizacion\img"
OUT_BILINGUE = BASE + r"\Digitalizacion_U1_logistica_bilingue.docx"
OUT_ESPANOL = BASE + r"\Digitalizacion_U1_logistica_espanol.docx"

TITULO_ES = ("De lo analógico a lo inteligente: robots en un almacén "
             "logístico internacional")
TITULO_ZH = "从模拟到智能：海外仓用机器人替代人工拣货"

AUTOR = "[Tu nombre]"
PALABRAS_POR_MINUTO = 95

# (titulo_es, titulo_zh, fig, [es], [zh])
BLOQUES = [
    (
        "Introducción",
        "开场",
        None,
        [
            "Buenos días. Hoy voy a hablar de un almacén de logística internacional en Coslada, Madrid. Allí se preparan pedidos de comercio electrónico para clientes de toda España. Casi todo se hace a mano. Mi propuesta es que los robots hagan el trabajo físico y que las personas hagan el trabajo que necesita cabeza.",
        ],
        [
            "大家好。今天我要讲的是马德里科斯拉达的一家海外仓，那里处理发往全西班牙的电商订单。现在几乎全靠人工。我的方案是让机器人做体力活，让人做需要用脑的活。",
        ],
    ),
    (
        "1. El elemento original",
        "1. 原始对象",
        "«图 1» 仓库全景 · 待插入 img/01_hero.jpg",
        [
            "La empresa se llama NovaCargo Ibérica. Es un almacén internacional: recibe mercancía de Asia y prepara pedidos para clientes de España y de la Unión Europea.",
            "Tiene 8.000 metros cuadrados y estanterías de 12 metros de altura. Trabajan 60 personas y salen unos 3.000 pedidos al día.",
            "El proceso es así. El cliente compra en una página web y el pedido llega a un programa sencillo, que crea una lista de productos. El trabajador coge la lista, camina por los pasillos y busca el producto. Si está en una estantería alta, sube por una escalera. Después pone todo en un carro, va a la mesa de empaquetado, imprime la etiqueta, la pega en la caja y deja el paquete en el muelle del transportista.",
            "Los muelles 1, 2 y 3 son para Correos, que es el envío normal. Los muelles 4, 5 y 6 son para UPS, que es el envío urgente. Los muelles 7, 8 y 9 son para ASM. Si el cliente paga más, el pedido va por UPS y sale el mismo día.",
        ],
        [
            "公司叫 NovaCargo Ibérica，是一家海外仓：从亚洲收货，为西班牙和欧盟的客户备货发货。",
            "仓库 8.000 平方米，货架高 12 米。60 名员工，每天出约 3.000 单。",
            "流程是这样的：顾客在网上下单，订单进一个很简单的程序，生成一张商品清单。员工拿着清单走过通道找货，如果货在高架上，就爬梯子。然后把货放进推车，到打包台打印面单、贴单，再把包裹放到承运商的月台。",
            "1、2、3 号月台给 Correos（普通件），4、5、6 号给 UPS（加急件），7、8、9 号给 ASM。顾客加钱就走 UPS，当天发出。",
        ],
    ),
    (
        "2. El problema",
        "2. 问题",
        "«图 2» 工人爬梯取货 · 待插入 img/02_escalera.jpg",
        [
            "Este sistema tiene cuatro problemas.",
            "Primero, la salud. Subir escaleras y mover cajas de quince kilos todo el día produce lesiones de espalda y caídas. En este sector, el sobreesfuerzo es la primera causa de baja. Un trabajador camina unos doce kilómetros en un turno.",
            "Segundo, la velocidad. Una persona prepara unas ochenta cajas por hora. En el Black Friday llegan seis mil pedidos en un día y el almacén no puede con ellos: se hacen horas extra y aun así hay retrasos.",
            "Tercero, los errores. Hay productos muy parecidos y el trabajador cansado se equivoca. Un error es una devolución, un cliente enfadado y un coste doble.",
            "Cuarto, el espacio. Las estanterías altas están medio vacías, porque nadie quiere subir. La empresa paga metros cuadrados que no usa.",
        ],
        [
            "这套做法有四个问题。",
            "第一是健康。整天爬梯子、搬十五公斤的箱子，会造成腰伤和跌落。这个行业里，用力过度是第一大工伤原因。一名员工一个班次要走大约十二公里。",
            "第二是速度。一个人一小时大约备八十箱。黑五当天来六千单，仓库扛不住：只能加班，还是会延误。",
            "第三是错误。很多商品长得很像，累了的员工就会拿错。一次错就是一次退货、一个生气的客户和双倍成本。",
            "第四是空间。高架一半是空的，因为没人愿意爬上去。公司付了租金却没用上。",
        ],
    ),
    (
        "3. La propuesta de digitalización",
        "3. 数字化方案",
        "«图 3» 自动叉车取高架托盘 img/03_robot_alto.jpg ｜ «图 4» 传送带与分拣格口 img/04_cintas.jpg",
        [
            "Mi propuesta tiene tres capas.",
            "La primera son los robots. Quince robots móviles llevan estanterías enteras hasta la mesa de trabajo: es el sistema «goods to person», la mercancía va a la persona. Además, dos carretillas automáticas sacan los palés de las estanterías de doce metros. Los robots usan LiDAR y leen códigos del suelo, así que no hace falta obra.",
            "La segunda capa es el transporte y la clasificación. Una cinta lleva las cajas a un clasificador, que las manda al canal correcto: canales 1, 2 y 3 para Correos; 4, 5 y 6 para UPS; 7, 8 y 9 para ASM. Un escáner lee la etiqueta y el sistema decide solo.",
            "La tercera capa es el software: un WMS y un WCS que dan órdenes a los robots y a la cinta. Es el cerebro del almacén.",
            "¿Y las personas? Quedan cuatro puestos: preparar en la mesa, poner la etiqueta, controlar la calidad y cargar el camión. Nadie sube escaleras y nadie camina doce kilómetros.",
            "Las zonas mixtas, como mantenimiento y devoluciones, van con vallas, escáneres de seguridad y velocidad reducida.",
        ],
        [
            "我的方案分三层。",
            "第一层是机器人。十五台移动机器人（AMR）把整排货架搬到工位，就是「货到人」。另外两台自动叉车负责从十二米高架上取托盘。机器人用激光雷达、读地面二维码，不需要动土改造。",
            "第二层是输送和分拣。传送带把纸箱送到分拣机，分拣机按目的地送到对应格口：1、2、3 号给 Correos，4、5、6 号给 UPS，7、8、9 号给 ASM。扫码器读面单，系统自己判断。",
            "第三层是软件：WMS 和 WCS，给机器人和传送带下指令，是仓库的大脑。",
            "那人做什么？剩四个岗位：工位备货、贴面单、质检、装车。没人爬梯子，也没人走十二公里。",
            "混合区域（维修、退货）要加围栏、安全扫描和限速。",
        ],
    ),
    (
        "4. Del proceso tradicional al digitalizado",
        "4. 从传统流程到数字化流程",
        "«图 5» 前后对比图（自己用 PPT 画）",
        [
            "El esquema del trabajo resume el cambio.",
            "Antes: lista en papel, escaleras, carro y doce kilómetros. Ochenta cajas por hora y un 1,5 % de errores.",
            "Después: robots, cinta y canales por transportista. Ciento ochenta cajas por hora, kilómetro y medio caminando y un 0,4 % de errores.",
        ],
        [
            "报告里的示意图概括了这个变化。",
            "之前：纸质清单、梯子、推车、十二公里。每小时八十箱，错误率 1,5%。",
            "之后：机器人、传送带、按承运商分的格口。每小时一百八十箱，只走一公里半，错误率 0,4%。",
        ],
    ),
    (
        "5. El proceso de producción",
        "5. 实施流程",
        "«图 6» 贴标与质检工位 · 待插入 img/05_etiquetado.jpg",
        [
            "El proyecto se hace en cinco fases. Primero, medir: cuántos pedidos hay, qué productos y dónde están. Segundo, elegir el software y los robots. Tercero, preparar el edificio: suelo, wifi, vallas y canales. Cuarto, probar en una zona durante tres meses. Quinto, ampliar al resto.",
            "Se automatiza todo lo que es mover, clasificar y contar. Las personas siguen en calidad, excepciones, carga y mantenimiento.",
            "El coste aproximado es de setecientos mil euros. El ahorro es de un veinticinco por ciento por pedido, y el retorno llega en unos tres años.",
        ],
        [
            "项目分五步。第一，测量：有多少单、什么商品、放在哪。第二，选软件和机器人。第三，改造场地：地面、WiFi、围栏、格口。第四，在一个区域试三个月。第五，推广到全仓。",
            "凡是搬运、分拣、清点的都自动化。人留在质检、异常处理、装车和维护。",
            "投入大约七十万欧元，每单成本能降 25%，大约三年回本。",
        ],
    ),
    (
        "6. Los datos",
        "6. 数据",
        "«图 7» 控制台大屏 · 待插入 img/06_pantalla.jpg",
        [
            "El sistema genera muchos datos: tiempo por pedido, distancia recorrida, errores, paradas de cada robot, ocupación de los canales y devoluciones.",
            "Todo se guarda en la base de datos del WMS y se copia en la nube.",
            "Con esos datos se toman decisiones: poner los productos más vendidos cerca de la mesa; decidir cuántos robots trabajan en cada turno; avisar del mantenimiento antes de que un robot se pare; y abrir más canales para UPS cuando hay muchas urgencias.",
        ],
        [
            "系统产生大量数据：每单耗时、行走距离、错误数、每台机器人的停机、格口占用率、退货量。",
            "数据存在 WMS 数据库里，并备份到云端。",
            "据此做决策：把最畅销的商品放到工位附近；决定每个班次开几台机器人；在机器人停摆前提醒保养；UPS 加急多的时候多开几个格口。",
        ],
    ),
    (
        "7. El impacto de la digitalización",
        "7. 数字化带来的影响",
        None,
        [
            "Salud y trabajo: menos lesiones y menos bajas. Pero se necesitan menos preparadores y más técnicos. La empresa tiene que formar a la gente; si no, el cambio es malo para ellos.",
            "Economía: inversión alta, pero coste por pedido más bajo.",
            "Sociedad: el empleo de almacén cambia de perfil, de físico a técnico.",
            "Medio ambiente: menos cajas dañadas y menos devoluciones; los robots gastan electricidad.",
            "Seguridad: aparecen riesgos nuevos, como el mantenimiento y las zonas mixtas. Hay que actualizar la evaluación de riesgos.",
        ],
        [
            "健康与劳动：工伤和病假变少。但备货工需求下降，技术岗位增加。公司必须培训员工，否则对他们是坏事。",
            "经济：投入高，但每单成本更低。",
            "社会：仓储岗位的性质从体力型变成技术型。",
            "环境：破损和退货变少；机器人要耗电。",
            "安全：出现新风险，比如维修和混合区域。风险评估必须重做。",
        ],
    ),
    (
        "8. Conclusión",
        "8. 结论",
        None,
        [
            "La propuesta es viable si hay volumen suficiente, unos dos mil pedidos al día, y si los datos están ordenados.",
            "No hay que automatizar todo: los pedidos raros, las devoluciones y las incidencias siguen a mano, porque cambian cada día.",
            "La digitalización no quita el trabajo: cambia el tipo de trabajo. La pregunta no es si hay robots, sino si la empresa forma a su gente para trabajar con ellos.",
        ],
        [
            "只要单量够（每天约两千单）、数据是干净的，这个方案就可行。",
            "不该全部自动化：奇怪的订单、退货、异常情况仍靠人工，因为这些每天都在变。",
            "数字化不是消灭工作，而是改变工作的类型。问题不是要不要上机器人，而是公司有没有培训员工去和机器人一起工作。",
        ],
    ),
    (
        "Anexo. Normativa",
        "附录：法规",
        None,
        [
            "En España, la Ley 31/1995 de Prevención de Riesgos Laborales obliga a evaluar los riesgos y a formar a los trabajadores. Los robots y las carretillas automáticas necesitan marcado CE y la norma ISO 3691-4. Además, la empresa debe informar y consultar a los representantes de los trabajadores antes de cambiar el sistema de trabajo.",
        ],
        [
            "在西班牙，《职业风险预防法》Ley 31/1995 要求企业评估风险并培训员工。机器人和自动叉车需要 CE 认证和 ISO 3691-4 标准。此外，改变工作方式前必须告知并咨询员工代表。",
        ],
    ),
]


def words_of(parrafos):
    return sum(len(p.split()) for p in parrafos)


import os

FIGS = {
    1: [("1.jpg",
         "图 1 · 仓库全景：AMR 把整排货架搬到工位，通道上只剩少量人员",
         "Fig. 1: almacén con robots AMR que llevan las estanterías hasta el puesto de trabajo")],
    2: [("2.jpg",
         "图 2 · 现状：工人爬梯到高架取货，这是腰伤和跌落的主要来源",
         "Fig. 2: un trabajador sube por una escalera para coger una caja del nivel alto")],
    3: [("3.jpg",
         "图 3 · 自动叉车从 12 米高架取下托盘，替代人工登高作业",
         "Fig. 3: una carretilla automática baja un palé de una estantería de 12 metros"),
        ("4.jpg",
         "图 4 · 传送带与分拣滑槽：1-3 号给 Correos，4-6 号给 UPS，7-9 号给 ASM",
         "Fig. 4: cinta y canales de clasificación (1-3 Correos, 4-6 UPS, 7-9 ASM)")],
    5: [("5.jpg",
         "图 5 · 留下来的工作：贴面单、扫码复核，需要判断力而不是体力",
         "Fig. 5: el trabajo que se queda en manos de las personas: etiquetar y verificar")],
    6: [("6.jpg",
         "图 6 · 控制台：WMS 与 WCS 的实时数据，用来做排班和维护决策",
         "Fig. 6: panel de control con los datos del WMS y del WCS")],
}

ANTES_DESPUES = [
    ("Situación", "Antes", "Después"),
    ("清单", "Papel y memoria del trabajador", "WMS + WCS, orden automática"),
    ("Coger el producto", "Andando, con escalera", "AMR y carretilla automática"),
    ("Recorrido por turno", "12 km", "1,5 km"),
    ("Velocidad", "80 cajas por hora", "180 cajas por hora"),
    ("Errores", "1,5 %", "0,4 %"),
]


def add_figure(doc, filename, cap_zh, cap_es, bilingual):
    ruta = os.path.join(IMG, filename)
    if not os.path.isfile(ruta):
        add_text(doc, "[Falta la imagen %s]" % filename, size=9, italic=True,
                 color=(0xB0, 0x6A, 0x00), space_after=6)
        return
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.keep_with_next = True
    run = p.add_run()
    ancho = Cm(9.5) if filename == "3.jpg" else Cm(15.5)
    run.add_picture(ruta, width=ancho)
    add_text(doc, cap_es, size=8.5, italic=True, color=(0x66, 0x66, 0x66),
             space_after=2, align=WD_ALIGN_PARAGRAPH.CENTER)
    if bilingual:
        add_text(doc, cap_zh, size=8.5, italic=True, color=(0x88, 0x88, 0x88),
                 space_after=10, align=WD_ALIGN_PARAGRAPH.CENTER)
    else:
        doc.paragraphs[-1].paragraph_format.space_after = Pt(10)


def add_tabla(doc, bilingual):
    tabla = doc.add_table(rows=len(ANTES_DESPUES), cols=3)
    try:
        tabla.style = "Light Grid Accent 1"
    except KeyError:
        tabla.style = "Table Grid"
    tabla.alignment = 1
    for i, fila in enumerate(ANTES_DESPUES):
        for j, valor in enumerate(fila):
            celda = tabla.cell(i, j)
            celda.text = ""
            par = celda.paragraphs[0]
            run = par.add_run(valor)
            run.font.size = Pt(9.5)
            run.bold = (i == 0) or (j == 0)
            set_east_asian(run)
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_before = Pt(4)
    p.paragraph_format.space_after = Pt(10)
    r = p.add_run("Tabla 1: el proceso antes y después de la digitalización")
    r.font.size = Pt(8.5)
    r.italic = True
    r.font.color.rgb = RGBColor(0x66, 0x66, 0x66)
    set_east_asian(r)


def fmt_time(seconds):
    m, s = divmod(int(round(seconds / 5.0) * 5), 60)
    return "%d:%02d" % (m, s)


def set_east_asian(run):
    rpr = run._element.get_or_add_rPr()
    rfonts = rpr.find(qn("w:rFonts"))
    if rfonts is None:
        rfonts = rpr.makeelement(qn("w:rFonts"), {})
        rpr.append(rfonts)
    rfonts.set(qn("w:eastAsia"), "Microsoft YaHei")


def base_font(doc):
    style = doc.styles["Normal"]
    style.font.name = "Calibri"
    style.font.size = Pt(11)
    rpr = style.element.get_or_add_rPr()
    rfonts = rpr.find(qn("w:rFonts"))
    if rfonts is None:
        rfonts = rpr.makeelement(qn("w:rFonts"), {})
        rpr.append(rfonts)
    rfonts.set(qn("w:ascii"), "Calibri")
    rfonts.set(qn("w:hAnsi"), "Calibri")
    rfonts.set(qn("w:eastAsia"), "Microsoft YaHei")


def page_setup(doc):
    sec = doc.sections[0]
    sec.page_width = Cm(21)
    sec.page_height = Cm(29.7)
    sec.left_margin = Cm(2.4)
    sec.right_margin = Cm(2.4)
    sec.top_margin = Cm(2.2)
    sec.bottom_margin = Cm(2.2)


def add_text(doc, text, size=11, bold=False, italic=False, color=None,
             space_before=0, space_after=6, align=None):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.line_spacing = 1.15
    if align is not None:
        p.alignment = align
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.bold = bold
    r.italic = italic
    if color is not None:
        r.font.color.rgb = RGBColor(*color)
    set_east_asian(r)
    return p


def add_heading(doc, text, size=14, color=(0x1F, 0x38, 0x64), space_before=14, space_after=6):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.keep_with_next = True
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.bold = True
    r.font.color.rgb = RGBColor(*color)
    r.font.name = "Calibri"
    set_east_asian(r)
    return p


def build_bilingue():
    doc = Document()
    base_font(doc)
    page_setup(doc)

    total = sum(words_of(b[3]) for b in BLOQUES)
    minutos = total / float(PALABRAS_POR_MINUTO)

    add_text(doc, "TRABAJO DE DIGITALIZACIÓN · UNIDAD 1", size=9, color=(0x8A, 0x8A, 0x8A),
             space_after=10, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_text(doc, TITULO_ES, size=17, bold=True, color=(0x1F, 0x38, 0x64),
             space_after=2, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_text(doc, TITULO_ZH, size=13, bold=True, color=(0x1F, 0x38, 0x64),
             space_after=10, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_text(doc, AUTOR, size=11, space_after=2, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_text(doc, "%d palabras en español · unos %d minutos a %d palabras por minuto"
             % (total, int(round(minutos)), PALABRAS_POR_MINUTO),
             size=9, italic=True, color=(0x66, 0x66, 0x66),
             space_after=16, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_text(doc, "Español arriba, chino abajo. Los minutos de cada parte son orientativos.",
             size=9, italic=True, color=(0x66, 0x66, 0x66), space_after=4)

    for idx, (titulo_es, titulo_zh, fig, es, zh) in enumerate(BLOQUES):
        tiempo = fmt_time(words_of(es) * 60.0 / PALABRAS_POR_MINUTO)
        add_heading(doc, "%s  ·  %s" % (titulo_es, titulo_zh))
        add_text(doc, "Duración: %s" % tiempo, size=9, italic=True,
                 color=(0x99, 0x99, 0x99), space_after=8)
        for p in es:
            add_text(doc, p, size=11, space_after=6)
        for p in zh:
            add_text(doc, p, size=10, italic=True, color=(0x55, 0x55, 0x55),
                     space_after=4)
        if idx in FIGS:
            for nombre, cap_zh, cap_es in FIGS[idx]:
                add_figure(doc, nombre, cap_zh, cap_es, True)
        if idx == 4:
            add_tabla(doc, True)

    doc.core_properties.title = TITULO_ES
    doc.save(OUT_BILINGUE)
    return total


def build_espanol():
    doc = Document()
    base_font(doc)
    page_setup(doc)

    add_text(doc, "TRABAJO DE DIGITALIZACIÓN · UNIDAD 1", size=10, color=(0x8A, 0x8A, 0x8A),
             space_after=14, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_text(doc, TITULO_ES, size=18, bold=True, color=(0x1F, 0x38, 0x64),
             space_after=12, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_text(doc, "Autor: " + AUTOR, size=11, space_after=24,
             align=WD_ALIGN_PARAGRAPH.CENTER)

    for idx, (titulo_es, _zh, fig, es, _es_zh) in enumerate(BLOQUES):
        add_heading(doc, titulo_es)
        for p in es:
            add_text(doc, p, size=11, space_after=8)
        if idx in FIGS:
            for nombre, cap_zh, cap_es in FIGS[idx]:
                add_figure(doc, nombre, cap_zh, cap_es, False)
        if idx == 4:
            add_tabla(doc, False)

    doc.core_properties.title = TITULO_ES
    doc.save(OUT_ESPANOL)


if __name__ == "__main__":
    total = build_bilingue()
    build_espanol()
    print("OK", total, "palabras,", round(total / float(PALABRAS_POR_MINUTO), 1), "minutos")
