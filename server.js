'use strict';

const config = require("./config");
const Hapi = require('hapi');
const routes = require("./routes");
const plugins = require('./plugins');
const models = require('./models');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');

const server = Hapi.Server({
    port: config.port,
    host: config.host
});

const init = async() => {
    await server.register(plugins);
    pluginHapiAuthJWT2(server);

    routes.forEach((api) => {
        server.route(api);
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandlerdRejection', (err) => {
    console.log(err);
    process.exit();
});

init();


//Connect database
let initDb = function () {
    let sequelize = models.sequelize;
    //Determine if the database connection is successful
    sequelize.sync({
        force: false
    }).then(function () {
        console.log("connection database successed");
    }).catch(function (err) {
        console.log("connection failed due to error: %s", err);
    });
};
initDb();