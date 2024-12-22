const express= require('express');
const app = express();

app.get("/", (req,res) => {
    return res.send("Hello! This is Home page.");
})

app.get("/about", (req,res) => {
    return res.send("Hello! This is About page.");
})

app.listen(8000, () => console.log("Server Started."));