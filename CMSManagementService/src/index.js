const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const v1Routes = require('./routes/index')
const cors = require('cors');
const { sequelize } = require('./models')

const app = express();

const setupAndStartServer = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());

    app.use('/v1', v1Routes);

    app.listen(PORT, async () => {
        console.log(`Server running on port: ${PORT}`);
    
        
    });
}

setupAndStartServer();