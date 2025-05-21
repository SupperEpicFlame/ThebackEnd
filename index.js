const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

require('dotenv').config();



const app = express();

app.use(cors());

app.use(bodyParser.json());



// // Routes

const URoutes = require('./routes/u');

const rRoutes = require('./routes/r');



app.use('/api/U', URoutes);

app.use('/api/R', rRoutes);



// Start server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});