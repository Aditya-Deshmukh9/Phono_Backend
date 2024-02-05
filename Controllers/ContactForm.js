const Contact = require("../models/contact-middleware")

const contactForm = async (req, res, next) => {
    try {
        const response = req.body;
        await Contact.create(response)
        return res.status(200).json({ message: "message send successfully" })

    } catch (error) {
        // return res.status(500).json({ message: "message not delevered" })
        console.log(error);
        next(error)
    }
}

module.exports = contactForm;