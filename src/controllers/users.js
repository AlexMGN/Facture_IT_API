const User = require('../models/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { generateAccessToken } = require('../controllers/token');

const registerNewUser = async (user) => {
    const userExist = await User.find({ email: user.email });

    if (userExist.length > 0) {
        return {
            message: "Il semblerait que vous existez déjà chez nous"
        }
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);

        let user_credentials = {
            email: user.email,
            password: hashedPassword,
            adresse: user.adresse,
            ville: user.ville,
            cp: user.cp,
            pays: user.pays,
            tel_port: user.portable,
            access_token: await generateAccessToken(user, 'register'),
            trial: true,
            createdAt: new Date()
        };

        User(user_credentials).save((e) => {
            if (e) {
                throw new Error('Erreur lors de l\'inscription');
            }
        });

        return {
            message: "Inscription réussie !"
        }
    }

};



module.exports = {
    registerNewUser
};