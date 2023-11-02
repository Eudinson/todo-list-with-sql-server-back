const app = require('./app');
const http = require("http");
const server = http.createServer(app);

// SERVER RUN RESPONSE
app.get("/", (req, res) => {
  res.send("server is running!");
});

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
