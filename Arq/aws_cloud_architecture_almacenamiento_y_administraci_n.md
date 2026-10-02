# AWS Cloud Architecture - Notas y Resumen

---

## 1. Administración

### 1.1 Interacción
- **Consola de AWS**: Interfaz web de AWS.
- **AWS CLI**: Interfaz de línea de comandos de AWS.
- **SDK de AWS**: Paquete de integración de interacción de línea de comandos de AWS en el sistema.
- **API REST**: Interacción mediante llamadas a API de AWS.

### 1.2 Tipos de Gestión

#### Self-managed (Autogestionado)
- **Definición**: El usuario es responsable de la administración, configuración, escalado y mantenimiento de los servidores y el sistema operativo.
- **Control**: Mayor control y personalización de la infraestructura.
  - **Usuario puede escoger**: CPU, memoria, políticas de red, IAM, lanzamiento, sistema operativo, parches y actualizaciones.
  - **Proveedor gestiona**: Infraestructura física.
- **Aprovisionamiento**: Requiere aprovisionamiento y configuración por parte del usuario.
- **Tiempo de despliegue**: Mayor tiempo de espera para usar.

#### Fully managed (Completamente gestionado)
- **Definición**: El proveedor se encarga de la gestión del sistema operativo y hardware subyacente.
- **Control**: Control y personalización media de la infraestructura.
  - **Usuario puede escoger**: Necesidades de CPU, memoria, políticas de red, IAM y lanzamiento.
  - **Proveedor gestiona**: Infraestructura, sistema operativo, parches y actualizaciones.
- **Aprovisionamiento**: Requiere aprovisionamiento, configurado por el proveedor.
- **Tiempo de despliegue**: Tiempo menor de espera para usar.

#### Serverless (Sin servidor)
- **Definición**: No se necesita aprovisionar, configurar ni administrar. El proveedor se encarga, configura y administra el servicio.
- **Control**: Ningún control ni personalización de la infraestructura.
  - **Usuario puede configurar**: Políticas de red, IAM y lanzamiento.
  - **Proveedor gestiona**: Toda infraestructura, CPU, memoria, sistema operativo, parches y actualizaciones.
- **Aprovisionamiento**: Aprovisionado y configurado $\rightarrow$ **Listo para usar**.

---

## 2. Almacenamiento

### 2.1 Tipos de Almacenamiento

#### A. Almacenamiento por Bloque (Block Storage)
*Ejemplo: Amazon EBS*

- **Características**:
  - Unidades de disco rígido (HDD) o de estado sólido (SSD).
  - Divididos en bloques.
- **Tipos de Volúmenes**:
  - **SSD General Purpose (gp2 / gp3)**: Para cargas de trabajo equilibradas.
  - **SSD Provisioned IOPS (io1 / io2)**:
    - **io1 / io2**: Rendimiento sostenido y baja latencia para bases de datos críticas.
    - **io2 Block Express**: Rendimiento ultra alto.
  - **HDD Throughput Optimized (st1)**: Para almacenamiento frecuente y grandes volúmenes de datos.
  - **HDD Cold (sc1)**: Económico para datos de acceso poco frecuente.

#### B. Almacenamiento por Archivos (File Storage)
*Ejemplos: Amazon EFS, FSx*

- **Amazon EFS (Elastic File System)**:
  - Sistema de archivos NFS totalmente gestionado.
  - Escalable y compartido entre múltiples instancias EC2.
- **Amazon FSx**:
  - **FSx for Windows File Server**: Sistema de archivos nativo de Windows (SMB).
  - **FSx for Lustre**: Para computación de alto rendimiento (HPC) y aprendizaje automático.

#### C. Almacenamiento por Objetos (Object Storage)
*Ejemplo: Amazon S3*

- **Conceptos Clave**:
  - **Buckets**: Contenedores para objetos.
  - **Objetos**: Archivos y sus metadatos asociados.
- **Clases de Almacenamiento en S3**:
  - **S3 Standard**: Para datos de acceso frecuente con alta disponibilidad y durabilidad.
  - **S3 Intelligent-Tiering**: Optimización automática de costes moviendo objetos entre capas según patrones de acceso.
  - **S3 Standard-IA (Infrequent Access)**: Para datos de acceso menos frecuente pero que requieren acceso instantáneo.
  - **S3 One Zone-IA**: Almacenamiento de menor coste para datos no críticos accedidos con poca frecuencia en una sola AZ.
  - **S3 Glacier Flexible Retrieval**: Archivo de datos a bajo coste con tiempos de recuperación desde minutos hasta horas.
  - **S3 Glacier Deep Archive**: El almacenamiento de más bajo coste para retención a largo plazo (recuperación en 12 horas).

---

## 3. Estrategias de Migración y Backup

- **AWS Backup**: Servicio centralizado para automatizar y gestionar copias de seguridad en todos los servicios de AWS.
- **AWS DataSync**: Servicio de transferencia de datos en línea para simplificar y acelerar la migración de datos.
- **Familia AWS Snow**:
  - **Snowcone**: Dispositivo portátil para transferencia de datos en entornos perimetrales.
  - **Snowball**: Transferencia masiva de datos a nivel de Terabytes/Petabytes mediante dispositivos seguros.
  - **Snowmobile**: Transferencia a escala de Exabytes en un contenedor de transporte seguro.