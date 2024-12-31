// Main File
const express = require("express");
const {connectMongoDb} = require("./connections");

const {logReqRes} = require("./middlewares/middle");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// Connection 
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log("Mongodb Connected"));

// MiddleWares
app.use(express.urlencoded({extended: false}));
app.use(logReqRes('log.txt'));

// Route 
app.use("/api/users", userRouter);



app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}.`));