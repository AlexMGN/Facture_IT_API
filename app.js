require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const { check } = require('express-validator');
const mongoose = require('mongoose');

const corsOptions = {
    origin: '*'
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

const restrictedRoutesMethods = require('./src/routes/restricted/restrictedRoutesMethods');
const restrictedRoutes = require('./src/routes/restricted/restrictedRoutes')(express.Router(), check, restrictedRoutesMethods);
const openRoutesMethods = require('./src/routes/open/openRoutesMethods');
const openRoutes = require('./src/routes/open/openRoutes')(express.Router(), check, openRoutesMethods);

app.use('/api', openRoutes);
app.use('/api/auth', restrictedRoutes);

mongoose.connect(process.env.FACTURE_IT_CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((database) => {
    console.log('Connected to MongoDB !');
    // global.db = database
});

app.listen(port, () => {
    console.log('🚀 App listening on port: ' + port);
});