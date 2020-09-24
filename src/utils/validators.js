const { check } = require('express-validator');

const validateRequest = (code) => {
    if (code === 'register') {
        return [
            check('email', "Merci d'indiquer une adresse email valide").notEmpty().isEmail(),
            check('password', "Merci de rentrer un mot de passe de 8 caractères minimum, avec au moins une majuscule et une minuscule").notEmpty().isLength({ min: 8 }).matches(/^(?=.*[a-z])(?=.*[A-Z])/,),
            check('adresse', "L'adresse ne doit pas être vide").notEmpty(),
            check('ville', "La ville ne doit pas être vide").notEmpty(),
            check('cp', "Le code postal ne peut pas faire moins de 5 chiffres").notEmpty().isLength({ min: 5, max: 5 }),
            check('pays', "Le pays ne doit pas être vide").notEmpty(),
            check('portable', "Le numéro de téléphone portable doit posséder 10 chiffres").notEmpty().isLength({ min: 10, max: 10 }),
        ]
    }
};

module.exports = {
    validateRequest: validateRequest
};