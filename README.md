# Fundamentos de TypeScript
Notas del [Curso de Fundamentos de TypeScript](https://platzi.com/clases/typescript/) en Platzi

## Dependencias
```sh
npm i -g typescript
```
- `npm i -g typescript` install compilador de TypeScript
- `tsc -v` versión del compilador
- `tsc` busca y compilar por defecto
- `tsc your_file.ts` compilar fichero
- `tsc --watch` o `tsc --watch your_file.ts` Compilar de manera automática nuestros ficheros .ts activando un watch
- `tsc --init` iniciar proyecto TS y crear archivo de configuración
- `tsc src/type-null-undefined.ts --strictNullChecks` reporte de errores

## Notas
### Que es TypeScript
- Es un superconjunto tipado de javascript, que compila a javascript.
- Lenguaje de programación tipado: Posee un conjunto de tipos para poder usarlos con las variables, pudiendo personalizarlos o extenderlos.
- Lenguaje de alto nivel: Entendible por humanos y posee un alto nivel de abstracción del código máquina.
- Genera como resultado código JavaScript: Emite código javascript compatible con browsers y otras herramientas de javascript.
- Código abierto.
- Desarrollo desde cualquier sistema.
- El código puede ejecutarse en cualquier navegador o plataforma que soporte javascript.

### Porque usar TypeScript
- Programación orientada a objetos
- Potenciar tu código JavaScript
- Mayor productividad
- Poderoso sistema de tipos
- Compila a ES5, ES6 y más
- Proyecto muy activo/Open source
- Actualizaciones periódicas
- Comunidad creciente
- Puede prevenir cerca del 15% de bugs
- Puede usar TypeScript para backend

### Archivo de configuracion tsconfig.json

El archivo `tsconfig.json` es el que indica en un proyecto que se está trabajando con TypeScript. Lo colocas en la raíz de carpetas del proyecto y en él situamos un JSON con todas las configuraciones de trabajo para el transpilador de TypeScript.
- Especifica la raiz de un proyecto TypeScript
- Permite configurar opciones para el compilado

### Tipado en TypeScript

**Explicito:** Define una sintaxis para la creación de variables con tipo de dato
- nomVariable : Tipo de dato
- Inferido: TypeScript tiene la habilidad de deducir el tipo en funcion de un valor.

**Tipo de datos primitivos**
- Number > Boolean > String > Array
- Tuple > Enum > Any > Void
- Null > Undefined > Never >Object

**Tipo Any**
- Usado para valores dinamicos, apis externas, lib de terceros
- Debe usarse como último recurso

**Tipo Void**
- Lo opuesto de Any
- Representa la ausencia de tipo
- Usado en funciones que no retornan nada.

**Tipo Never**
- Representa funciones que lanzan excepciones o nunca retornan un valor.
- Usar never cuando vamos a lanzar excepciones en la función.

**Tipo null y undefined**
- Se puede utlizar `null` y `undefined` como tipos
- Estos hacen que sus valores solo sean null y undefined respectivamente
- Se pueden considerara subtipos de any

**Tipo: Null y Undefined La Opcion —strictNullChecks**
- Solo permite asignar null y undefined a una variable de tipo any o sus tipos respectivos
- Ayuda a evitar errores comunes en programación de apps en el ambito Javascript

**Tipo object**
- Es un tipo de dato no primitivo.
- Declarar a una variable con el tipo object no es lo mismo que crear un Object nativo de JS
 - Si tenemos un objeto declarado con el object de TS no podremos acceder a sus atributos mientras que si lo hacemos regularmente como en vanilla JS si podremos hacerlo.
 -Por lo tanto declarar una variable como object de TS nos puede llegar a servir para una situacion en la que no querramos que el objeto pueda mutar.

**Tipo Array**
- Al igual que en JavaScript, TypeScript permite definir un arreglo para contener un conjunto de valores, para definir los arreglos se pueden usar nos notaciones `[]` y `Array<type>`.

**Tuple**
- Permiten expresar un arreglo con un número fijo de elementos
- Los tipos de datos son conocidos

**Enum**
- Permiten definir un conjunto de constantes con nombres
- Tienen la ventaja de adaptarse al contexto de la aplicación

**Union de tipos - Alias - Tipos literales**
- union type
- permite definir una variable con multiples tipos de datos. Se usa el pipe para unirlos

**Alias de tipos**
- Permite crear un alias como nuevo nombre para un tipo
- El alias se puede aplicar también a un conjunto o combinación de tipos
- Se usa la palabra reservada type

**Tipos Literales**
- Una variable con un tipo literal puede contener únicamente una cadena del conjunto
- Se usan cadenas como "tipos" combinados con el símbolo ('`|`') entre ellos

**Aserciones de tipos**
- Cuando el programador puede conocer más que TypeScript sobre el valor de una variable
- Es un mensaje al compilador: "Confía en mí, sé lo que hago"
- Se parece al `casting` de otros lenguajes de programación
- Usa dos sintáxis `<Angle brackets>` y `(variable as tipo)`

### Tipos personalizados
**Interfaces**
- Constituyen una forma porderosa de definir "contratos" tanto para tu proyecto, como para el código externo del mismo

    **Interfaces Propiedades Opcionales**
    - No todas las propiedades de una interfaz podrían ser requeridas
    - Establecemos una propiedad como opcional con el símbolo (`?`) después del nombre

    **Interfaces Propiedades de Solo Lectura**
    - Algunas propiedades de la interfaz podrían no ser modificables una vez creado el objeto
    - Esto es posible usando `readonly` antes del nombre de  la propiedad

    **Extendiendo Interfaces**
    - Las interfaces pueden extenderse unas de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes

### Clases
**Definiendo Clases y Constructores**
- A partir de ECMAScript 2015 es posible construir clases y hacer uso del paradigma de POO en JS
- TS permite aplicar estas técnicas sin tener que esperar por otra versión

**Miembros públicos**
- TS define un modificador de acceso público por defecto para los miembros de clase
- También es posible marcar un miembro como público usando la palabra reservada `public`

**Miembros privados**
- TS define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada `private`

**Miembros privados ECMAScript**
- TS también soporta (desde la versión 3.8) la nueva sintaxis de JS para miembros privados: `#atributo`
- Esta característica puede ofrecer mejores garantías de aislamiento en miembros privados

**Métodos Set y Get**
- TS Soporta los métodos accesores `get` y `set` como una forma de interceptar los accesos a los miembros privados de un objeto

**Herencia de Clases y miembros protegidos**
- TS soporta este patrón común en el mundo de la POO
- Implementa la habilidad de extender código de clases existentes a través de la `herencia`

**Clases Abstractas**
- Las clases Abstractas son la base de donde otras clases podrían derivarse
- A diferencia de una `Interfaz` una clase abstracta puede implementar funciones para sus instancias
- La palabra reservada es: `abstract`

**Propiedades Estáticas y Propiedades de Solo Lectura**
- Las clases por lo general definen atributos y métodos aplicables a las instancias de las mismas
- A través de la palabra reservada `static` se puede definir un miembro visible a nivel de clase
- Al igual que las `Interfaces`, podemos usar la palabra reservada `readonly` para marcar el miembro de una clase como solo lectura

### Módulos
- Los módulos en TS  proveen un mecacanismo para mejorar la organización del código y promover su reutilización
- A partir de ECMAScript 2015, los módulos son parte nativa del lenguaje JavaScript

**Importando y Exportando Módulos**
- Generalmente se define un módulo con la idea de agrupar código relacionado
- Podemos tomar criterios en torno a la funcionalidad, features, utilitarios, modelos, etc
- Los miembros de módulo interactúan con el uso de las palabras reservadas `import` y `export`







## Recursos
- [https://stackshare.io/typescript](https://stackshare.io/typescript)
- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Type array tuple](https://github.com/luixaviles/platzi-typescript/tree/07-array-tuple)

## Extensiones
- [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)