# Peticiones de la aplicación.

Este proyecto lleva algunas peticiones protegidas, que requieren de un token en los encabezados de la peticiones (Estandar Bearer Token). Aquí esta las peticiones desarrolladas. Imaginemos que las variables de entorno fueron definidas `localhost:4000` como url base, asi se verian las peticiones.

## Usuario

### Regitro

Metodo: POST

```
localhost:4000/api/auth/register
```

### Cuerpo de la petición

```
{
  "name": "Facundo",
  "surname": "Ríos",
  "username": "admins1s234",
  "email": "soyadminss@gmail.com",
  "password": "qwerty12345",
}

```

### Inicio de sesión

Metodo: POST

```
localhost:4000/api/auth/login
```

### Cuerpo de la petición

```
{
    "username": "admin123",
    "password": "qwerty12345"
}
```

## Categorias:

### Mostrar todas las categorias:

```
localhost:4000/api/category
```

Metodo: GET

### Mostrar una categoria por ID:

Metodo: GET

```
localhost:4000/api/category/id-de-categoria
```

## Equipos:

### Añadir un equipo:

Metodo: POST

```
localhost:4000/api/equipment/create
```

### Cuerpo de la petición

```
{
    "name": "Monitor Samsung 24''",
    "description": "Pantalla LED de alta definición, resolución 1080p..",
    "status": "available",
    "stock": 15,
    "categoryId":"ID-DE-LA-CATEGORIA"
}
```

### Mostrar todos los equipos:

Metodo: GET

```
localhost:4000/api/equipment
```

### Mostrar un equipo por ID:

Metodo: GET

```
localhost:4000/api/equipment/id-del-equipo
```

### Elimiar un equipo por ID:

Metodo: DELETE

```
localhost:4000/api/equipment/id-del-equipo
```

### Actualizar un equipo por ID:

Metodo: PATCH

```
localhost:4000/api/equipment/id-del-equipo
```

#### Cuerpo de la petición

```
{
{
    "name"?: "Monitor Samsung 24''",
    "description"?: "Pantalla LED de alta definición, resolución 1080p..",
    "status"?: "available",
    "stock"?: 15,
    "imageUrl"?: "url-de-una-imagen"
    "categoryId"?:"ID-DE-LA-CATEGORIA"
}
}
```
