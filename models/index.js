//index.js
const Fs = require("fs");
const Path = require("path");
const Sequelize = require("sequelize");
const Config = require('../config/db_config');
let db = {};
//创建一个sequelize对象实例,连接数据库
let sequelize = new Sequelize(Config.database, Config.username, Config.password, {
	host: Config.host,
	dialect: Config.dialect,
	pool: {
		max: 5,
		min: 0,
		idle: 30000
	},
	define: {
		freezeTableName: true, // Model 对应的表名将与model名相同
		timestamps: false
	},
	operatorsAliases: false
});

Fs.readdirSync(__dirname).filter(function(file) {
	return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function(file) {
	var model = sequelize["import"](Path.join(__dirname, file));
	db[model.name] = model;
});
db.sequelize = sequelize;
module.exports = db;