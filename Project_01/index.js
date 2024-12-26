// Main File
const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const { json } = require("stream/consumers");
const { error } = require("console");
const app = express();
const PORT = 8000;

// MiddleWare
app.use(express.urlencoded({extended: false}));

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
        return res.json({status: "pending"});
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