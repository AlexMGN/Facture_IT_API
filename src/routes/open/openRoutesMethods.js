const { validationResult } = require('express-validator');

const { registerNewUser } = require('../../controllers/users');

const register = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).send({
            message: 'Erreur de validation : ',
            error: errors.array({ onlyFirstError: true })
        });
    } else {
        try {
            let data = {
                email: req.body.email.toLowerCase(),
                password: req.body.password,
                adresse: req.body.adresse,
                ville: req.body.ville,
                cp: req.body.cp,
                pays: req.body.pays,
                portable: req.body.portable,
                fixe: req.body.fixe
            };

            let new_user = await registerNewUser(data);

            res.status(200).send({
                message: new_user.message
            });
        } catch (err) {
            res.status(400).send({
                message: err
            });
        }
    }
};

module.exports = {
    register
};