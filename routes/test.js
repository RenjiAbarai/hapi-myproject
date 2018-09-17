//test.js
const Joi = require('joi');
const controllers = require('../controllers');

let test = {
    config: {
        description: '登录',
        notes: '登录',
        tags: ['api'],
        validate: {
            query: {
                username: Joi.string().required().description("用户名").default('用户名'),
                password: Joi.string().required().description("密码").default('密码')
            },
            // payload: {
            //     username: Joi.string().required().description("用户名").default('用户名'),
            //     password: Joi.string().required().description("密码").default('密码')
            // }
        }
    },
    method: 'POST',
    path: '/test',
    handler: controllers.user.login
};
let getInfo = {
    config: {
        auth: false,
        description: '获取用户信息',
        notes: '根据用户名获取用户信息',
        tags: ['api'],
        validate: {
            query: {
                username: Joi.string().required().description("用户名").default('renji')
            }
            // query: {
            //     offset: joi.number().integer().min(0).default(0).description('query offset'),
            //     limit: joi.number().integer().default(10).description('query limit'),
            //     order: joi.string().default('-created_at').description('query order')
            // }
            //payload,path params
        }
        //response: {schema: responseModel},//responseModel 是joi.object()构造出来的
    },
    method: 'POST',
    path: '/getInfo',
    handler: controllers.user.getInfo
};
module.exports = [test, getInfo];