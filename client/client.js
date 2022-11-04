const fastify = require('fastify')({logger: true})
const path = require('path')

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '/'),
    prefix: '/', // optional: default '/'
})

fastify.get('/index', function (req, reply) {
    reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

fastify.listen({
    port: 4030,
    host: `0.0.0.0`,
});