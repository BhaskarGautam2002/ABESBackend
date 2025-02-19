const axios = require('axios');
const http = require('http');
const port = 3000;
const fs = require('fs/promises');
const server =  http.createServer(async (req,res) => {
  console.log('New request received');
  res.writeHead(200, { 'Content-Type': 'text/html' });

    const response = await axios.get("http://dummyjson.com/products");

    const productsdata = response.data.products;
    let frontdata = `<html><head></head><body>`
    productsdata.forEach((product) => {
        frontdata += `<div><img src="${product.thumbnail}"></div>`
    });
    frontdata +=  `</body></html>`

    res.end(frontdata);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// const axios = require('axios');
// const http = require('http');
// const port = 3000;
// const fs = require('fs/promises');
// const server =  http.createServer(async (req,res) => {
//   console.log('New request received');
//   res.writeHead(200, { 'Content-Type': 'application/json' });

//     const response = await axios.get("http://dummyjson.com/products");
//     const adata = response.data.products;
//     let frontdata = `<html><head></head><body>`

//   res.end(JSON.stringify(adata));
// });

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// const adata = response.data;

//   const response = await fetch("http://dummyjson.com/products");
//   const data = await response.json();

// const http = require('http');
// const port = 3000;
// const fs = require('fs/promises');
// const server =  http.createServer(async (req,res) => {
//   console.log('New request received');
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   const response = await fetch("http://dummyjson.com/products");
//   const data = await response.json();

//   res.end(JSON.stringify(data));
// });

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });




//   const response = await fetch("http://dummyjson.com/products");
//   const data = await response.json();
//   res.end(JSON.stringify(data));

//   const response = await fetch("http://dummyjson.com/products");
//   const data = await response.text;
//   const jdata = JSON.parse(data);
//   res.end(JSON.stringify(jdata));


