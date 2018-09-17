//test.js
const Joi = require('joi');
const models = require('../models');
const {paginationDefine} = require('../utils/router-helper');

const GROUP_NAME = 'tests';

let boyList = {
    config: {
        auth: false,
        description: 'boyList',
        tags: ['api', GROUP_NAME],
        validate: {
            query: {
                ...paginationDefine
            }
        }
    },
    method: 'POST',
    path: `/${GROUP_NAME}/list`,
    handler: async (request, h) => {
        const {rows: results, count: totalCount} = await models.boy.findAndCountAll({
            offset: (request.query.page - 1) * request.query.limit,
            limit: request.query.limit,
        });
        return {results, totalCount};
    }
};
let boyFind = {
    config: {
        auth: false,
        description: 'boyFind',
        tags: ['api', GROUP_NAME],
        validate: {
            query: {
                id: Joi.number().required().description("id").default(1)
            }
        }
    },
    method: 'POST',
    path: `/${GROUP_NAME}/find`,
    handler: async (request, h) => {
        const data = await models.boy.findOne({
            where: {id: request.query.id}
        });
        return {data};
    }
};
let boyAdd = {
    config: {
        auth: false,
        description: 'boyAdd',
        tags: ['api', GROUP_NAME],
        validate: {
            query: {
                age: Joi.number().required().description("age"),
                cupSize: Joi.string().required().description("cupSize")
            }
        }
    },
    method: 'POST',
    path: `/${GROUP_NAME}/add`,
    handler: async (request, h) => {
        const data = await models.boy.create({
            age: request.query.age,
            cup_size: request.query.cupSize
        });
        return {data};
    }
};
let boyUpd = {
    config: {
        auth: false,
        description: 'boyUpd',
        tags: ['api', GROUP_NAME],
        validate: {
            query: {
                id: Joi.number().required().description("id"),
                age: Joi.number().required().description("age"),
                cupSize: Joi.string().required().description("cupSize")
            }
        }
    },
    method: 'POST',
    path: `/${GROUP_NAME}/upd`,
    handler: async (request, h) => {
        const data = await models.boy.update({
            age: request.query.age,
            cup_size: request.query.cupSize
        }, {
            where: {id: request.query.id}
        });
        return {data};
    }
};

module.exports = [boyList, boyFind, boyAdd, boyUpd];