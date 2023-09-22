const server = Bun.serve({
  // port: process.env.PORT || 8000,
  port: Bun.env.PORT || 8000,
  fetch(data) {
    return new Response("Hello World!");
  },
});

console.log(`Listening on port ${server.port}`);
