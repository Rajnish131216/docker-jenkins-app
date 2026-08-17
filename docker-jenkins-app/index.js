const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>Hello from Jenkins + Docker!</h1>
        <p>Application successfully deployed using a Jenkins Pipeline.</p>
    `);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});