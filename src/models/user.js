const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String,
    adresse: String,
    ville: String,
    cp: Number,
    pays: String,
    tel_port: String,
    tel_fix: String,
    access_token: String,
    forgot_token: String,
    trial: Boolean,
    Clients: [{
        id: String,
        status: String,
        name: String,
        email: String,
        adresse: String,
        ville: String,
        cp: String,
        pays: String,
        tel_port: String,
        tel_fix: String,
        Factures: [{
            id: String,
            created_at: Date,
            limit_at: Date,
            num_facture: String,
            status: String,
            Items: [{
                name: String,
                description: String,
                quantite: Number,
                prix_unitaire: Number,
                total: Number
            }]
        }],
        Devis: [{
            id: String,
            created_at: Date,
            limit_at: Date,
            num_devis: String,
            status: String,
            Items: [{
                name: String,
                description: String,
                quantite: Number,
                prix_unitaire: Number,
                total: Number
            }]
        }]
    }]
});

UserSchema.pre('save', next => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});

module.exports = mongoose.model('user', UserSchema);