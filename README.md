Se propone crear un API donde se integre la creación de un servicio básico utilizando
Node.js (nota técnica 6.4) con el almacenamiento de datos en una base de datos MongoDB (nota técnica 6.5).

En concreto, se tendrá que:
* Definir un servicio para crear y listar usuarios que atienda peticiones de tipo
POST siguiendo el procedimiento visto para que se acepte la petición e interpreten
los parámetros que se dispongan en el cuerpo de la petición.

* El servicio debe recibir los parámetros “name” y “phone” con los datos de un
usuario a insertar en la base de datos.

* El servicio insertará los datos en la base de datos y, a continuación, listará todos
los usuarios que existan en la colección.

* Aunque recomendable, no será necesario validar los parámetros en esta práctica.

* La petición se puede simular utilizando el programa Postman utilizando una
petición POST y enviando el cuerpo de la petición utilizando la cabecera “xwww-
form-urlencoded”.

* Se utilizará el módulo “Query String” para traducir el cuerpo de la petición a
variables que se puedan utilizar (https://nodejs.org/api/querystring.html).

* El servicio se ejecutará con “node main.js” y se comprobarán los resultados
realizando la petición con el Postman o script equivalente.

Se tendrá que entregar el fichero (o ficheros) utilizados para construir el API así
como una captura del resultado de insertar dos o más usuarios en el Postman o
script equivalente.
