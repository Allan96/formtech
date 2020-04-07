const Chat = require('../models/Chat');

module.exports = {
    async index(req, res) {
        const { user_id } = req.query;
        // console.log(req);
        if (!user_id) {
            return res.json({ id: null });
        } else {
            const chat = await Chat.findAll({
                where: { user_id }
            });
            return res.json(chat);
        }

    }
};