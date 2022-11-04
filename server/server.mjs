import fastify from "fastify";
import { users } from "./generator.mjs"
import cors from "@fastify/cors"

// const { users } = pkg;

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
    return reply.send(users.filter((item) => {
        if(item.status === true) {
            return newData.push(item);
        }
    }))
});


server.listen({
    port: 4020,
    host: `0.0.0.0`,
});

