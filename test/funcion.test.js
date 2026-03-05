const aplicarOperacion = require('../src/funcion');

test('suma correctamente dos números', () => {
    const suma = (a, b) => a + b;

    const resultado = aplicarOperacion(2, 3, suma);

    expect(resultado).toBe(5);
});

test('multiplica correctamente dos números', () => {
    const multiplicar = (a, b) => a * b;

    const resultado = aplicarOperacion(2, 3, multiplicar);

    expect(resultado).toBe(6);
});

test('resta correctamente dos números', () => {
    const resta = (a, b) => a - b;

    const resultado = aplicarOperacion(5, 3, resta);

    expect(resultado).toBe(2);
});

test('lanza error si no se pasa una función', () => {
    expect(() => {
        aplicarOperacion(2, 3, "no es funcion");
    }).toThrow("La operación debe ser una función");
});