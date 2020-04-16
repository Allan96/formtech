var jwt = require('jsonwebtoken');
const Users = require('../models/Users');

module.exports = {
    async index(req, res) {
        const { id } = req.query;
        if (!id) {
            const users = await Users.findAll();
            return res.json(users);
        } else {
            const users = await Users.findOne({
                where: { id }
            });
            return res.json(users);
        }

    },
    async login(req, res) {
        const { email, password } = req.body;
        const users = await Users.findOne({
            where: { email, password }
        });
        if (!users) {
            return res.status(200).send({ auth: false, id: null });
        }
        //JWT
        const id = users.id;
        var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 3600
        });

        return res.status(200).send({ auth: true, token: token, users });
    },
    async create(req, res) {
        const { id } = req.query;
        const { perguntas } = req.body;
        if (!id) {
            const users = await Users.create({ perguntas });
            return res.json(users);
        } else {
            const users = await Users.update({ perguntas }, {
                where: { id },
                returning: true,
                plain: true
            }).then((result) => {
                return res.json(result);
            })
        }
    },
};