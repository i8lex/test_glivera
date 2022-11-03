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


server.listen({
    port: 4020,
    host: `0.0.0.0`,
});

