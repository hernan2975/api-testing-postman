# API Testing con Postman

Repositorio diseñado para pruebas automatizadas de API REST utilizando Postman. Incluye colecciones organizadas, entornos configurables, documentación técnica y validaciones básicas. Ideal como punto de partida para implementaciones de QA funcional y automatizado.

## 🚀 Objetivos

- Validar endpoints REST de forma modular y profesional.
- Documentar las peticiones, respuestas esperadas y criterios de aceptación.
- Proveer colecciones reutilizables para QA manual y automatizado.
- Facilitar la integración con Newman para ejecución desde línea de comandos o CI/CD.

## 📁 Estructura del repositorio

```plaintext
api-testing-postman/
├── README.md
├── postman/
│   ├── collections/
│   └── environments/
├── docs/
│   └── endpoints.md
├── scripts/
│   └── test-validation.js
└── .gitignore

📦 Cómo usar
1. Importar colecciones en Postman
Ve a File > Import en Postman y selecciona los archivos .json de postman/collections/.

2. Configurar entorno
Importa los entornos desde postman/environments/ si la colección usa variables dinámicas.

3. Ejecutar pruebas con Newman (opcional)

newman run postman/collections/<nombre-colección>.json -e postman/environments/<nombre-entorno>.json

4. Validar con scripts personalizados
Postman puede incluir scripts JS en test-validation.js para assertions avanzadas.


📚 Documentación
La documentación de cada endpoint está disponible en docs/endpoints.md. Allí encontrarás ejemplos de peticiones, respuestas esperadas y reglas de validación.

