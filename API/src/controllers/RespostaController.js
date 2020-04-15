const RespostasModel = require('../models/Respostas');

module.exports = {
    async create(req, res) {
        const { chat_id, resposta } = req.body;
        const respostas = await RespostasModel.create({ chat_id, resposta });
        console.log(respostas);
        return res.json(respostas);

    },
    async list(req, res) {
        const { chat_id } = req.query;
        if (chat_id) {
            const respostas = await RespostasModel.findAll({
                // attributes: ['resposta'],
                where: { chat_id }
            });
            return res.json({ respostas });
        } else {
            return res.json({ id: null });
        }

    },
};