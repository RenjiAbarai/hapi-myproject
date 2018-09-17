//boy.js
module.exports = function(sequelize, DataTypes) {
	var Boy = sequelize.define("boy", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		age: DataTypes.INTEGER,
        cup_size: DataTypes.STRING,
	});

	return Boy;
};

/*
CREATE TABLE `boy` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `age` int(11) DEFAULT NULL,
    `cup_size` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8
*/