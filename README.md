# API Estudiantes SQA
# Primero el repositorio en Git
# Validación con SSh para no estar ingresando constraseña para pushear 

# Crear la rama de desarrollo en la rama principal (main) git checkout main

# Explicación de cada carpeta y archivo
# src/: Contiene el código fuente de la API.

# controllers/: Aquí estarán los controladores, que contienen la lógica para manejar las solicitudes HTTP.
# models/: Aquí defines los modelos de datos, que corresponden a las entidades de la API (por ejemplo, "Estudiante").
# routes/: Aquí configuro las rutas que la API usará para procesar las solicitudes.
# app.js: Es el archivo principal donde configuro el servidor y define los middlewares.
# tests/: Esta carpeta contendrá las pruebas automatizadas.

# api.test.js: Archivo donde se definen las pruebas para la API. Se puede organizar más archivos según crezca la API.
# config/: Aquí se pueden colocar la configuraciones, como la conexión a la base de datos.

# database.js: Archivo de configuración de la base de datos (se puede usar un servicio como MongoDB o MySQL según preferencias).
# .gitignore: Archivo para indicar qué archivos o carpetas no deberían subirse a Git (como node_modules).

# package.json: Archivo de configuración del proyecto Node.js, donde se especifican dependencias y scripts. Se genera al iniciar el proyecto con npm init.

# README.md: Archivo para documentar del proyecto.

# comando npm init -y para crear el archivo package.json automáticamente.

# instalación node.js
# installs fnm (Fast Node Manager)
# winget install Schniz.fnm

# configure fnm environment
# fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
# fnm use --install-if-missing 22

# verifies the right Node.js version is in the environment
# node -v # should print `v22.11.0`

# verifies the right npm version is in the environment
# npm -v # should print `10.9.0`

# Crear las carpetas
mkdir src src/controllers src/models src/routes tests config

# Crear archivos vacíos
# New-Item -Path "src/app.js" -ItemType File
# New-Item -Path "tests/api.test.js" -ItemType File
# New-Item -Path "config/database.js" -ItemType File
# New-Item -Path ".gitignore" -ItemType File
# New-Item -Path "README.md" -ItemType File

# npm init -y
# Este comando creará un archivo package.json con los valores predeterminados.

# Dependencias necesarias 
# Body-parser: Para procesar datos de solicitudes POST (si no usas una versión de Express que lo incluya por defecto).
# dotenv: Para manejar variables de entorno como configuraciones de la base de datos, puerto, etc.
# Nodemon: Para reiniciar el servidor automáticamente durante el desarrollo.

#  iniciar el servidor en desarrollo con:
# npm run dev

# sonar-project.properties
# sonar.projectKey: El identificador único para tu proyecto (puedes usar cualquier nombre).
# sonar.projectName: El nombre de tu proyecto.
# sonar.projectVersion: La versión de tu proyecto (puede ser 1.0 si es la primera versión).
# sonar.sources: La ruta a los archivos fuente que SonarQube debe analizar (en este caso src).
# sonar.host.url: La URL de tu servidor SonarQube (si lo ejecutas localmente, es http://localhost:9000).
# sonar.login: El token de autenticación generado en la interfaz de SonarQube.

# Jenkins y SonarQube son herramientas que se pueden integrar para: 
# Garantizar que cada incremento de código se integre, pruebe e implemente 
 # Evaluar la calidad del código fuente en desarrollo 
 # Triggerar el análisis de SonarQube desde Jenkins 
