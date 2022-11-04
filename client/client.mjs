import fastify from "fastify";
import cors from "@fastify/cors"
import static from "@fastify/static"



const server = fastify({
    logger: true,
});

const serverStatic = (`@fastify/static`);
const path = (`path`);
server.register(serverStatic, {
    root: path.join(__dirname, `/`)
})

server.register(cors, {
    origin: true,
})

// server.register(static, {
//
// })


server.get(`/`, (request, reply) => {
    return reply.sendFile(`index.html`)
});

// server.get(`/active`, (request, reply) => {
//
//     let newData = [];
//     return reply.send(users.filter((item) => {
//         if(item.status === true) {
//             return newData.push(item);
//         }
//     }))
// });


server.listen({
    port: 420,
    host: `0.0.0.0`,
});


