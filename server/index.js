const express = require('express');
const dotenv = require('dotenv');
const path = require('path')
const connect = require("./config/datadase");
const bodyParser = require("body-parser");
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');



//req routes
const expense = require("./routes/api/expense");
const auth = require("./routes/api/auth");





//config
dotenv.config({ path: path.resolve(__dirname, '../config.env') })
require('./config/passport')(passport);
//init
const app = express();

/////////////////////////////////////

//cors
app.use(cors());

//middlewares
app.use(bodyParser.json());

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        /* store: MongoStore.create({
            mongoUrl: process.env.MONGO_URL,
        }), */
    })
);

app.use(passport.initialize());
app.use(passport.session());

//db connect
connect();

//routes
app.use('/api/expense', expense);
app.use('/auth', auth);



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});