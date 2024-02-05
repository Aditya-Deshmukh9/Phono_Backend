const express = require('express');
const authControllers = require("../Controllers/auth-controllers");
const { signupSchema, loginSchema } = require('../Validators/auth-validator');
const validate = require('../Middleware/validate-middleware');
const router = express.Router();

router.route("/").get(authControllers.home)

router
    .route("/register")
    .post(validate(signupSchema), authControllers.register);

router.route("/login").post(validate(loginSchema), authControllers.login)

module.exports = router;