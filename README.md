# Test Unitarios en JavaScript

Este repositorio contiene un ejemplo de **test unitarios** aplicados a una **función de orden superior** utilizando JavaScript.

## Tecnologías utilizadas

- Node.js
- Jest

## Estructura del proyecto

```
test-unitarios-js
│
├── src
│   └── funcion.js
│
├── tests
│   └── funcion.test.js
│
├── package.json
└── README.md
```

## Instalación

Clonar el repositorio:

```
git clone https://github.com/tuusuario/test-unitarios-js.git
```

Instalar dependencias:

```
npm install
```

## Ejecutar pruebas

```
npm test
```

## Ejemplo de función de orden superior

```javascript
function aplicarOperacion(a, b, operacion) {
    return operacion(a, b);
}
```

## Autor

Victor Mendoza