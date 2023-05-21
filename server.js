require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const moongooes = require('mongoose')
//NOTE FOR MONGOOSE to be connected, you need to have mongodb installed and running it with 127.0.0.1:27017 not localhost:27017
moongooes.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = moongooes.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

//SET UP USER TO USE JSON
app.use(express.json())
//SET UP ROUTES
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)
app.listen(port, 
    () => console.log(`Example app listening on port ${port}!`)
    )