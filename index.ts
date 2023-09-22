const server = Bun.serve({
  // port: process.env.PORT || 8000,
  port: Bun.env.PORT || 8000,
  fetch(data) {
    const url = new URL(data.url);
    if (url.pathname === "/") return new Response("HomePage");
    if (url.pathname === "/blog") return new Response("Blog");
    return new Response("404!");
  },
});

console.log(`Listening on port ${server.port}`);
