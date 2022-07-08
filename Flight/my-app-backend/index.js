const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middleware/logger')
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8088;//Defaults the port to 8088 incase no port is specifide
app.use(express.json());
app.use(cors());
app.use(logger);

app.use('/flights', require('./routes/flight.route.js'));

app.use('*', (req, res) =>{ // Will return an error for all unknown Resources
    res.status(404).send('404 Error: Resource unavailable!')
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Successfully connected to MongoDB`);
    }) 
    .catch(err => {
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});