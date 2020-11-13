#PEC4_Ej1_respuestas_teoria

## A continuación, crea un documento de texto PEC4_Ej1_respuestas_teoria y explica qué realiza cada una de las siguientes opciones de Angular CLI.

- ng new: Crea e inicializa una nueva aplicación Angular que es el proyecto por defecto para un nuevo espacio de trabajo.
- ng generate: Genera y/o modifica archivos basados en un esquema.
  - component: Crea una nueva definición de componente genérico en el proyecto dado o por defecto.
  - directive: Crea una nueva definición de directiva genérica en el proyecto dado o por defecto.
  - enum: Genera una nueva definición de enumeración genérica para el proyecto dado o por defecto.
  - guard: Genera una nueva definición genérica de guardia de ruta en el proyecto dado o por defecto.
  - interface: Crea una nueva definición de interfaz genérica en el proyecto dado o por defecto.
  - pipe: Crea una nueva definición genérica de pipe en el proyecto dado o por defecto.
  - service: Crea una nueva definición de servicio genérica en el proyecto dado o por defecto.
- ng serve: Construye y sirve tu aplicación, reconstruyendo sobre los cambios de los archivos.
- ng test: Ejecuta los test unitarios en un proyecto.
- ng version: Muestra por consola la versión de Angular Cli.

## Component: 
#### Un componente en Angular es un elemento que está compuesto por:

- Un archivo que será nuestro Template (app.component.html).
- Un archivo de lógica, la cual es la que pondremos en un archivo .ts (como por ejemplo app.component.ts).
- Un archivo para el CSS, donde incluiremos los estilos.
- Una aplicación en Angular esta compuesta por varios componentes.
- ng generate component <name> [options]

## Directive: 
#### Son básicamente funciones que son invocadas cuando el DOM (Document Object Model) es compilado por el framework de Angular. 

- Están ligadas a sus correspondientes elementos del DOM cuando el documento es cargado.  
- La finalidad es modificar o crear un comportamiento totalmente nuevo.
- Se dividen en tres tipos:
  
  - Directivas de Atributo: Alteran la apariencia o comportamiento de un elemento del DOM y son usados como atributos de los elementos:
    - ngModel: Implementa binding
    - ngClass: permite añadir/eliminar varias clases
    - ngStyle: permite asignar estilos inline
  
  - Directivas de estructurales: Alteran la estructura del DOM, agregando, eliminando y manipulando los elementos host a los que están unidos:
    - *ngIf: Nos permite incluir condicionales de lógica en nuestro código, como por ejemplo evaluar sentencias.
    - *ngFor: Permite ejecutar bucles.
    - ngSwitch: esta directiva es similar al *ngIf, y es como el switch en lógica de programación.
    - ngPlural: es una directiva que permite agregar o remover elementos del DOM, basado en un valor númerico.
    - ngTemplate:esta directiva es un template en Angular. El contenido de esta etiqueta puede reutilizarse en otros templates. Dentro de la etiqueta ng-template tenemos acceso a las mismas variables de contexto que son visibles en el template exterior.
    - ngComponentOutlet: nos permite crear componentes dinámicos.
  - Componentes: Las Directivas de Componente son directivas con un Template. Los componentes tienen decoradores “@Component”, el componente es un decorador @Directive que es extendido con características propias de los templates.

## Enum: 
#### Los enums permiten a un desarrollador definir un conjunto de constantes con nombre.

## Guard: 
#### Hay veces que queremos que determinadas áreas de nuestra aplicación web estén protegidas y solo puedan ser accedidas si el usuario ésta logueado (un panel de control por ejemplo) o incluso que solo puedan ser accedidas por determinados tipos de usuarios. Para conseguir esto con Angular se usan los guards. 

## Interface:
####
## Pipe:
####
## Service:
####