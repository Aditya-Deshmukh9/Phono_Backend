const User = require("../models/user-models");

const home = async (req, res, next) => {
    try {
        res.status(200).send({ msg: "Wellcome to Home Aditya" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }
        const userCreated = await User.create({ username, email, phone, password });
        console.log(userCreated);

        res.status(200).json({
            msg: "Registration Successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        next(error)
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email: email });
        if (!userExists) {
            return res.status(200).json({ msg: "Invalid credential" });
        }

        const isPasswordValid = await userExists.comparePassword(password);

        if (isPasswordValid) {
            res.status(200).json({
                message: "Login Successful",
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            });

        } else {
            res.status(401).json({ message: "Invalid email or password " });
        }

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        next(error)
    }
}

module.exports = { home, register, login };
