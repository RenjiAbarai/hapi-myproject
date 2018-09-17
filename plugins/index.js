// plugins

module.exports = [{
    plugin: require('hapi-auth-jwt2')
},
    require('./hapi-good.js'),
    require('./hapi-pagination.js'),
    ...require('./hapi-swagger.js')
];