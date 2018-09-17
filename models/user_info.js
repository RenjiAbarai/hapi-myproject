//user.js
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user_info", {
        uid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,  // 是否允许为NULL
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        salt: DataTypes.STRING,
        state: DataTypes.BOOLEAN,
        username: DataTypes.STRING
    });

    return User;
};
/*
CREATE TABLE `user_info` (
    `uid` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    `salt` varchar(255) DEFAULT NULL,
    `state` tinyint(4) NOT NULL,
    `username` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`uid`),
    UNIQUE KEY `UK_f2ksd6h8hsjtd57ipfq9myr64` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8
 */