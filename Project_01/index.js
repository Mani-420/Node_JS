// Main File
const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const { sign } = require("crypto");
const app = express();
const PORT = 8000;

// MiddleWares
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log("Hello, This is your Middleware 1.");
    // return res.json({msg: "Hello middle 1."});
    next();
});

// Routes
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) =>  `<li>${user.first_name}<li>`).join("")}
    <ul>
    `;
    res.send(html);
});

// Rest API 
app.get('/api/users', (req, res) => {
    res.setHeader("myName", "Mani Tahir");
    return res.json(users);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1});
    fs.writeFile('./Project_01/MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "Success", id: users.length + 1});
    });
});

app
    .route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id == id);
        return res.json(user);
    })
    .post((req, res) => {
        const body = req.body;
        users.push({ ...body, id: users.length + 1});
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, res) => {
            return res.json({status: "Success", id: users.length + 1});
        });
        // TODO: Create new user 
        // return res.json({status: "pending"});
    })
    .patch((req, res) => {
        // TODO: Edit a user 
        return res.json({status: "pending"});
    })
    .delete((req, res) => {
        // TODO: Delete a user 
        return res.json({status: "pending"});
    })




app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}.`));
