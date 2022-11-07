import fastify from "fastify";
import { users } from "./generator.mjs"
import cors from "@fastify/cors"
// import static from "@fastify/static"



const server = fastify({
    logger: true,
});

server.register(cors, {
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



server.listen({
    port: 4020,
    host: `0.0.0.0`,
});

