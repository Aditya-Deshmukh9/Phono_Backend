const mongoose = require('mongoose');

const URI = process.env.MONOGO_DB_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.error("database connection fail");
        process.exit(0);
    }
};

module.exports = connectDb;