const express = require("express");
const urlRoute = require('./routes/route');
const {connectToMongoDB} = require('./connect');
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/shorturl')
.then(() => console.log('Mongodb connected'));

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));