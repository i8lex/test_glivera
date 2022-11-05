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

server.get('/active', function (req, reply) {
    reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

server.listen({
    port: 4030,
    host: `0.0.0.0`,
});