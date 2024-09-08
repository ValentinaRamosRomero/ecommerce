const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongose = require('mongose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors())

//middleware
app.use(bodyParser.json());

//Routes
const categoryRoutes = require('./routes/categories');

app.use(`/api/category`,categoryRoutes)

//Database
mongose.connect(process.env.CONNECTION_STRING, {
    userNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database Connection is ready...');
        //Server
        app.listen(process.env.PORT, () => {
            console.log(`server is running http://localhost:${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })


