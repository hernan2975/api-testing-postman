// Validar que la respuesta tiene código de estado 200 OK
pm.test("Código de estado es 200", function () {
    pm.response.to.have.status(200);
});

// Validar que el cuerpo tiene formato JSON válido
pm.test("Respuesta en formato JSON", function () {
    pm.response.to.be.withBody;
    pm.response.to.be.json;
});

// Validar que existe un campo 'token' en la respuesta de login
pm.test("Campo 'token' presente", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("token");
});

// Validar que el campo 'email' no esté vacío en el cuerpo de usuario
pm.test("Campo 'email' tiene valor", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.email).to.not.be.empty;
});

// Validar que el tiempo de respuesta sea menor a 800 ms
pm.test("Tiempo de respuesta aceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(800);
});
