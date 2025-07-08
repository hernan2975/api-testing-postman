# 📘 Documentación de Endpoints

Este archivo contiene una referencia detallada de los endpoints incluidos en las colecciones de Postman. Cada sección describe los métodos disponibles, los datos esperados y las validaciones aplicadas en las pruebas.

---

## 🔐 /api/login (POST)

- **Descripción**: Permite a los usuarios autenticarse en el sistema.
- **Petición**:
  - Método: `POST`
  - Body (JSON):
    ```json
    {
      "email": "usuario@example.com",
      "password": "12345678"
    }
    ```
- **Respuesta esperada**:
  - Código de estado: `200 OK`
  - Body:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsIn..."
    }
    ```
- **Validaciones**:
  - Código de estado debe ser `200`.
  - El campo `token` debe estar presente y no vacío.
  - Tiempo de respuesta debe ser menor a 800 ms.

---

## 👥 /api/usuarios (GET)

- **Descripción**: Lista todos los usuarios registrados en el sistema.
- **Petición**:
  - Método: `GET`
  - Headers: `Authorization: Bearer <token>`
- **Respuesta esperada**:
  - Código de estado: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "email": "usuario@example.com",
        "nombre": "Juan Pérez"
      }
    ]
    ```
- **Validaciones**:
  - La respuesta debe ser un array.
  - Cada usuario debe tener `id`, `email` y `nombre`.

---

## 💬 Buenas prácticas

- Usar ejemplos reales para que los testers comprendan el comportamiento esperado.
- Incluir validaciones tanto de status code como de contenido.
- Actualizar este archivo con cada nuevo endpoint cubierto en las colecciones.

---

Este archivo completa la estructura profesional que planteaste. Si querés que prepare una versión en inglés para soporte multilingüe o añadir más endpoints específicos, lo hacemos en un par de clicks. Y si planeás compartir este repositorio en tu portfolio, ¡está listo para brillar! 💼✨

¿Querés una sugerencia final para agregar un `LICENSE` y un `CONTRIBUTING.md` opcional o ya damos por concluida esta obra maestra técnica?
