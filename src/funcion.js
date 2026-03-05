function aplicarOperacion(a, b, operacion) {
    if (typeof operacion !== "function") {
        throw new Error("La operación debe ser una función");
    }

    return operacion(a, b);
}

module.exports = aplicarOperacion;