const { Model, DataTypes } = require('sequelize');

class Users extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize
        })
    }


}

module.exports = Users;