const fs = require("fs");

// Synchronous writing
fs.writeFileSync("./File_handling/test.txt", "Hello! This is a testing file.");

// Asynchronous writing
fs.writeFile("./File_handling/test2.txt", "Hello! This is a testing file and with asychro...", (err) => {});

// Synchronous reading
const result = fs.readFileSync("./File_handling/test.txt", "utf-8");
console.log(result);

// Asynchronous reading
const result2 = fs.readFile("./File_handling/test2.txt", "utf-8", (err, result2) => {
    if (err){
        console.log("Error:", err);
    } else {
        console.log(result2)
    }
})

// Synchronous Appending
const result3 = fs.appendFileSync("./File_handling/test.txt", "\n=> New Data added.");

// Asynchronous Appending
const result4 = fs.appendFile("./File_handling/test2.txt", "\nNew Data added.", (err) => {});

// Copying a file Sync
fs.cpSync("./File_handling/test.txt", "./File_handling/copy.txt");

// Unlinking a file
fs.unlinkSync("./File_handling/copy.txt");