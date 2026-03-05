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