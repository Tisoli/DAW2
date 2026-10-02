# Visión General
# 总览

## Tipos de almacenamiento
## 存储类型

* **A nivel de bloque**
* **块级存储**
  * Unidades de disco duro o de estado sólido
  * 硬盘驱动器或固态驱动器
  * Divididos en bloques
  * 划分为块
  * **EBS**
    * **SSD General Purpose**
    * **通用型 SSD**
      * **gp2** $\rightarrow$ Uso general / de bajo coste
      * **gp2** $\rightarrow$ 通用 / 低成本
      * **gp3** $\rightarrow$ Proporciona un rendimiento uniforme a un coste más bajo
      * **gp3** $\rightarrow$ 以更低的成本提供一致的性能
    * **SSD IOPS**
      * **io1/io2** $\rightarrow$ Diseñado para cargas de trabajo de IOPS elevadas con latencia baja
      * **io1/io2** $\rightarrow$ 专为低延迟的高 IOPS 工作负载而设计
      * **io2 Block Express** $\rightarrow$ Rendimiento más alto y la menor latencia de AWS
      * **io2 Block Express** $\rightarrow$ AWS 中最高的性能和最低的延迟
    * **HDD st1** $\rightarrow$ Diseñado para cargas de trabajo secuenciales y de gran rendimiento como Big Data, análisis de registros, etc.
    * **HDD st1** $\rightarrow$ 专为高吞吐量的顺序工作负载而设计，如大数据、日志分析等
    * **HDD sc1** $\rightarrow$ Diseñado para cargas de trabajo secuenciales pero de menor rendimiento
    * **HDD sc1** $\rightarrow$ 专为顺序工作负载设计，但性能较低
      * Rendimiento constante a bajo coste
      * 低成本下的稳定性能
      * Es el más barato
      * 是最便宜的

* **A nivel de archivo**
* **文件级存储**
  * Almacena datos como un solo elemento de información dentro de una carpeta
  * 将数据作为文件夹内的单个信息项进行存储
  * **AWS EFS**
    * Basado en Linux
    * 基于 Linux
    * Compartido
    * 可共享
    * Escalable
    * 可扩展
    * Configurable
    * 可配置
    * Integración con servicios de AWS
    * 与 AWS 服务集成
  * **AWS FSx**
    * **Windows File Server** $\rightarrow$ Basado en Windows
    * **Windows File Server** $\rightarrow$ 基于 Windows
    * **Lustre** $\rightarrow$ Cargas de trabajo que procesan y generan gran cantidad de datos
    * **Lustre** $\rightarrow$ 处理并生成大量数据的工作负载
    * **ONTAP**
    * **OpenZFS**

* **A nivel de objeto**
* **对象级存储**
  * Almacena datos como objetos estructurados
  * 将数据作为结构化对象进行存储
  * Los objetos contienen los datos, metadatos y un identificador único
  * 对象包含数据、元数据和一个唯一标识符
  * Almacenamiento ilimitado
  * 无限存储
  * Acceso global
  * 全局访问
  * **S3**
    * **Tipos de almacenamiento**
    * **存储类型**
      * **Standard** $\rightarrow$ Acceso frecuente
      * **Standard** $\rightarrow$ 频繁访问
      * **Standard - IA** $\rightarrow$ Acceso infrecuente
      * **Standard - IA** $\rightarrow$ 不频繁访问
      * **One Zone - IA** $\rightarrow$ Acceso infrecuente en una sola zona
      * **One Zone - IA** $\rightarrow$ 单个区域内的不频繁访问
      * **Glacier**
        * **Glacier Instant Retrieval** $\rightarrow$ Acceso de milisegundos a datos no frecuentemente consultados
        * **Glacier Instant Retrieval** $\rightarrow$ 对不常查询的数据进行毫秒级访问
        * **Glacier Flexible Retrieval** $\rightarrow$ Acceso desde minutos a horas para datos de archivo
        * **Glacier Flexible Retrieval** $\rightarrow$ 对归档数据进行从几分钟到几小时的访问
        * **Glacier Deep Archive** $\rightarrow$ Archivo digital de muy bajo coste a largo plazo
        * **Glacier Deep Archive** $\rightarrow$ 长期、极低成本的数字归档
      * **Intelligent-Tiering** $\rightarrow$ Optimización automática de costes
      * **Intelligent-Tiering** $\rightarrow$ 自动优化成本
    * **Servicios**
    * **服务**
      * **S3 Standard** $\rightarrow$ Acceso frecuente a datos
      * **S3 Standard** $\rightarrow$ 频繁访问数据
      * **S3 Standard-IA (Infrequent Access)** $\rightarrow$ Para datos accedidos con menor frecuencia pero que requieren acceso instantáneo
      * **S3 Standard-IA（不频繁访问）** $\rightarrow$ 用于访问频率较低但需要即时访问的数据
      * **S3 One Zone-IA** $\rightarrow$ Para datos de bajo coste y menor rendimiento no tan críticos
      * **S3 One Zone-IA** $\rightarrow$ 用于成本较低、性能较低且不那么关键的数据
      * **S3 Glacier Instant Retrieval** $\rightarrow$ Archivo con acceso instantáneo
      * **S3 Glacier Instant Retrieval** $\rightarrow$ 具有即时访问能力的归档
      * **S3 Glacier Flexible Retrieval** $\rightarrow$ Archivo con flexibilidad de acceso
      * **S3 Glacier Flexible Retrieval** $\rightarrow$ 具有访问灵活性的归档
      * **S3 Glacier Deep Archive** $\rightarrow$ Archivo de coste muy bajo
      * **S3 Glacier Deep Archive** $\rightarrow$ 极低成本的归档
      * **S3 Intelligent-Tiering** $\rightarrow$ Optimización automática de costes
      * **S3 Intelligent-Tiering** $\rightarrow$ 自动优化成本
      * **S3 Express One Zone** $\rightarrow$ Almacenamiento de menor latencia y más alto rendimiento
      * **S3 Express One Zone** $\rightarrow$ 最低延迟、最高性能的存储
    * **Protocolo S3 API / AWS SDK / Consola de AWS / CLI** $\rightarrow$ Formas de acceso
    * **S3 API 协议 / AWS SDK / AWS 控制台 / CLI** $\rightarrow$ 访问方式
      * Consola
      * 控制台
      * CLI
      * SDK
      * REST API
    * **Es el único servicio que puede interactuar con el resto de servicios** $\rightarrow$ Almacenamiento principal de AWS
    * **它是唯一能与其余服务交互的服务** $\rightarrow$ AWS 的主要存储
    * **Características**
    * **特性**
      * Almacenamiento por objetos
      * 对象存储
      * Redundancia en 3 zonas de disponibilidad (AZ)
      * 在 3 个可用区（AZ）中具备冗余
      * **Es el servicio con más flexibilidad de acceso de AWS** $\rightarrow$ Varios métodos de autenticación
      * **是 AWS 中访问灵活性最高的服务** $\rightarrow$ 多种身份验证方式
      * Se puede configurar políticas de ciclo de vida para automatizar el movimiento de datos
      * 可以配置生命周期策略以自动化数据迁移
      * Incluye funciones como el control de versiones y el bloqueo de objetos para evitar eliminaciones involuntarias
      * 包含版本控制和对象锁定等功能，以防止意外删除
      * Se pueden crear políticas de ciclo de vida para automatizar el movimiento de objetos entre diferentes tipos de almacenamiento para optimizar costes
      * 可以创建生命周期策略，自动在不同存储类型之间移动对象以优化成本
      * Puede integrarse con KMS para cifrado de datos en reposo y en tránsito
      * 可与 KMS 集成，对静态和传输中的数据进行加密
      * **Proporciona gran integración con otros servicios de AWS** $\rightarrow$ Es muy útil como almacenamiento central de arquitectura en la nube
      * **与其他 AWS 服务具有高度集成** $\rightarrow$ 作为云架构的中央存储非常有用
      * **Categorías**
      * **类别**
        * **Standard/Frequent Access** $\rightarrow$ Todos los datos en S3 son de acceso frecuente de inicio
        * **Standard/Frequent Access（标准/频繁访问）** $\rightarrow$ S3 中所有数据初始均为频繁访问
        * **Infrequent Access** $\rightarrow$ Acceso con menor frecuencia, costes más bajos pero tarifas adicionales por recuperación
        * **Infrequent Access（不频繁访问）** $\rightarrow$ 访问频率较低，成本更低，但有额外的检索费用
        * **Archive Access** $\rightarrow$ No hay acceso inmediato pero costes de almacenamiento mínimos
        * **Archive Access（归档访问）** $\rightarrow$ 没有即时访问，但存储成本极低
        * **Intelligent-Tiering** $\rightarrow$ Monitorea el patrón de uso y mueve automáticamente objetos entre niveles para ahorrar costes
        * **Intelligent-Tiering（智能分层）** $\rightarrow$ 监控使用模式，自动在层级之间移动对象以节省成本
    * **Propiedades de S3**
    * **S3 的属性**
      * Todo archivo tiene que ir dentro de un bucket
      * 每个文件都必须放在一个存储桶（bucket）内
      * Identificador único a nivel global
      * 全局唯一的标识符
      * **El tamaño máximo de archivo es 5 TB**
      * **文件最大为 5 TB**
    * **Categorías**
    * **类别**
      * Todos los datos son de acceso frecuente
      * 所有数据均为频繁访问
      * Acceso menos frecuente
      * 访问频率较低
      * Almacenamiento no crítico de menor coste
      * 低成本的非关键存储
      * Archivo de bajo coste
      * 低成本归档
      * Archivo de muy bajo coste
      * 极低成本归档
      * Mueve objetos automáticamente entre capas
      * 自动在层级之间移动对象
      * Máxima velocidad de acceso
      * 最高访问速度

* **Diferencia entre los datos** $\rightarrow$ Estructurados / No estructurados / Semi-estructurados
* **数据之间的区别** $\rightarrow$ 结构化 / 非结构化 / 半结构化

* **Servicios para la migración**
* **迁移服务**
  * **Datasync** $\rightarrow$ Servicio de transferencia de datos para automatizar la migración entre almacenamiento local y AWS
  * **Datasync** $\rightarrow$ 数据转移服务，用于自动化本地存储与 AWS 之间的迁移
  * **Snow Family**
  * **Snow 系列**
    * **Snowcone** $\rightarrow$ Dispositivo pequeño, portátil y resistente
    * **Snowcone** $\rightarrow$ 小巧、便携且坚固的设备
    * **Snowball** $\rightarrow$ Migración masiva de datos en petabytes
    * **Snowball** $\rightarrow$ PB 级的大规模数据迁移
    * **Snowmobile** $\rightarrow$ Transporte de datos a escala de exabytes mediante un camión seguro
    * **Snowmobile** $\rightarrow$ 通过安全卡车进行 EB 级的数据传输

* **Servicios de Backup y copia**
* **备份与复制服务**
  * **AWS Backup** $\rightarrow$ Servicio gestionado para centralizar y automatizar las copias de seguridad entre los servicios de AWS
  * **AWS Backup** $\rightarrow$ 用于集中并自动化 AWS 各服务备份的托管服务
  * **EBS Snapshots** $\rightarrow$ Copia de seguridad puntual de volúmenes EBS en S3
  * **EBS Snapshots（快照）** $\rightarrow$ 将 EBS 卷的时间点备份保存到 S3
  * **S3 Replication** $\rightarrow$ Copia automática de objetos en el mismo o diferentes regiones
  * **S3 Replication（复制）** $\rightarrow$ 在同一区域或不同区域自动复制对象

---

## Administración
## 管理

### Interacción
### 交互方式

* **Consola de AWS** $\rightarrow$ Interfaz web de AWS
* **AWS 控制台** $\rightarrow$ AWS 的 Web 界面
* **AWS CLI** $\rightarrow$ Interfaz de línea de comandos de AWS
* **AWS CLI** $\rightarrow$ AWS 的命令行界面
* **SDK de AWS** $\rightarrow$ Paquete de integración de interacción de línea de comandos de AWS en el sistema
* **AWS SDK** $\rightarrow$ 在系统中进行 AWS 命令行交互的集成包
* **API REST** $\rightarrow$ Interacción mediante llamadas a API de AWS
* **REST API** $\rightarrow$ 通过调用 AWS API 进行交互

### Tipos
### 类型

* **Self-managed**
* **自管理**
  * Autogestionado
  * 自管理
  * El usuario es responsable de la administración, configuración, escalado y mantenimiento de los servidores y el sistema operativo
  * 用户负责服务器和操作系统的管理、配置、扩展和维护
  * Mayor control y personalización de la infraestructura
  * 对基础设施有更大的控制权和自定义能力
    * **Usuario puede escoger**: CPU, memoria, políticas de red, IAM, lanzamiento, sistema operativo, parches y actualizaciones
    * **用户可选择**：CPU、内存、网络策略、IAM、启动、操作系统、补丁和更新
    * **Proveedor gestiona**: Infraestructura física
    * **供应商管理**：物理基础设施
  * Requiere aprovisionamiento y configuración por parte del usuario $\rightarrow$ Tiempo de espera para usar
  * 需要用户进行调配和配置 $\rightarrow$ 需要等待时间才能使用

* **Fully managed**
* **完全托管**
  * Completamente gestionado
  * 完全托管
  * El proveedor se encarga de la gestión del sistema operativo y hardware subyacente
  * 由供应商负责操作系统和底层硬件的管理
  * Control y personalización media de la infraestructura
  * 对基础设施具有中等程度的控制和自定义能力
    * **Usuario puede escoger**: Necesidades de CPU, memoria, políticas de red, IAM y lanzamiento
    * **用户可选择**：CPU、内存、网络策略、IAM 和启动需求
    * **Proveedor gestiona**: Infraestructura, sistema operativo, parches y actualizaciones
    * **供应商管理**：基础设施、操作系统、补丁和更新
  * Requiere aprovisionamiento, configurado por el proveedor $\rightarrow$ Tiempo menor de espera para usar
  * 需要调配，由供应商配置 $\rightarrow$ 等待使用的时间较短

* **Serverless**
* **无服务器**
  * Sin servidor
  * 无服务器
  * No se necesita aprovisionar, configurar ni administrar
  * 无需调配、配置或管理
  * El proveedor se encarga, configura y administra el servicio
  * 由供应商负责、配置和管理该服务
  * Ningún control ni personalización de la infraestructura
  * 对基础设施没有任何控制或自定义能力
    * **Usuario puede configurar**: Políticas de red, IAM y lanzamiento
    * **用户可配置**：网络策略、IAM 和启动
    * **Proveedor gestiona**: Toda infraestructura, CPU, memoria, sistema operativo, parches y actualizaciones
    * **供应商管理**：全部基础设施、CPU、内存、操作系统、补丁和更新
  * Aprovisionado y configurado $\rightarrow$ Listo para usar
  * 已完成调配和配置 $\rightarrow$ 开箱即用
