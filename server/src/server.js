const http = require("http");
const app = require('./app');
const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

async function runServer(){
    server.listen(PORT,()=>console.log(`server running on PORT:${PORT}`));
}
runServer();
 