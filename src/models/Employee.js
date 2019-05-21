const Promise = require('bluebird');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const EmployeeSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: Boolean, required: true },
    dob: { type: String, required: true },
    role: {type: String, enum: ['Admin', 'Staff'], default: 'Staff'},
    status: {type: Boolean, required: true, default: true}
}, {timestamps: true});

EmployeeSchema.pre('save', function (next) {
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
EmployeeSchema.method({
    validatePassword(password) {
        return bcrypt.compareSync(password, this.password);
    },
    generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },
})

module.exports = mongoose.model('Employee', EmployeeSchema);