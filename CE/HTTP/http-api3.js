const axios = require('axios');
const http = require('http');
const port = 3000;
const fs = require('fs/promises');
const server =  http.createServer(async (req,res) => {
  console.log('New request received');
  res.writeHead(200, { 'Content-Type': 'text/html' });

    const response = await axios.get("https://api.github.com/search/users", {
        params: {
            q: "location:ghaziabad"
        }
    });

   
    const usersdata = response.data.items;
    let frontdata = `<html><head></head><body>`
    usersdata.forEach((data) => {
        frontdata += `<div><img src="${data.avatar_url}"></div>`
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
//   res.writeHead(200, { 'Content-Type': 'text/html' });

//     const response = await axios.get("https://api.github.com/users");
   
//     const usersdata = response.data;
//     let frontdata = `<html><head></head><body>`
//     usersdata.forEach((data) => {
//         frontdata += `<div><img src="${data.avatar_url}"></div>`
//     });
//     frontdata +=  `</body></html>`

//     res.end(frontdata);
    

// });

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// let frontdata = `<html><head></head><body>`
// productsdata.forEach((product) => {
//     frontdata += `<div><img src="${product.avatar_url}"></div>`
// });
// frontdata +=  `</body></html>`

// res.end(frontdata);