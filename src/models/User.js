const Promise = require('bluebird');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: [8, 'Password min length is 8 characters'] },
    name: { type: String, required: true },
    phone_number: { type: String },
    address: { type: String },
    gender: { type: Number, default: 1 },
    status: {type: Boolean, required: true, default: true}
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
UserSchema.pre('save', function (next) {
    const me = this;
    if (me.isModified('password')) {
      me.password = me.generateHash(me.password);
      console.log(me.password);
    }
    next();
});

/**
 * Methods
 */
UserSchema.method({
    validatePassword(password) {
        return bcrypt.compareSync(password, this.password);
    },
    generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },
})


module.exports = mongoose.model('User', UserSchema);