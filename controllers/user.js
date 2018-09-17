//user.js
let Models = require('../models')

module.exports = {
    login: function (request, h) {
        return Models.user_info.findAll({
            where: {
                username: request.query.username,
                password: request.query.password
            }
        }).then(function (result) {
            let reponseMess = {};
            if (result !== null) {
                reponseMess = {
                    code: 200,
                    message: 'success',
                    data: result
                }
            } else {
                reponseMess = {
                    code: -100,
                    message: 'fail',
                    data: ''
                }
            }
            return reponseMess;
        });
    },
    getInfo: function (request, h) {
        return Models.user_info.findAll({
            where: {
                username: request.query.username
            }
        }).then(function (result) {
            let reponseMess = {};
            if (result !== null) {
                reponseMess = {
                    code: 200,
                    message: 'success',
                    data: result
                }
            } else {
                reponseMess = {
                    code: -100,
                    message: 'fail',
                    data: ''
                }
            }
            return reponseMess;
        });
    }
};