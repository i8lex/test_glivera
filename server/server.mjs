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


server.listen({
    port: 4020,
    host: `0.0.0.0`,
});

