const mongoose = require("mongoose");
const connect = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`mongodb is connected ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connect;