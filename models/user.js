//user.js
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("user", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		sex: DataTypes.BIGINT,
		age: DataTypes.INTEGER,
	});

	return User;
};