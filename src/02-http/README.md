Módulo 2: Entendiendo HTTP y Requests

## HTTP (Hypertext Transfer Protocol)

HTTP es el protocolo fundamental de la web. Define cómo los clientes y los servidores se comunican entre sí, solicitando y respondiendo a recursos (como páginas web, imágenes, videos, etc.).

**Conceptos clave de HTTP:**

*   **Cliente-Servidor:** El modelo HTTP se basa en una arquitectura cliente-servidor. El cliente (generalmente un navegador web) inicia la comunicación enviando una *solicitud* a un servidor. El servidor procesa la solicitud y envía una *respuesta* de vuelta al cliente.
*   **Solicitudes (Requests):**  Una solicitud HTTP contiene información sobre lo que el cliente quiere del servidor.  Los componentes principales de una solicitud son:
    *   **Método:**  Indica la acción que el cliente quiere realizar. Los métodos HTTP más comunes son:
        *   `GET`:  Recupera un recurso.
        *   `POST`:  Envía datos al servidor para crear o actualizar un recurso.
        *   `PUT`:  Reemplaza completamente un recurso existente con los datos proporcionados.
        *   `PATCH`: Actualiza parcialmente un recurso.
        *   `DELETE`: Elimina un recurso.
        *   `OPTIONS`: Obtiene las opciones de comunicación disponibles para un recurso o el servidor en general.
        *   `HEAD`: Similar a `GET`, pero solo recupera los encabezados de la respuesta, no el cuerpo.
    *   **URL (Uniform Resource Locator):**  La dirección del recurso al que se accede.  Ejemplo: `https://www.ejemplo.com/productos/123`.
    *   **Encabezados (Headers):**  Metadatos adicionales sobre la solicitud, como el tipo de contenido que el cliente acepta (`Accept`), el tipo de contenido del cuerpo de la solicitud (`Content-Type`), información de autenticación (`Authorization`), etc.
    *   **Cuerpo (Body - Opcional):**  Los datos que se envían al servidor (común en solicitudes `POST`, `PUT` y `PATCH`).  Puede ser en varios formatos, como JSON, XML, datos de formulario, etc.
*   **Respuestas (Responses):**  La respuesta del servidor a una solicitud del cliente.  Los componentes principales son:
    *   **Código de estado:** Un número de tres dígitos que indica el resultado de la solicitud.  Las categorías principales son:
        *   `1xx` (Informativo):  La solicitud fue recibida y el proceso continúa.
        *   `2xx` (Éxito):  La solicitud fue exitosa.  Ejemplos: `200 OK`, `201 Created`, `204 No Content`.
        *   `3xx` (Redirección):  El cliente necesita tomar acciones adicionales para completar la solicitud. Ejemplos: `301 Moved Permanently`, `302 Found`, `304 Not Modified`.
        *   `4xx` (Error del cliente):  La solicitud contiene errores o no se puede procesar. Ejemplos: `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`.
        *   `5xx` (Error del servidor):  El servidor falló al procesar la solicitud. Ejemplos: `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`.
    *   **Encabezados (Headers):**  Metadatos sobre la respuesta, como el tipo de contenido (`Content-Type`), la longitud del contenido (`Content-Length`), información de caché (`Cache-Control`), etc.
    *   **Cuerpo (Body - Opcional):**  Los datos que el servidor envía de vuelta al cliente (por ejemplo, el HTML de una página web, datos JSON, etc.).

*   **Sin estado (Stateless):** Cada solicitud es independiente de las anteriores.  El servidor no "recuerda" las solicitudes previas del mismo cliente.  Para mantener el estado entre solicitudes (por ejemplo, una sesión de usuario), se utilizan técnicas como cookies o tokens.

## REST (Representational State Transfer)

REST es un *estilo de arquitectura* para diseñar servicios web, un conjunto de principios y restricciones.  Los servicios web que siguen los principios REST se denominan "RESTful".

**Principios clave de REST:**

1.  **Cliente-Servidor:**  Separación de responsabilidades.  El cliente se encarga de la interfaz de usuario y la experiencia del usuario, mientras que el servidor se encarga del procesamiento de datos, la lógica de negocio y el almacenamiento.

2.  **Sin estado (Stateless):**  Al igual que HTTP, cada solicitud del cliente al servidor debe contener toda la información necesaria para que el servidor la entienda y la procese.  El servidor no debe almacenar ningún estado del cliente entre solicitudes.  Esto mejora la escalabilidad y la fiabilidad.

3.  **Cacheable:**  Las respuestas del servidor deben indicar explícitamente si son cacheables o no.  Esto permite a los clientes (y a los proxies intermedios) almacenar en caché las respuestas para mejorar el rendimiento y reducir la carga del servidor.

4.  **Interfaz Uniforme:**  REST define una interfaz uniforme entre clientes y servidores, lo que simplifica la interacción y facilita la evolución del sistema.  Los cuatro componentes principales de la interfaz uniforme son:
    *   **Identificación de recursos (URI):**  Cada recurso se identifica mediante un URI único (Uniform Resource Identifier).  Por ejemplo: `/productos/123`.
    *   **Manipulación de recursos a través de representaciones:**  Los clientes interactúan con los recursos a través de representaciones (generalmente JSON o XML).  Una representación es una forma de mostrar el estado de un recurso.
    *   **Mensajes autodescriptivos:**  Cada mensaje (solicitud o respuesta) contiene suficiente información para que el receptor lo procese.  Esto incluye el método HTTP, el tipo de contenido, etc.

5.  **Sistema de capas (Layered System):**  El cliente no necesita saber si se está comunicando directamente con el servidor final o con un intermediario (como un proxy, un balanceador de carga o una caché).  Esto permite escalar y mejorar la seguridad del sistema.

**REST y HTTP:**

REST se basa en gran medida en HTTP. Utiliza los métodos HTTP (GET, POST, PUT, DELETE, etc.) para realizar operaciones sobre los recursos.  También aprovecha los códigos de estado HTTP para indicar el resultado de las operaciones.  Una API RESTful bien diseñada utiliza HTTP de forma semántica y coherente.

**Ejemplo de una API RESTful simple:**

| Método HTTP | URI                 | Descripción                                  |
| ----------- | ------------------- | -------------------------------------------- |
| GET         | /productos          | Obtiene una lista de todos los productos.     |
| GET         | /productos/123      | Obtiene el producto con ID 123.              |
| POST        | /productos          | Crea un nuevo producto.                      |
| PUT         | /productos/123      | Actualiza completamente el producto con ID 123. |
| PATCH       | /productos/123      | Actualiza parcialmente el producto con ID 123. |
| DELETE      | /productos/123      | Elimina el producto con ID 123.              |
