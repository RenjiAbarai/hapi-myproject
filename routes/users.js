//test.js
const Joi = require('joi');
const JWT = require('jsonwebtoken');
const {jwtHeaderDefine} = require('../utils/router-helper');
const config = require("../config");
const controllers = require('../controllers');
const models = require('../models');

const GROUP_NAME = 'users';

const generateJWT = (jwtInfo) => {
    // const payload = {
    //     // userId: jwtInfo.userId,
    //     // exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60, //一周有效期
    //     jwtInfo: jwtInfo,
    //     exp: Math.floor(new Date().getTime() / 1000) + 60, //60秒
    // };
    // return JWT.sign(payload, config.jwtSecret);
    const payload = jwtInfo.dataValues;
    payload['exp'] = Math.floor(new Date().getTime() / 1000) + 60;
    return JWT.sign(payload, config.jwtSecret);
};

let createJWT = {
    config: {
        description: '用于测试的用户 JWT 签发',
        tags: ['api', 'tests'],
        auth: false, // 约定此接口不参与 JWT 的用户验证，会结合下面的 hapi-auth-jwt 来使用
        validate: {
            query: {
                username: Joi.string().required().description("用户名"),
                // password: Joi.string().required().description("密码")
            }
        }
    },
    method: 'POST',
    path: `/${GROUP_NAME}/createJWT`,
    handler: async (request, h) => {
        const user = await models.user_info.findOne({
            where: {
                username: request.query.username,
                // password: request.query.password
            }
        });
        const data = generateJWT(user);
        return {
            statusCode: 200,
            message: "",
            data: data
        };
    }
};
let testJWT = {
    config: {
        description: '测试JWT',
        tags: ['api', 'tests'],
        validate: {
            ...jwtHeaderDefine
        },
    },
    method: 'POST',
    path: `/${GROUP_NAME}/testJWT`,
    handler: (request, h) => {
        return {
            statusCode: 200,
            message: "测试成功JWT",
            data: request.auth.credentials
        };
    }
};

let wxLogin = {
    config: {
        description: '登录',
        notes: '登录',
        tags: ['api'],
        validate: {
            query: {
                username: Joi.string().required().description("用户名").default('用户名'),
                password: Joi.string().required().description("密码").default('密码')
            }
        }
    },
    method: 'POST',
    path: '/wxLogin',
    handler: controllers.user.login
};

module.exports = [createJWT, testJWT, wxLogin];