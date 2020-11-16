# PEC4_Ej2_respuestas_teoria1.

1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:

   La directiva ngFor es la que se encarga de presentar una lista de elementos en pantalla de una forma sencilla combinando el concepto de bucle y plantilla.

   - index: iteración de bucle actual para cada contexto del template.
   - first: valor booleano que indica si el elemento es el primero en la iteración.
   - last: valor booleano que indica si el elemento es el último en la iteración.
   - even: valor que indica si este elemento tiene un índice par.
   - odd: valor booleano que indica si este elemento tiene un índice impar.

   `<li *ngFor="let item of items;let i=index">{{i}} - {{item.name}}</li>`

   Podemos usar estas variables para enlazar con las clases CSS, o mostrarlas en la interfaz de usuario, o ejecutar cualquier otro cálculo que queramos. Por ejemplo, podemos añadir el elemento par de la clase CSS a cada elemento del índice par:

   `[css.even-item]="isEven"`

   donde even se asigna a la variable isEven en la microsintaxis NgFor es como:

   `*ngFor="let stock of stocks; even as isEven; index as i"`

2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.

   `<li *ngFor="let item of items;let i=index">{{i}} - {{item.name}}</li>`

   Angular convertirá este código en lo siguiente:

   ````
   <ng-template ngFor let-item [ngForOf]="items" let-i="index">
        <div>({{i}}) {{item.name}}</div>
   </ng-template>
   ```

   Internamente cada vez se añada, se modifique o se elimine un item del array, Angular a través de la directiva ngFor volverá a redibujar completemente el DOM desde cero. Y esto es una operación costosa.

   tracbkby se encarga de realizar un seguimiento de los cambios en el array y que solo hice los cambios o el cambio en los items necesarios.

   ````
   <li *ngFor="let item of items;let i=index;trackBy: trackByItems">
        {{i}} - {{item.name}}
   </li>
   ```

   Internamente:

   <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByItems”>
    <div>({{i}}) {{item.name}}</div>
   </ng-template>

   .ts:

   trackByItems(index: number, item: any): number { return item.id; }

   "trackBy" es una función que define cómo realizar un seguimiento de los cambios para los elementos en el iterable.

   Ahora cada vez que se agregue, mueva o elimine elementos en el array, la directiva, sólo volverá a redibujar los items que han cambiado.

   Cuando se proporciona esta función, la directiva utiliza el resultado de llamar a esta función para identificar el nodo del elemento, en lugar de la identidad del objeto en sí.

   La función recibe dos entradas, el índice de iteración y el ID del objeto del nodo (item).

3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.
