const mongoose = require("mongoose");


async function connectMongoDb(url) {
    // Connection
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDb,
};