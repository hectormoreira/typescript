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
- `tsc --init` crear archivo de configuración

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
**Tipo null y undefined**
- Se puede utlizar null y **undefined ** como tipos
- Estos hacen que sus valores solo sean null y undefined respectivamente
- Son subtipos en any




## Recursos
- [https://stackshare.io/typescript](https://stackshare.io/typescript)
- [Node Version Manager](https://github.com/nvm-sh/nvm)