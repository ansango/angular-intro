# PEC4_Ej2_respuestas_teoria

1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado vinoteca? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto). Explica brevemente la estructura y ficheros que ha generado Angular CLI:

   - Ficheros de configuración en la raíz del proyecto:

     - .browserslistrc: archivo de configuración de Browserlist para configurar las versiones de los navegadores compatibles.
     - .editorconfig: ayuda a mantener estilos de codificación para múltiples desarrolladores que trabajan en el mismo proyecto a través de varios IDES.
     - .gitignore: archivo de configuración de git para evitar que rastree determinados archivos y directorios.
     - angular.json: proporciona una configuración por defecto de la configuración de todo el espacio de trabajo y de proyectos específicos para las herramientas de construcción y desarrollo proporcionadas por Angular CLI.
     - karma.conf.js: archivo de configuración de Karma (nos proporciona entorno de testing, selección de framework de testing en js, etc...).
     - package-lock.json: package-lock.json sencillamente evita este comportamiento general de actualizar versiones minor o fix de modo que cuando alguien clona nuestro repositorio y ejecuta npm install en su equipo, npm examinará package-lock.json e instalará la versión exacta de los paquete que nosotros habíamos instalado, ignorando así los ^ y ~ de package.json.
     - package.json: package.json es un fichero que contiene información acerca de tu proyecto (nombre, versión, etc) además de listar los paquetes de los que depende.
     - README.md: archivo de documentación con instrucciones para ejecutar el proyecto, escrito en lenguaje markdown.
     - tsconfing.app.json: archivo de configuración adicional de Typescript que permite ajustar la configuración en base a la aplicación, es útil cuando tenemos múltiples aplicaciones en el mismo espacio de trabajo.
     - tsconfig.json: es el que indica en un proyecto que se está trabajando con Typescript, especifica los archivos raíz y las opciones del compilador necesarias para compilar el proyecto.
     - tsconfig.spec.json: es el archivo de configuración para los test de Typescript de la aplicación.
     - tslint.json: Es una herramienta de tipo Linter para Typescript que se encarga de vigilar como escribimos nuestro código, en base a las reglas que hemos especificado.

   - Directorio node_modules

   - Directorio e2e

   - Directorio src:

     - index.html
     - main.ts
     - styles.css
     - test.ts
     - polyfills.ts
     - Directorio environments
     - Directorio assets
     - Directorio app
       - Ficheros app.component.\*
       - Fichero app.module.ts

2. Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:

   - app.module.ts - @NgModule (declarations, imports, providers, bootstrap).
   - app.component.ts - @Component (selector, templateUrl, styleUrls).

3. ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?
