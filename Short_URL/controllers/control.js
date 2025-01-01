const shortid = require("shortid");
const URL = require("../models/model");

async function handleGenerateNewShortURL(req, res) {    
    const shortID = shortid();
    const body = req.body;
    if (!body.url) return res.status(400).json({error: 'url is required'});
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitedHistory: [],
    });

    return res.json({id: shortID});
}

module.exports = {
    handleGenerateNewShortURL,
}
