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
   return reply.send(users)
});

server.get(`/active`, (request, reply) => {

    let newData = [];
        newData = users.filter((item) => {
        if(item.status === true) {
            return newData.push(item);
        }
    });
    return reply.send(newData)
});

server.get(`/users`, (request, reply) => {
    const newData = [];
    const { query: { search }} = request;
    users.filter((user) => {
        if(
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.company.toLowerCase().includes(search.toLowerCase()) ||
            user.phone.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.country.toLowerCase().includes(search.toLowerCase())) {
            return newData.push(user);
        }
    })
    reply.send(newData)
});



server.listen({
    port: 4020,
    host: `0.0.0.0`,
});

