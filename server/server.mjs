import fastify from "fastify";
import { users } from "./generator.mjs"
import fastifyCors from "@fastify/cors"
import fastifyMultipart from "@fastify/multipart"
import pg from "pg"
// import static from "@fastify/static"

const { Client } = pg;

const client = new Client ({
    database: 'test_glivera',
    user: 'postgres',
    password: 'postgres',
    port: 5433,
    host: 'localhost'
})


const server = fastify({
    logger: true,
});


server.register(fastifyMultipart, {
    addTobody: true,
})
server.register(fastifyCors, {
    origin: true,
})



server.get(`/`, (request, reply) => {
   return reply.headers({
       'page': '1',
   }).send(users);
});

server.get(`/active`, (request, reply) => {

    return reply.send(users.filter((item) => item.status === true))
});

server.get(`/page/:id`, (request, reply) => {
    const { query: { search }} = request;

    reply.send(users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.company.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.country.toLowerCase().includes(search.toLowerCase())))
});

server.get(`/active/page/:id`, (request, reply) => {
    const { query: { search }} = request;

    reply.send(users.filter((item) => item.status === true)
        .filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.company.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.country.toLowerCase().includes(search.toLowerCase())))
});

server.post(`/register`, {
    schema: {
        body: {
            type: `object`,
            properties: {
                email: {
                    type: `string`,
                    minLength: 5,
                    maxLength: 30,
                },
                password: {
                    type: `string`,
                    minLength: 8,
                    maxLength: 50,
                },
            },
            required: [`email`, `password`]
        },
    },
},
    async (request, reply) => {
        const { email, password} = request.body;
        const { rows } = await client.query('select * from users where email=$1;',[
            email,
        ]);
        if(!rows.length) {
            await client.query('insert into users (email, password) values ($1, $2);', [email, password]
            );
            return reply.send({info: 'User successful created '});
        }
        reply.status(400).send({info: 'User already exist'});
    }

);

server.listen({
    port: 4020,
    host: `0.0.0.0`,
}).then(() => {
    client.connect();
}).catch((err) => console.log(err));

