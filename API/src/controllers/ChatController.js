const Chat = require('../models/Chat');

module.exports = {
    async index(req, res) {
        const { id } = req.query;
        if (!id) {
            const chat = await Chat.findAll();
            return res.json(chat);
        } else {
            const chat = await Chat.findOne({
                where: { id }
            });
            return res.json(chat);
        }

    },
    async create(req, res) {
        const { id, nome, user_id } = req.query;
        const { perguntas } = req.body;
        console.log(req.query)
        if (!id) {
            const chat = await Chat.create({ perguntas, nome, user_id });
            return res.json(chat);
        } else {
            const chat = await Chat.update({ perguntas, nome }, {
                where: { id },
                returning: true,
                plain: true
            }).then((result) => {
                return res.json(result);
            })
        }
    },
};