const {nanoid} = require("nanoid");
const URL = require("../models/model");

async function handleGenerateNewShortURL(req, res) {    
    const shortID = nanoid(7);
}