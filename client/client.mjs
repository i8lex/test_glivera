import fastify from 'fastify';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = fastify({
    logger: true,
});

server.register(fastifyStatic, {
    root: join(__dirname, '/'),
    prefix: '/', // optional: default '/'
})

server.get('/', function (req, reply) {
    reply.send('index.html')

})

server.get('/page/:id', function (req, reply) {
    // const { id = 1 } = request.params
    reply.sendFile('index.html')
        // .send(id) // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

server.listen({
    port: 4030,
    host: `0.0.0.0`,
});