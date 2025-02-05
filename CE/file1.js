const { Console } = require('console');
const fs = require('fs'); //require(node:"fs");
const data = fs.readFileSync("./data.txt", "utf-8" );// const data = fs.readFileSync("./data.txt", encoding:"utf-8" );// const data = fs.readFileSync("./data.txt");// fs.readFileSync("./data.txt");
console.log(data);// console.log(data.toString());// console.log(data);
// fs.writeFileSync("./data1.txt", "ABES promise");
// fs.appendFileSync("./data1.txt", "AKTU promise");
// fs.renameSync("./data1.txt", "./data2.txt");
// fs.unlinkSync("./data2.txt");
if (data.match("H")) {
    console.log("H is present");
    const changedata = data.replace("H", "ABES");
    fs.writeFileSync("./data.txt", changedata);
}