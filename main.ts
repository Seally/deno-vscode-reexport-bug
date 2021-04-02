import { httpServer } from "./deps.ts";

const server = httpServer.serve({ port: 8080 });

for await (const req of server) {
    req.respond({
        body: "Hello World!"
    });
}
