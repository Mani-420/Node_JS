const express = require("express");
const urlRoute = require('./routes/route');
const {connectToMongoDB} = require('./connect');
const app = express();
const URL = require('./models/model');
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/shorturl')
.then(() => console.log('Mongodb connected'));

app.use(express.json());

app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
        visitHistory: {
            timestamp: Date.now(),
        },
    },

    });
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));