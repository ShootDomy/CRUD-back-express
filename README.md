# 📦 CRUD-back-express

Proyecto de backend desarrollado con Node.js, Express y PostgreSQL, que implementa una API RESTful para la gestión de clientes. Este proyecto forma parte de una aplicación CRUD completa que se conecta con un frontend en React.

## 🚀 Características

- API RESTful con operaciones CRUD (Crear, Leer, Actualizar, Eliminar)

- Base de datos local con PostgreSQL

- Uso de Express Router para modularización

- Middleware para manejo de errores y parsing JSON

- Conexión lista para integración con frontend

## 🛠️ Tecnologías utilizadas

- Node.js

- Express

- PostgreSQL

- Dotenv

- Nodemon (para desarrollo)

## 📁 Estructura del proyecto

```bash
├── database.js         # Configuración de la base de datos SQLite
├── index.js            # Archivo principal del servidor
├── routes/
│   └── index.js        # Endpoints del API (GET, POST, PUT, DELETE)
├── .env                # Variables de entorno (opcional)
├── package.json

```

## 🔧 Instalación y ejecución

1. Clona el repositorio

```bash
git clone https://github.com/ShootDomy/CRUD-back-express.git
cd CRUD-back-express

```

2. Instala las dependencias

```bash
npm install

```

3. Ejecuta el servidor en modo desarrollo

```bash
npx nodemon index.js

```

4. Servidor corriendo en

```bash
http://localhost:8000
```

## 📮 Endpoints disponibles

| Método | Ruta             | Descripción                |
| ------ | ---------------- | -------------------------- |
| GET    | `/api/posts`     | Obtener todos los clientes |
| GET    | `/api/posts/:id` | Obtener cliente por ID     |
| POST   | `/api/posts`     | Agregar un nuevo cliente   |
| PUT    | `/api/posts/:id` | Actualizar cliente por ID  |
| DELETE | `/api/posts/:id` | Eliminar cliente por ID    |

## 🧪 Ejemplo de request para POST

```bash
{
  "image": "Imagen de prueba",
  "description": "Descripción del cliente"
}

```

## 👩‍💻 Autora

**Doménica Vintimilla**

- GitHub: [@ShootDomy](https://github.com/ShootDomy)
- Correo: [canizaresdomenica4@gmail.com](canizaresdomenica4@gmail.com)
- LinkedIn: [domenica-vintimilla](https://www.linkedin.com/in/domenica-vintimilla-24a735245/)
