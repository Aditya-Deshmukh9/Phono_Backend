const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: 'String',
        required: true,
    },
    email: {
        type: 'String',
        required: true,
    },
    phone: {
        type: 'String',
        required: true,
    },
    password: {
        type: 'String',
        required: true,
    },
    isAdmin: {
        type: 'String',
        required: false,
    }
})

userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(13)
        const hashedpassword = await bcrypt.hash(user.password, saltRound)
        user.password = hashedpassword;
        next();
    } catch (error) {
        next(error);
    }
})

userSchema.methods.generateToken = async function () {

    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: "30d",
            }
        );
    } catch (error) {
        console.log(error);
    }
}

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = new mongoose.model("USER", userSchema);
module.exports = User;