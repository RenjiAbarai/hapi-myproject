const Joi = require('joi');

const paginationDefine = {
    limit: Joi.number().integer().min(1).default(10)
        .description('每页的条目数'),
    page: Joi.number().integer().min(1).default(1)
        .description('页码数'),
    pagination: Joi.boolean().default(true).description('是否开启分页，默认为true'),
};

const jwtHeaderDefine = {
    headers: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
};
// jwt: post请求 headers中传入authorization  get请求 body中传入token

module.exports = {paginationDefine, jwtHeaderDefine};
