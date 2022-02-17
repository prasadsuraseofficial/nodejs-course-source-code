// const fs = require("fs");
// const path = require("path");

// -------------------------
// core modules in node js
// -------------------------

// 1. fs (file system) module

// CRUD - create, read, update, delete (files)

// console.log(fs);

// // 1. create a file
// fs.writeFileSync("demo.txt", "this is sample file created by node js fs module!");

// // 3. read a file
// const content = fs.readFileSync("demo.txt", "utf8");
// console.log(content);

// // 3. update a file
// fs.appendFileSync("demo.txt", " and this is how we can add more text into it!");

// // 4. delete a file completely
// fs.unlinkSync("demo.txt");
// ------------------------------------------------------------

// 2. path module ->
// console.log(path.extname("demo.js"));
// console.log(path.extname(__filename))

// console.log(path.basename("/files/file1.txt"))
// console.log(path.basename(__filename))

// console.log(path.dirname("/files/file1.txt"))
// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))


// // node js globals
// console.log(__dirname); //path/current directory
// console.log(__filename); //path with file name

// 3. os module (operating system)

// 4. http module (used to create the server)
