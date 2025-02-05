const fs = require('fs'); //require(node:fs);
const data = fs.readFileSync("./data.txt", "utf-8" );// const data = fs.readFileSync("./data.txt");// fs.readFileSync("./data.txt");
console.log(data);// console.log(data.toString());// console.log(data);
