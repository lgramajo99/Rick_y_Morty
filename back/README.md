# HW 02: WebServer | Integración

## **🕒 Duración estimada**

x minutos

<br />

---

## **😛 Rick & Morty App**

### **📌 INTRO**

Hasta el momento hemos trabajado en nuestra app Rick and Morty en el lado frontend. A partir de ahora continuaremos con nuestra app desde el lado backend.

En esta homework, vamos a estructurar nuestro proyecto, crear nuestro primer server y conectar front con back.

<br />

---

### **👩‍💻 EJERCICIO 1**

### **Estructuración de Proyecto**

1. Dirígete al directorio donde tienes el proyecto `Rick & Morty` y ábrelo en tu VSC.

2. En la raíz de tu proyecto crea una carpeta llamada `front`.

3. Todo el contenido trabajado durante el módulo 2, guárdalo dentro de la carpeta **front**

4. Crea una segunda carpeta al mismo nivel de la carpeta **front** con el nombre `back`.

5. Dentro de la carpeta **back** crea una nueva carpeta con el nombre de **src**.

6. Dentro de la carpeta **src** debes crear lo siguiente:

   - Un archivo llamado `app.js`.
   - Una carpeta llamada `controllers`.
   - Una carpeta llamada `routes`.
   - Una carpeta llamada `utils`.
   - Una carpeta llamada `test`.

7. Pasa el archivo `data.js` que se encuentra en la carpeta **02 - Integration** a tu carpeta **back/src/utils**.
   <br />

---

### **👩‍💻 EJERCICIO 2**

### **Crea tu primer server**

1. Crea un archivo llamado `server.js` dentro de la carpeta **back/src/routes**.

2. Importa **http** desde el módulo `http`.

3. Crea y levanta el servidor en el puerto **3001**.

4. Dentro del callback del servidor debes crear un condicional que pregunte si la **url** incluye el string `rickandmorty/character`. En caso de que si lo incluya, obtén el personaje por id que llega por **req.url** y que coincida con el personaje en el archivo **data.js**.

5. Envía como respuesta un JSON con toda la información del personaje.

   > **[PISTA]:** dentro del parámetro **`req.url`** está el id del personaje. Puedes utilizar el método split() para obtenerlo...

<br />

---

### **👩‍💻 EJERCICIO 3**

### **Conectar front - back**

1. Abre tu proyecto en la carpeta **front** para poder hacer un pequeño cambio.

2. Dentro del archivo **app.js** tienes una función llamada `onSearch`. La URL a la que le haces la petición es

En el archivo App.js, donde tienes dentro de la función **onSearch**, cambia la ruta get que actualmente llama **<https://rickandmortyapi.com/api/character/>**. Tienes que reemplazarla por esta nueva URL: `http://localhost:3001/rickandmorty`.

> **[NOTA]:** recuerda agregar a la ruta el id.

<br />

---

### **👩‍💻 EJERCICIO 4**

En la carpeta raíz de tu Back-End tendrás que ejecutar el comando:

```bash
    npm init
```

De esta manera crearás un archivo `package.json`.

En este sólo deberás instalarle las librerías **axios** y **nodemon** de la siguiente manera:

```bash
    npm install axios nodemon
```

Una vez hecho esto, dentro del objeto **scripts** tienes que dejar el script **`start`** de la siguiente manera:

```javascript
    "start": "nodemon ./src/routes/server.js",
```

</br >

---

Hemos terminado por ahora!! 🥳 más adelante crearemos más rutas para nuestro frontend. 🚀











# HW 03: Promises | Integración

## **🕒 Duración estimada**

x minutos

<br />

---

## **💻 Rick & Morty App**

### **📝 INTRO**

En esta homework vamos a seguir trabajando en nuetra App de Rick & Morty del lado del servidor. En esta ocasión crearemos algunas rutas asincrónicas que nos permitirán darle mejor funcionamiento a nuestra aplicación.

Crearemos una ruta para manejar las funcionalidades:

-  GET onSearch
-  GET Detail
-  GET favorites
-  POST favorites
-  DELETE favorites

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1**

### **GET Search**

1. Dirígete a tu carpeta `controllers` y crea un archivo llamado `getCharById.js`. Dentro de este archivo deberás:

   -  Declarar una variable con el nombre "_getCharById_" y exportarla. Esta variable será una función que recibe dos parámetros: **res** y **id**.

   -  Dentro de la función deberás hacer una petición (_código asincrónico_) a la URL `https://rickandmortyapi.com/api/character/`. Debes utilizar promesas para realizar esto. Recuerda que debes agregar el ID recibido por parámetro al final de esta URL.

   -  Una vez que tienes la respuesta de la petición, crea un objeto en el que guardarás las propidades **image**, **name**, **gender** y **species** que recibiste como respuesta (todos los datos de la petición se encuentran dentro de una propiedad llamada **data**).

   -  Una vez creado el objeto, deberás devolver una respuesta con status `200`, un Content-Type igual a `application/json`, y finalmente responde el objeto que creaste convertido en JSON:

      ```javascript
      res.end(JSON.stringify(objeto));
      ```

   -  En el caso de que la promesa tenga algún fallo es importante que concatenes un `.catch` al final de la promesa para poder manejar el error. Dentro del catch deberás devolver una respuesta con status `500`, un Content-Type igual a `text/plain`, y finalmente responde con la propiedad **message** del error.

> **[NOTA]:** puedes utilizar axios o fetch. ¡Como más gustes!

2. ¡Listo! Ya tenemos nuestro primer controlador. Ahora lo vamos a utilizar en nuestra ruta. Para esto, dirígete al archivo llamado **`src/routes/server.js`**. **Elimina** todo el contenido de este archivo.

3. Dentro de este archvio tendrás que:

   -  Importar **http** y el controlador que creaste.

   -  Crear y levantar un servidor en el puerto **3001**.

   -  Dentro del callback del servidor debes:

      -  copiar y pegar la siguiente línea:

      ```javascript
      res.setHeader('Access-Control-Allow-Origin', '*');
      ```

      > **[NOTA]**: esta línea permitirá contectar tu FRONT con el SERVIDOR sin que haya problemas de CORS.

      -  crear un condicional que pregunte si la **url** incluye el string "_**onsearch**_". En el caso de que si lo incluya deberás ejecutar el controlador pasándole como argumentos:

         -  El parámetro **`res`**.

         -  El segundo parámetro debe ser el ID del personaje que recibes mediante la URL.

      > **[PISTA]:** dentro del parámetro **`req.url`** está el id del personaje. Puedes utilizar el método split() para obtenerlo...

<br />

---

### **👩‍💻 EJERCICIO 2**

### **GET Detail**

Ahora crearemos la ruta para obtener el detalle de un personaje.

1. Dirígete a tu carpeta `controllers` y crea un archivo llamado `getCharDetail.js`. Dentro de este archivo deberás:

   -  Declarar una variable con el nombre "_getCharDetail_" y exportarla. Esta variable será una función que recibe dos parámetros: **res** y **id**.

   -  El resto de la lógica de esta función es exactamente igual al ejercicio anterior, con la diferencia que esta vez debes obtener todas estas propiedades del personaje: **image**, **name**, **gender**, **status**, **origin** y **species**.

2. En tu archivo **`server.js`** tienes que:

   -  Importar el nuevo controlador.

   -  Crear un condicional que verifique si la URL recibida incluye el string "_**detail**_". En el caso de que esto sea verdadero tendrás que obtener el ID que recibes al final de la URL, y ejecutar este controlador pasándole como parámetros: **res** y **ID**.

<br />

---

### **👀 COMPROBEMOS...**

Levanta el servidor con el comando:

```bash
    npm start
```

Una vez levantado, verifica lo siguiente:

</br >

### **ON SEARCH**

Ve del lado del Front-End de tu proyecto, y busca la función **onSearch**. En ella deberás eliminar la URL de la API de Rick&Morty y pegar la nueva URL de tu servidor: **`http://localhost:3000/rickandmorty/onsearch/`**. Si levantas tu proyecto deberías de poder utilizar tu search-bar normalmente.

</br >

### **DETAIL**

Ahora queda que vallas a tu componente **Detail.jsx** y reemplaces la URL de la API con esta nueva URL de tu servidor: **`http://localhost:3000/rickandmorty/detail/`**. Ahora podrás ingresar al detalle de cualquier personaje sin problemas.

---

</br >

## **🚨 A TENER EN CUENTA**

Si tu servidor no está levantado, o si los links no fueron bien escritos, tu aplicación no funcionará correctamente.

</br >

---

¡Hemos terminado por ahora!🥳
