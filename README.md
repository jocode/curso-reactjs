# React JS

## ¿Qué es React?

[React](https://reactjs.org/) es una biblioteca de JavaScript para construir interfaces de usuario.
Sus características son:
- Es declarativo, quiere decir que actualizará el elemento correcto, cuando hay cambio de información, haciendo un renderizado más eficiente.
- Basado en componentes
- Aprende una vez, escribe donde quiere


> **NOTA**
> Cada contenedor debe retornar un solo elemento, es decir, puedo tener imagenes, label, divs, dentro de un solo padre, que actúa como contenedor.

Podemos usar, ReactJS usando los suguientes scripts
```
<script src="http://fb.me/react-0.13.3.js"></script>
<script src="http://fb.me/JSXTransformer-0.13.3.js"></script>
```

JSXTransformer toma la sintaxis de JSX y la convierte a javascript, para que pueda ser interpretada por el navegador.

Para usarlo enun archivo  html, debemos incluir la etiqueta `script`, y colocando la propiedad `type="text/jsx"`. En el caso de usar EcmaScript6 debemos colocar ademas la opción `type="text/jsx;harmony=true"`

> JSX quedó obsoleto (descontinuado) por facebook, lo recomendable es usar babel, o alguna de estas herramientas para usar un sólo archivo, para no requerir demasiados.


El siguiente es un ejemplo de uso con ReactJS

```js
var HelloWorldComponent = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        level: React.PropTypes.number
    },
    render: function(){
        return <h1>Hello {this.props.name} evoluciona en nivel  { this.props.level }!</h1>
    }
});

React.render(<HelloWorldComponent name="Ñandú Spoliler" level={25}/>, document.getElementById('container'));
```

*Para más información ver los archivos* [hello-world.html](hello-world.html) y [pokerow.html](pokerow.html)

## Incluir componentes dentro de componentes

Para usar componentes dentro de componentes, solo debemos incluir la etiqueta como si fuera html. 

**IMPORTANTE**: *Los nombres de los componentes siempre deben ir con la primera letra en mayusculas, para diferenciarlos de los nodos del DOM*

```
class PokeAvatar extends React.Component {
    render(){
        var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
        return <img src={url} className="avatar"/>
    }
}

class PokeRow extends React.Component {
    render(){
        return <li className="pokewow">
            <PokeAvatar number={this.props.number}/>
            {this.props.name}
        </li>
    }
}

var pokemon = pokemons[0];
React.render(<Pokerow name={pokemon.name} number={pokemon.number}/>, document.getElementById('container'));
```

*Ver archivo* [pokerow.html](pokerow.html)

## Separando componentes

Para definir mejor la lógica, podemos separar los componentes en cada archivo. Para ello creamos la carpeta `components`, y allí creamos un archivo con el nombre de la clase que hemos definido para el componente, usando ES6.

Por ejemplo

En el archivo [PokeAvatar.js](PokeAvatar.js), colocamos el componentes referente a esa clase, el cual es el siguientes.

```js
/**
 * Module Dependencies
 */
import React from 'react';

export default class PokeAvatar extends React.Component {
    render(){
        var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
        return <img src={url} className="avatar"/>
    }
}
```

Como necesitamos react, necesitamos importar el archivo. Para eso, usamos npm para que nos gestione las dependencias. Para eso, debemos crear el archivo **package.json**, donde le indicamos el nombre del proyecto, y las dependencias que usará.

```json
{
  "name": "pokechat",
  "dependencies": {
    "react": "^16.6.3"
  }
}
```
*[package.json](package.json)*

La propiedad dependencies, se ha agregado al ejecutar el comando `npm install --save react`

El parámetro **--save** le indica a npm, que agregue la dependencia al archivo *package.json*, de esta manera nos evitamos estar escribiendo manualmente la versión que utilizamos.

> Con el comando **`npm install`** se instalan todas las dendencias que  hemos definido en el archivo `package.json`

## Instalamos Browserify

Browserify es un programa que nos convierte el código a javascript, generando un bundle, que es un archivo que incluye todas las librerías y código de la aplicación para no tener que hacer varias peticiones al servidor.

`npm install --save browserify`

## Babelify

Nos permite traspilar el código de JSX y ES6 a Javascript común, que se ejecuta en cualquiera de los navegadores

Para instalar **babelify** ejecutamos el siguiente comando 

* `npm install babelify`

## Ejecutar browserify en el proyecto 

Definimos el archivo a ejecutar, para eso, usamos la propiedad script, y le indicamos que deseamos ejecutar browserify en el *entry point* que es nuestro caso en **app.js** y el archivo que obtendrá el resultado que es **build.js** y por último la transformación que queremos que utilice que es **babelify**

```json
...
"scripts": {
    "build": "browserify app.js > build.js -t babelify"
}
```

### Ejecutando el comando

Para ejecutar el script, colocamos el comando

* `npm run build`

Donde *build* es el nombre del script que hemos definido anteriormente