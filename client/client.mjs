import Fastify from 'fastify';
// import  addHook  from 'fastify'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';




const __dirname = dirname(fileURLToPath(import.meta.url));

const server = Fastify({
    logger: true,
});

// server.addHook('onError', (request, reply, error, done) => {
//      reply.redirect(303, 'http://localhost:4030/page/1')
//     done()
// })

server.register(fastifyStatic, {
    root: join(__dirname, '/'),
    prefix: '/', // optional: default '/'
})

// server.setErrorHandler(function (error, request, reply) {
//     const { statusCode } = error.statusCode
//     if (statusCode >= 500) {
//         this.log.error(error)
//     } else if (statusCode >= 400) {
//         this.log.info(error)
//     } else {
//         this.log.error(error)
//     }
//     reply.redirect(303, 'http://localhost:4030/page/1')
// })

server.setNotFoundHandler(function (request, reply) {
    return reply.redirect(303, '/page/1')// Default not found handler with preValidation and preHandler hooks
})

server.get('/', function (req, reply) {
    // const { id = 1 } = request.params
    return reply.redirect(303, '/page/1')// Default not found handler with preValidation and preHandler hooks
})

server.get('/page/:id', function (req, reply) {
    // const { id = 1 } = request.params
    return reply.sendFile('index.html')
})

server.get('/active/page/:id', function (req, reply) {
    // const { id = 1 } = request.params
    return reply.sendFile('index.html')
})

server.listen({
    port: 4030,
    host: `0.0.0.0`,
});
