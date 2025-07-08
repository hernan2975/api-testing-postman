
# Documentación de Endpoints

## /usuarios (GET)
- **Descripción**: Obtiene una lista de usuarios.
- **Petición**:
  - Método: `GET`
  - Headers: `Authorization: Bearer <token>`
- **Respuesta esperada**:
  - Código: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "nombre": "Juan Pérez"
      }
    ]
    ```
- **Validaciones**:
  - Código de estado debe ser 200.
  - La respuesta debe ser un array.
