const http = require('http');
const fs = require('fs/promises');
const { json } = require('stream/consumers');
const server =  http.createServer(async (req, res) => {
   
   
   if(req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const data = await fs.readFile("./error-json.json", "utf-8");

    res.end(data);
    return;
   }
   else if(req.url == '/home') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const data = await fs.readFile("./home.html", "utf-8");
    res.end(data);
    return;
   }
   else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    const data = await fs.readFile("./error.html", "utf-8");
    res.end(data);
    return;
   }
   const data = await fs.readFile("./home.html", "utf-8");
   res.end(data)
});
PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
