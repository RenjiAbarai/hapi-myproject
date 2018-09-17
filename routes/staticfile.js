//staticfile.js
let static = {
    config: {
        auth: false
    },
    method: 'GET',
    path: '/staticFile',
    handler: function (request, h) {
        return h.file('./public/static.html');
    }
};
let index = {
    config: {
        auth: false
    },
    method: 'GET',
    path: '/',
    handler: function (request, h) {
        return h.file('./public/index.html');
    }
};

module.exports = [static, index];