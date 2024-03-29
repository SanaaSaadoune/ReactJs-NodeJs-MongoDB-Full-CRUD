const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema =  new Schema({
    email: { 
        type: String, 
        required: true, 
        minlength : 6,
        unique: true 
    },
    password: {
        type: String, 
        minlength : 6,
        required: true,
        select : false
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);