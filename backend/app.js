const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({extended: true}));

connectToDb();



app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes);


module.exports = app;

