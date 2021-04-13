const MongoClient = require('mongodb').MongoClient;
const http = require('http');

// Especificar la URL de conexión por defecto al servidor local
const url = 'mongodb://localhost:27017';

// Nombre de la base de datos a la que conectarse
const dbName = 'nodejs-mongo';

// Crear una instancia del cliente de MongoDB
const dbClient = new MongoClient(url, {useNewUrlParser: true});

// Definir el puerto a utilizar
const port = 3000;

// Crear el servidor y definir la respuesta que se le da a las peticiones
const server = http.createServer((request, response) => {
    // Extrear el contenido de la petición
    const { headers, method, url } = request;

    console.log('headers: ', headers);
    console.log('method: ', method);
    console.log('url: ', url);
    
    let body = [];
    
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        // El cuerpo de la petición puede venir en partes, aquí seconcatenan
        body.push(chunk);
    }).on('end', () => {
         // El cuerpo de la petición está completo
        body = Buffer.concat(body).toString();

        const querystring = require('querystring');

        let document = querystring.parse(body);

        dbClient.connect().then(async () => {
            const db = dbClient.db(dbName);
        
            // Llamar a la función para insertar
            const collection = db.collection('usuarios');
            
            // Insertar documento
            await collection.insertOne(document);
            
            // Recuperar documentos
            let responseText = await collection.find({}).toArray();

            dbClient.close();

            // Código de estado HTTP que se devuelve
            response.statusCode = 200;
            
            // Encabezados de la respuesta, texto plano
            response.setHeader('Content-Type', 'application/json');
            
            response.write(JSON.stringify(responseText));

            // Contenido de la respuesta
            response.end();
        });
    });
})

// Ejecutar el servicio para que permanezca a la espera de peticiones
server.listen(port, () => {
    console.log('Servidor ejecutándose...');
    console.log('Abrir en un navegador http://localhost:3000');
});