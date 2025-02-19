const http = require('http');
const fs = require('fs/promises');


const server = http.createServer(async (req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json'});
    const filedata = await fs.readFile("./aa.json", 'utf8');
    const parsedata = JSON.parse(filedata);
    res.end(JSON.stringify(parsedata));

});

PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})









// const users = [{
    //     id: 1, name: 'Rahul', email: 'rahul@gmail.com',
    // }, {
    //     id: 2, name: 'Raj', email: 'raj@gmail.com',
    // }, {
    //     id: 1, name: 'Raju', email: 'raju@gmail.com',
    // }]

// const newdata = users.map((user) => {
//     return user.name
// });


    // res.writeHead(200, { 'Content-Type': 'text/html'});

    // res.end("<h1>Hello ABES!</h1")
    // res.end(JSON.stringify(users[1]))
    // res.end(JSON.stringify(users))