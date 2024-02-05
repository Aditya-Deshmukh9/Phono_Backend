const express = require('express')
const router = express.Router()
const contactForm = require('../Controllers/ContactForm')
// const validate = require('../Middleware/validate-middleware');
// const contactFormSchema = require('../Validators/contact-validator');

router.route('/contact').post(contactForm)

module.exports = router;