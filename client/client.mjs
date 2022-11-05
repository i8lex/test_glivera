import fastify from 'fastify';
// import  addHook  from 'fastify'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';



const __dirname = dirname(fileURLToPath(import.meta.url));

const server = fastify({
    logger: true,
});

server.addHook('onError', (request, reply, error, done) => {
     reply.redirect(303, 'http://localhost:4030/page/1')
    done()
})

server.register(fastifyStatic, {
    root: join(__dirname, '/'),
    prefix: '/', // optional: default '/'
})

server.get('/?', function (req, reply) {
    return reply.redirect(303, 'http://localhost:4030/page/1')

})

server.setErrorHandler(function (error, request, reply) {
    if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
        // Log error
        this.log.error(error)
        // Send error response
        return reply.redirect(303, 'http://localhost:4030/page/1')
    }
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
