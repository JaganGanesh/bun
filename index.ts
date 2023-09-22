const server = Bun.serve({
  port: 8080,
  fetch(data) {
    return new Response("Hello World!");
  },
});

console.log(`Listening on port ${server.port}`);
