const { Model, DataTypes } = require('sequelize');

class Chat extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            perguntas: DataTypes.JSONB,
        }, {
            sequelize
        })
    }


}

module.exports = Chat;