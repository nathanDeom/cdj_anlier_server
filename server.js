const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser : true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB databse connection established successfully')
})

const productsRouter = require('./routes/products');
const updatesRouter = require('./routes/updates');
const eventsRouter = require('./routes/events');

app.use('/products', productsRouter);
app.use('/updates', updatesRouter);
app.use('/events', eventsRouter);

app.listen(port, () => {
     console.log('Server is running on port : ' + port);
})
