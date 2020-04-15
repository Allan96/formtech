const { Model, DataTypes } = require('sequelize');

class Respostas extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            chat_id: DataTypes.INTEGER,
            resposta: DataTypes.JSONB
        }, {
            sequelize
        })
    }


}

module.exports = Respostas;