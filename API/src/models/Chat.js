const { Model, DataTypes } = require('sequelize');

class Chat extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: DataTypes.STRING,
            perguntas: DataTypes.JSONB,
            user_id: DataTypes.STRING
        }, {
            sequelize
        })
    }


}

module.exports = Chat;