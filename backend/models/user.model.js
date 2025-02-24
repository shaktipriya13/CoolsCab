const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long'],
    },
    password: {
        type: String,
        required: true,
        select: false, // Excludes password by default when querying
    },
    socketId: {
        type: String,
    },
});

// Generate JWT Token
userSchema.methods.generateAuthToken = function () {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Compare Passwords
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Hash Password (Static Method)
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

// Ensure password is selected when querying users for authentication
userSchema.pre('findOne', function () {
    this.select('+password');
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
