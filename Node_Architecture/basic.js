const fs = require("fs");
const os = require('os');

// size or number of threads or workers (4)
// console.log(os.cpus().length);

// Blocking vs Non-Blocking
// Synchronous reading or Blocking
console.log("1");
const result = fs.readFileSync("./File_handling/test.txt", "utf-8");
console.log(result);
console.log("2");
console.log("3");



// Asynchronous or non-blocking
console.log("1");
const result2 = fs.readFile("./File_handling/test2.txt", "utf-8", (err, result2) => {
    if (err){
        console.log("Error:", err);
    } else {
        console.log(result2)
    }
})
console.log("2");
console.log("3");