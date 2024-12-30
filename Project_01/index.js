// Main File
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
// const users = require("./MOCK_DATA.json");
const { type } = require("os");
const app = express();
const PORT = 8000;

// Schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
});
const User = mongoose.model('user', userSchema);

// Connection 
mongoose   
    .connect("mongodb://127.0.0.1:27017/youtube-app-1")
    .then(() => console.log("MongoDB connected."))
    .catch((err) => console.log("MongoDB Error: ", err));

// MiddleWares
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log("Hello, This is your Middleware 1.");
    // return res.json({msg: "Hello middle 1."});
    next();
});

// Routes
app.get('/users', async (req, res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers.map((user) =>  `<li>${user.firstName} - ${user.email} <li>`).join("")}
    <ul>
    `;
    res.send(html);
});

// Rest API 
app.get('/api/users', async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
});

app.post("/api/users", async (req, res) => {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg: "All fields are required."});
    }
    const creation = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    console.log(creation);
    return res.status(201).json({msg: "success"});
});

app
    .route('/api/users/:id')
    .get(async (req, res) => {
        const user = await User.findById(req.params.id);
        return res.json(user);
    })
    .post(async(req, res) => {
        const body = req.body;
        if (
            !body ||
            !body.first_name ||
            !body.last_name ||
            !body.email ||
            !body.gender ||
            !body.job_title
        ){
            return res.status(400).json({msg: "All fields are required."});
        }
        const creation = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
        });
        console.log(creation);
        return res.status(201).json({msg: "success"});
    })
    .patch(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
        return res.json({status: "success"});
    })
    .delete(async(req, res) => {
        await User.findByIdAndDelete(req.params.id);
        return res.json({status: "success"});
    })

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}.`));