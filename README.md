# ReactNativeWorkshop


[![Build Status](https://app.bitrise.io/app/fdb4d46cf0c68e07/status.svg?token=bwp89sBhlwNujcJ7hyRh4Q&branch=main)](https://app.bitrise.io/app/fdb4d46cf0c68e07)

## Redux

Instalar Redux
```javascript
npm install redux
```

Instalar React Redux
```javascript
npm install react-redux
```


Creación Básica del store de Redux
```javascript
import { createStore, combineReducers } from 'redux'
import reducers from './reducers'

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer)

export default store
```

por su parte el archivo reducer contiene una colección de reducers dispuesto de esta forma

```javascript
//reducers/index.js

const reducers = {
    reducer1,
    reducer2,
    reducer3,
    reducer4,
}

export default reducers

```


### ¿Qué es un Reducer?

Un Reducer no es mas que una función o mejor dicho una función pura, una función pura es una función que dados los parametros **(x1,x2,x3...xn)** el retorno siemmpre es Y para los mismos parametros.

Este es un ejemplo de una función Pura, dado los mismos valores a y b
```javascript
const suma = (a,b) => a + b
```

Este es un ejemplo de una función No Pura, en este caso redibiendo  ningún parametro devuelve siempre un valor diferente cada vez que es ejecutada.

```javascript
const getNowDate = () => new Date()
```

Este es otro ejemplo de una función que viola el principio de una función Pura, a pesar de que dado un parametro **x1** y resultado siempre es el mismo dado ese parametro, la función ejecuta un sideffect del parametro

```javascript
const SideEffect = parameter => {
    parameter.MyFunction()
    return true
}
```

```javascript
const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case 'FETCH_START':
            return {...state, isLoading: true }
        default:
            return {...state}
    }
}

```


## Pruebas Unitarias


- [Documentación de Jest](https://jestjs.io/docs/en/getting-started)
- [Jest Fetch mock](https://www.npmjs.com/package/jest-fetch-mock)
- [Documentación Enzyme](https://enzymejs.github.io/enzyme/)

La configuración de jest se encuentra en **package.json**

```javascript
"jest":{
    "preset": "react-native",
    "automock": false,
    "setupFiles": [
      "./setupJest.js"
    ],
    "collectCoverageFrom": [
      "app/**/*.js"
    ],
    "coverageThreshold": {
      "global": {
        "lines": 40,
        "statements": 40,
        "braches": 40
      }
    }
}
```

Para poder emular una llamada fetch usamos la libreria **jest-fetch-mock**

```javascript
npm install --save-dev jest-fetch-mock
```

## Lottie

Animaciones para nuestra aplicacion

[Animaciones] (https://lottiefiles.com/)

### Libreria ADMOB 

https://www.npmjs.com/package/prop-types

Pantalla de ejemplo en screens/AdMobScreen