const SwaggerOptions = {
    info: {
        title: '接口文档',
        version: require('package').version,
    },
    // 定义接口以tags属性定义为分组
    grouping: 'tags',
    tags: [
        {name: 'tests', description: '测试相关'},
        {name: 'users', description: '用户相关'},
    ],
};

module.exports = [{
    plugin: require('inert'),
}, {
    plugin: require('vision'),
}, {
    plugin: require('hapi-swagger'),
    options: SwaggerOptions
}];
