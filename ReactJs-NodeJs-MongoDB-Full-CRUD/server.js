const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require('body-parser');

const items = require('./backend/app/routes/route.items')
const users = require('./backend/app/routes/route.user');

const app = express();


//Bodyparser Middleware
app.use(bodyParser.json());
app.use(cors());

//DB Config
const db = require('./backend/app/config/keys').mongoURI;

//Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

//Use routes
app.use('/items', items)
app.use('/user', users);

const port= process.env.PORT || 8080;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
